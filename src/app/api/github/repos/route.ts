import {detectFrameworks, fetchPackageJson} from '@/utils/frameworkDetector';

export async function GET() {
  try {
    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
      return Response.json(
        {error: 'GitHub 토큰이 설정되지 않았습니다.'},
        {status: 401},
      );
    }

    // 사용자의 저장소 목록 중에서 최신순, public만 가져오기
    const response = await fetch(
      'https://api.github.com/user/repos?sort=updated&type=public&per_page=20',
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
        },
      },
    );

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

          // 상위 5개 저장소에만 적용해서 API 호출 수 제한
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

    return Response.json(reposWithFrameworks);
  } catch (error) {
    console.error('GitHub Repos API 에러:', error);
    return Response.json(
      {error: 'GitHub 저장소 목록을 가져올 수 없습니다.'},
      {status: 500},
    );
  }
}
