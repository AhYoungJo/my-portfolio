import {useCallback, useEffect} from 'react';
import {useProjectStore} from '@/stores/projectStore';
import {useGitHubRepos} from '@/hooks/useGitHub';

export function useProjectPagination() {
  const {
    projects,
    currentPage,
    hasMore,
    loading,
    error,
    addProjects,
    setCurrentPage,
    setHasMore,
    setLoading,
    setError,
    reset,
  } = useProjectStore();

  const perPage = 5;

  const {
    data: pageRepos,
    loading: pageLoading,
    error: pageError,
  } = useGitHubRepos({
    page: currentPage,
    perPage,
  });

  useEffect(() => {
    if (pageRepos) {
      const hasMoreData = pageRepos.length === perPage;
      setHasMore(hasMoreData);

      if (currentPage > 1) {
        addProjects(pageRepos);
      } else {
        addProjects(pageRepos);
      }
    }
  }, [pageRepos, currentPage, perPage, addProjects, setHasMore]);

  useEffect(() => {
    if (pageError) {
      setError(pageError);
    }
  }, [pageError, setError]);

  const handleLoadMore = useCallback(() => {
    if (hasMore && !pageLoading) {
      setCurrentPage(currentPage + 1);
    }
  }, [hasMore, pageLoading, currentPage, setCurrentPage]);

  const resetPagination = useCallback(() => {
    reset();
  }, [reset]);

  return {
    projects,
    currentPage,
    hasMore,
    loading: pageLoading,
    error: pageError,
    handleLoadMore,
    resetPagination,
    totalProjects: projects.length,
    perPage,
  };
}
