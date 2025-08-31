'use client';

import {GitHubRepo, ProjectListPresentationProps} from '@/types/type';
import LoadingScreen from '@/components/ui/organisms/LoadingScreen';
import ErrorScreen from '@/components/ui/organisms/ErrorScreen';
import ProjectCard from '@/components/ui/molecules/ProjectCard';
import PaginationControls from '@/components/ui/molecules/PaginationControls';

export default function ProjectListPresentation({
  repos,
  loading,
  error,
  hasMore = false,
  onLoadMore,
  currentPage = 1,
}: ProjectListPresentationProps) {
  if (loading && (!repos || repos.length === 0)) {
    return <LoadingScreen type='project-list' />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {repos?.map((repo: GitHubRepo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>

      {(!repos || repos.length === 0) && (
        <div className='text-center py-12'>
          <div className='glass-card inline-block p-6'>
            <p className='glass-text-secondary'>표시할 프로젝트가 없습니다.</p>
          </div>
        </div>
      )}

      <PaginationControls
        hasMore={hasMore}
        loading={loading}
        onLoadMore={onLoadMore}
        totalCount={repos?.length || 0}
      />
    </div>
  );
}
