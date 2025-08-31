'use client';

interface PaginationControlsProps {
  hasMore: boolean;
  loading: boolean;
  onLoadMore?: () => void;
  totalCount: number;
}

export default function PaginationControls({
  hasMore,
  loading,
  onLoadMore,
  totalCount,
}: PaginationControlsProps) {
  return (
    <>
      {hasMore && onLoadMore && (
        <div className='text-center mt-8'>
          <button
            onClick={onLoadMore}
            disabled={loading}
            className='glass-card px-8 py-3 hover:glass-card-secondary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? (
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 glass-card-secondary rounded-full animate-spin'></div>
                <span className='glass-text-primary'>로딩 중...</span>
              </div>
            ) : (
              <span className='glass-text-primary font-medium'>더 보기</span>
            )}
          </button>
        </div>
      )}

      {!hasMore && totalCount > 0 && (
        <div className='text-center mt-8'>
          <div className='glass-card inline-block p-4'>
            <p className='glass-text-secondary text-sm'>
              모든 프로젝트를 불러왔습니다 ({totalCount}개)
            </p>
          </div>
        </div>
      )}
    </>
  );
}
