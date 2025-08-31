import {detectFrameworks} from '@/utils/frameworkDetector';

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

    const languageStats: Record<string, number> = {};
    repos.forEach((repo: {language?: string}) => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([language, count]) => ({language, count}));

    const frameworkStats: Record<string, number> = {};
    repos.forEach(
      (repo: {topics?: string[]; language?: string; name?: string}) => {
        const result = detectFrameworks({
          topics: repo.topics || [],
          language: repo.language,
        });

        const repoName = repo.name?.toLowerCase() || '';
        const additionalFrameworks: string[] = [];

        if (
          repoName.includes('react') &&
          (repo.language === 'JavaScript' || repo.language === 'TypeScript')
        ) {
          additionalFrameworks.push('React');
        }
        if (
          repoName.includes('next') &&
          (repo.language === 'JavaScript' || repo.language === 'TypeScript')
        ) {
          additionalFrameworks.push('Next.js');
        }
        if (
          repoName.includes('vue') &&
          (repo.language === 'JavaScript' || repo.language === 'TypeScript')
        ) {
          additionalFrameworks.push('Vue.js');
        }
        if (repoName.includes('angular') && repo.language === 'TypeScript') {
          additionalFrameworks.push('Angular');
        }
        if (repoName.includes('django') && repo.language === 'Python') {
          additionalFrameworks.push('Django');
        }
        if (repoName.includes('flask') && repo.language === 'Python') {
          additionalFrameworks.push('Flask');
        }
        if (
          repoName.includes('express') &&
          (repo.language === 'JavaScript' || repo.language === 'TypeScript')
        ) {
          additionalFrameworks.push('Express');
        }

        if (
          result.frameworks.length === 0 &&
          additionalFrameworks.length === 0
        ) {
          switch (repo.language) {
            case 'JavaScript':
            case 'TypeScript':
              // JS/TS 프로젝트에는 기본적으로 Node.js 환경 가정
              additionalFrameworks.push('JS/TS');
              break;
            case 'Python':
              additionalFrameworks.push('Python');
              break;
            case 'Java':
              additionalFrameworks.push('Java');
              break;
            case 'PHP':
              additionalFrameworks.push('PHP');
              break;
          }
        }

        [...result.frameworks, ...additionalFrameworks].forEach(framework => {
          frameworkStats[framework] = (frameworkStats[framework] || 0) + 1;
        });
      },
    );

    let topFrameworks = Object.entries(frameworkStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([framework, count]) => ({framework, count}));

    if (topFrameworks.length === 0) {
      const languageFrameworkMap: Record<string, string> = {
        JavaScript: 'JavaScript',
        TypeScript: 'TypeScript',
        Python: 'Python',
        Java: 'Java',
        PHP: 'PHP',
        'C#': 'C#',
        Go: 'Go',
        Rust: 'Rust',
        'C++': 'C++',
        C: 'C',
      };

      topFrameworks = topLanguages
        .filter(lang => languageFrameworkMap[lang.language])
        .map(lang => ({
          framework: languageFrameworkMap[lang.language],
          count: lang.count,
        }))
        .slice(0, 5);
    }

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

      totalRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      topLanguages,
      topFrameworks,
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
