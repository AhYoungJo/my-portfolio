'use client';

export default function LoadingScreen() {
  return (
    <div className='space-y-8'>
      {/* 프로필 로딩 */}
      <div className='glass-card p-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer'></div>

        <div className='relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8'>
          <div className='w-32 h-32 glass-card-secondary rounded-2xl animate-pulse'></div>

          <div className='flex-1 space-y-4'>
            <div className='h-8 glass-card-secondary rounded-lg animate-pulse'></div>
            <div className='h-6 glass-card-secondary rounded-lg w-3/4 animate-pulse'></div>
            <div className='h-16 glass-card-secondary rounded-lg animate-pulse'></div>
            <div className='flex gap-3'>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className='h-8 w-20 glass-card-secondary rounded-lg animate-pulse'
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 통계 카드 로딩 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='glass-card p-6 animate-pulse'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex-1'>
                <div className='h-4 glass-card-secondary rounded mb-2 animate-pulse'></div>
                <div className='h-8 glass-card-secondary rounded animate-pulse'></div>
              </div>
              <div className='icon-glass-sm animate-pulse'>
                <div className='w-6 h-6 glass-card-secondary rounded'></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 랭킹 로딩 */}
      <div className='space-y-8'>
        {[...Array(2)].map((_, i) => (
          <div key={i} className='glass-ranking relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer'></div>

            <div className='relative z-10 p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='icon-glass-sm'>
                  <div className='w-4 h-4 glass-card-secondary rounded animate-pulse'></div>
                </div>
                <div className='h-6 glass-card-secondary rounded w-32 animate-pulse'></div>
              </div>
              <div className='w-16 h-px bg-gray-400 mb-6'></div>

              <div className='overflow-x-auto'>
                <div className='flex gap-3 pb-2 min-w-max'>
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className='glass-ranking-item animate-pulse'>
                      <div className='flex items-center gap-3 px-5 py-3'>
                        <div className='w-6 h-6 glass-card-secondary rounded animate-pulse'></div>
                        <div className='h-4 glass-card-secondary rounded w-20 animate-pulse'></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 로딩 메시지 */}
      <div className='text-center py-8'>
        <div className='glass-card inline-flex items-center gap-3 px-6 py-3'>
          <div className='w-4 h-4 glass-card-secondary rounded-full animate-ping'></div>
          <span className='glass-text-primary font-medium'>
            GitHub 데이터 로딩 중...
          </span>
          <div className='flex gap-1'>
            <div className='w-2 h-2 glass-card-secondary rounded-full animate-bounce'></div>
            <div
              className='w-2 h-2 glass-card-secondary rounded-full animate-bounce'
              style={{animationDelay: '0.1s'}}
            ></div>
            <div
              className='w-2 h-2 glass-card-secondary rounded-full animate-bounce'
              style={{animationDelay: '0.2s'}}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
