'use client';

import {GitHubUser} from '@/types/type';
import {useEffect, useState} from 'react';
import GitHubStatsPresentation from '@/components/presentation/GitHubStatsPresentation';

export default function GitHubStatsContainer() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/github/user');
        if (!response.ok) {
          throw new Error('GitHub 사용자 정보를 가져올 수 없습니다.');
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <GitHubStatsPresentation user={user} loading={loading} error={error} />
  );
}
