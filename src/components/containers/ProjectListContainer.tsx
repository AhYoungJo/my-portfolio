'use client';

import ProjectListPresentation from '@/components/presentation/ProjectListPresentation';
import {useGitHubRepos} from '@/hooks/useGitHub';

export default function ProjectListContainer() {
  const {data: repos, loading, error} = useGitHubRepos();

  return (
    <ProjectListPresentation
      repos={repos || []}
      loading={loading}
      error={error}
    />
  );
}
