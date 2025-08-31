import {GitHubUser, GitHubRepo} from '@/types/type';

export async function fetchGitHubUser(): Promise<GitHubUser> {
  const response = await fetch('/api/github/user');
  if (!response.ok) {
    throw new Error('GitHub 사용자 정보를 가져올 수 없습니다.');
  }
  const data = await response.json();

  return {
    login: data.login,
    name: data.name,
    avatar_url: data.avatar_url,
    bio: data.bio,
    totalRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
    topLanguages: data.topLanguages || [],
    topFrameworks: data.topFrameworks || [],
    recentProjects: data.recentProjects || 0,
    accountCreated: data.created_at,
  };
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch('/api/github/repos');
  if (!response.ok) {
    throw new Error('프로젝트 목록을 가져올 수 없습니다.');
  }
  return response.json();
}
