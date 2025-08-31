'use client';

import ProjectListPresentation from '@/components/presentation/ProjectListPresentation';
import {useProjectPagination} from '@/hooks/useProjectPagination';

export default function ProjectListContainer() {
  const {
    projects,
    currentPage,
    hasMore,
    loading,
    error,
    handleLoadMore,
    totalProjects,
  } = useProjectPagination();

  return (
    <ProjectListPresentation
      repos={projects}
      loading={loading}
      error={error}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
      currentPage={currentPage}
    />
  );
}
