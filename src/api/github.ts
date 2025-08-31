import {GitHubUser, GitHubRepo} from '@/types/type';
import {memoryCache} from '@/utils/cache';

export async function fetchGitHubUser(): Promise<GitHubUser> {
  const cacheKey = 'github-user';

  const cachedData = memoryCache.get<GitHubUser>(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const response = await fetch('/api/github/user');
  if (!response.ok) {
    throw new Error('GitHub 사용자 정보를 가져올 수 없습니다.');
  }
  const data = await response.json();
  const userData = {
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
  memoryCache.set(cacheKey, userData, 10 * 60 * 1000);
  return userData;
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const cacheKey = 'github-repos';

  const cachedData = memoryCache.get<GitHubRepo[]>(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch('/api/github/repos');
  if (!response.ok) {
    throw new Error('프로젝트 목록을 가져올 수 없습니다.');
  }
  const reposData = await response.json();

  memoryCache.set(cacheKey, reposData, 5 * 60 * 1000);

  return reposData;
}
