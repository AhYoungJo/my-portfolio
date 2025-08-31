'use client';

import GitHubStatsPresentation from '@/components/presentation/GitHubStatsPresentation';
import {useGitHubUser} from '@/hooks/useGitHub';

export default function GitHubStatsContainer() {
  const {data: user, loading, error} = useGitHubUser();

  return (
    <GitHubStatsPresentation user={user} loading={loading} error={error} />
  );
}
