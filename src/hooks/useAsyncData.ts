import {useState, useEffect, useCallback, useRef} from 'react';

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

  // fetchFunction을 useRef로 안정화
  const fetchFunctionRef = useRef(fetchFunction);
  fetchFunctionRef.current = fetchFunction;

  const executeFetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      const result = await fetchFunctionRef.current();
      setData(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      setError(errorMessage);
      console.error('Data fetch failed:', err);
    } finally {
      setLoading(false);
    }
  }, [delay]);

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
