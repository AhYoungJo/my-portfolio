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

export async function fetchGitHubRepos(options?: {
  page?: number;
  perPage?: number;
  all?: boolean;
}): Promise<GitHubRepo[]> {
  const {page = 1, perPage = 5, all = false} = options || {};

  const cacheKey = all
    ? 'github-repos-all'
    : `github-repos-page-${page}-per-${perPage}`;

  const cachedData = memoryCache.get<GitHubRepo[]>(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const params = new URLSearchParams();
  if (all) {
    params.append('all', 'true');
  } else {
    params.append('page', page.toString());
    params.append('per_page', perPage.toString());
  }

  const response = await fetch(`/api/github/repos?${params.toString()}`);
  if (!response.ok) {
    throw new Error('프로젝트 목록을 가져올 수 없습니다.');
  }
  const responseData = await response.json();
  const reposData = responseData.repos || responseData;

  const ttl = all ? 10 * 60 * 1000 : 5 * 60 * 1000;
  memoryCache.set(cacheKey, reposData, ttl);

  return reposData;
}
