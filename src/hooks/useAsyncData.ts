import {useState, useEffect, useCallback} from 'react';

interface UseAsyncDataOptions<T> {
  initialData?: T;
  delay?: number; // 로딩 시뮬레이션용 타이머
  autoFetch?: boolean; // 컴포넌트 마운트 시 자동으로 데이터 페칭할지
}

interface UseAsyncDataReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  setData: (data: T) => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

export function useAsyncData<T>(
  fetchFunction: () => Promise<T>,
  options: UseAsyncDataOptions<T> = {},
): UseAsyncDataReturn<T> {
  const {initialData = null, delay = 0, autoFetch = true} = options;

  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeFetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      setError(errorMessage);
      console.error('Data fetch failed:', err);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, delay]);

  const refetch = useCallback(async () => {
    await executeFetch();
  }, [executeFetch]);

  useEffect(() => {
    if (autoFetch) {
      executeFetch();
    }
  }, [executeFetch, autoFetch]);

  return {
    data,
    loading,
    error,
    refetch,
    setData,
    setError,
    setLoading,
  };
}

export function useGitHubUser() {
  return useAsyncData(
    async () => {
      const response = await fetch('/api/github/user');
      if (!response.ok) {
        throw new Error('GitHub 사용자 정보를 가져올 수 없습니다.');
      }
      return response.json();
    },
    {delay: 1000}, // 1초 로딩 시뮬레이션
  );
}

export function useGitHubRepos() {
  return useAsyncData(
    async () => {
      const response = await fetch('/api/github/repos');
      if (!response.ok) {
        throw new Error('프로젝트 목록을 가져올 수 없습니다.');
      }
      return response.json();
    },
    {delay: 800}, // 0.8초 로딩 시뮬레이션
  );
}

export function useCareerData() {
  return useAsyncData(
    async () => {
      const {mockIntroData, mockExperiences} = await import(
        '@/constants/career'
      );
      return {
        introData: mockIntroData,
        experiences: mockExperiences,
      };
    },
    {delay: 1500}, // 1.5초 로딩 시뮬레이션
  );
}
