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

    const filteredRepos = repos.map((repo: any) => ({
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
      topics: repo.topics || [], // 프로젝트 태그들
      license: repo.license?.name,
    }));

    return Response.json(filteredRepos);
  } catch (error) {
    console.error('GitHub Repos API 에러:', error);
    return Response.json(
      {error: 'GitHub 저장소 목록을 가져올 수 없습니다.'},
      {status: 500},
    );
  }
}
