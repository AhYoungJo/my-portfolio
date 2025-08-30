export async function GET() {
  try {
    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
      return Response.json(
        {error: 'GitHub 토큰이 설정되지 않았습니다.'},
        {status: 401},
      );
    }

    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!userResponse.ok) {
      throw new Error('GitHub API 호출 실패');
    }

    const user = await userResponse.json();

    // 사용자 저장소 목록 가져오기 (통계용)
    const reposResponse = await fetch(
      'https://api.github.com/user/repos?type=public&per_page=100',
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
        },
      },
    );

    if (!reposResponse.ok) {
      throw new Error('GitHub 저장소 API 호출 실패');
    }

    const repos = await reposResponse.json();

    // 언어별 통계 계산
    const languageStats: Record<string, number> = {};
    repos.forEach((repo: {language?: string}) => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    });

    // 가장 많이 사용하는 언어 순으로 정렬
    const topLanguages = Object.entries(languageStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([language, count]) => ({language, count}));

    // 최근 3개월 내 업데이트된 프로젝트
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    const recentProjects = repos.filter(
      (repo: {updated_at: string}) =>
        new Date(repo.updated_at) > threeMonthsAgo,
    ).length;

    const stats = {
      login: user.login,
      name: user.name,
      avatar_url: user.avatar_url,
      bio: user.bio,
      company: user.company,
      location: user.location,
      blog: user.blog,
      email: user.email,

      // 통계 정보
      totalRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      topLanguages,
      recentProjects,
      accountCreated: user.created_at,
    };

    return Response.json(stats);
  } catch (error) {
    console.error('GitHub User API 에러:', error);
    return Response.json(
      {error: 'GitHub 사용자 정보를 가져올 수 없습니다.'},
      {status: 500},
    );
  }
}
