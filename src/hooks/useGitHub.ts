import {useAsyncData} from './useAsyncData';
import {fetchGitHubUser, fetchGitHubRepos} from '@/api/github';

export function useGitHubUser() {
  return useAsyncData(fetchGitHubUser, {
    delay: 1000,
  });
}

export function useGitHubRepos() {
  return useAsyncData(fetchGitHubRepos, {
    delay: 800,
  });
}
