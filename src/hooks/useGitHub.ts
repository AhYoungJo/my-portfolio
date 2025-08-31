import {useAsyncData} from './useAsyncData';
import {fetchGitHubUser, fetchGitHubRepos} from '@/api/github';

export function useGitHubUser() {
  return useAsyncData(fetchGitHubUser, {
    delay: 1000,
  });
}

export function useGitHubRepos(options?: {
  page?: number;
  perPage?: number;
  all?: boolean;
}) {
  const {page = 1, perPage = 5, all = false} = options || {};

  return useAsyncData(
    () => fetchGitHubRepos({page, perPage, all}),
    {
      delay: 800,
    },
    [page, perPage, all], // 의존성 배열 추가
  );
}
