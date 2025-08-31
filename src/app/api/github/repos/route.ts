import {detectFrameworks, fetchPackageJson} from '@/utils/frameworkDetector';

export async function GET(request: Request) {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    const {searchParams} = new URL(request.url);

    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '5');
    const all = searchParams.get('all') === 'true';

    if (!githubToken) {
      return Response.json(
        {error: 'GitHub 토큰이 설정되지 않았습니다.'},
        {status: 401},
      );
    }

    const apiUrl = all
      ? 'https://api.github.com/user/repos?sort=updated&type=public&per_page=100'
      : `https://api.github.com/user/repos?sort=updated&type=public&per_page=${perPage}&page=${page}`;

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error('GitHub API 호출 실패');
    }

    const repos = await response.json();

    const reposWithFrameworks = await Promise.all(
      repos.map(async (repo: any) => {
        let frameworks: string[] = [];
        let primaryFramework: string | undefined;

        try {
          const topicsResult = detectFrameworks({
            topics: repo.topics || [],
            language: repo.language,
          });

          frameworks = topicsResult.frameworks;
          primaryFramework = topicsResult.primaryFramework;

          const isTopRepo = repos.indexOf(repo) < 5;
          if (
            isTopRepo &&
            repo.language &&
            ['JavaScript', 'TypeScript'].includes(repo.language)
          ) {
            const packageJson = await fetchPackageJson(
              repo.owner.login,
              repo.name,
              githubToken,
            );

            if (packageJson) {
              const packageResult = detectFrameworks({
                topics: repo.topics || [],
                packageJson,
                language: repo.language,
              });

              frameworks = packageResult.frameworks;
              primaryFramework = packageResult.primaryFramework;
            }
          }
        } catch (error) {
          console.warn(`프레임워크 탐지 실패 (${repo.name}):`, error);
        }

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          size: repo.size,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          topics: repo.topics || [],
          license: repo.license?.name,
          frameworks,
          primaryFramework,
        };
      }),
    );

    const responseData = {
      repos: reposWithFrameworks,
      meta: {
        page,
        perPage,
        totalCount: reposWithFrameworks.length,
        hasMore: reposWithFrameworks.length === perPage,
      },
    };

    return Response.json(responseData);
  } catch (error) {
    console.error('GitHub Repos API 에러:', error);
    return Response.json(
      {error: 'GitHub 저장소 목록을 가져올 수 없습니다.'},
      {status: 500},
    );
  }
}
