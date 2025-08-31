'use client';

import {LoadingScreenProps} from '@/types/type';

export default function LoadingScreen({
  type = 'general',
  message,
  showShimmer = true,
}: LoadingScreenProps) {
  const getLoadingMessage = () => {
    if (message) return message;

    switch (type) {
      case 'github-stats':
        return 'GitHub 데이터 로딩 중...';
      case 'career-section':
        return '커리어 정보 로딩 중...';
      case 'project-list':
        return '프로젝트 목록 로딩 중...';
      default:
        return '데이터 로딩 중...';
    }
  };

  const renderGitHubStatsLoading = () => (
    <div className='space-y-8'>
      <div className='glass-card p-8 relative overflow-hidden'>
        {showShimmer && (
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer'></div>
        )}

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

      <div className='space-y-8'>
        {[...Array(2)].map((_, i) => (
          <div key={i} className='glass-ranking relative overflow-hidden'>
            {showShimmer && (
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer'></div>
            )}

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
    </div>
  );

  const renderCareerSectionLoading = () => (
    <div className='space-y-8'>
      <div className='glass-card p-8 relative overflow-hidden'>
        {showShimmer && (
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer'></div>
        )}

        <div className='relative z-10 text-center mb-8'>
          <div className='h-8 glass-card-secondary rounded-lg w-48 mx-auto mb-4 animate-pulse'></div>
          <div className='h-6 glass-card-secondary rounded-lg w-32 mx-auto mb-6 animate-pulse'></div>
          <div className='h-20 glass-card-secondary rounded-lg w-full max-w-2xl mx-auto animate-pulse'></div>
        </div>

        <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className='glass-card-secondary p-4 text-center rounded-lg animate-pulse'
            >
              <div className='icon-glass-sm mb-3 mx-auto w-12 h-12 glass-card-secondary rounded animate-pulse'></div>
              <div className='h-4 glass-card-secondary rounded animate-pulse'></div>
            </div>
          ))}
        </div>
      </div>

      <div className='glass-card p-8 relative overflow-hidden'>
        {showShimmer && (
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer'></div>
        )}

        <div className='relative z-10 mb-8'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='icon-glass-sm'>
              <div className='w-4 h-4 glass-card-secondary rounded animate-pulse'></div>
            </div>
            <div className='h-6 glass-card-secondary rounded w-32 animate-pulse'></div>
          </div>
          <div className='w-16 h-px bg-gray-400'></div>
        </div>

        <div className='relative z-10 space-y-6'>
          {[...Array(2)].map((_, i) => (
            <div key={i} className='flex gap-6'>
              <div className='flex-shrink-0'>
                <div className='w-4 h-4 glass-card-secondary rounded-full animate-pulse'></div>
                <div className='w-px h-full glass-card-secondary mx-auto mt-2'></div>
              </div>
              <div className='flex-1 space-y-4'>
                {[...Array(2)].map((_, j) => (
                  <div
                    key={j}
                    className='glass-card p-5 rounded-lg animate-pulse'
                  >
                    <div className='h-5 glass-card-secondary rounded mb-2 animate-pulse'></div>
                    <div className='h-4 glass-card-secondary rounded mb-3 animate-pulse'></div>
                    <div className='flex gap-2 mb-3'>
                      {[...Array(3)].map((_, k) => (
                        <div
                          key={k}
                          className='h-6 w-16 glass-card-secondary rounded animate-pulse'
                        ></div>
                      ))}
                    </div>
                    <div className='space-y-2'>
                      {[...Array(2)].map((_, l) => (
                        <div
                          key={l}
                          className='h-3 glass-card-secondary rounded animate-pulse'
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectListLoading = () => (
    <div>
      <div className='mb-8 text-center'>
        <div className='glass-card inline-block p-6'>
          <h2 className='text-xl font-semibold glass-text-primary mb-2'>
            🚀 프로젝트 목록
          </h2>
          <div className='w-16 h-px bg-gray-400 mx-auto'></div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='glass-card p-6 animate-pulse'>
            <div className='h-6 glass-card-secondary rounded mb-3'></div>
            <div className='h-4 glass-card-secondary rounded mb-4'></div>
            <div className='flex gap-2 mb-4'>
              <div className='h-6 w-16 glass-card-secondary rounded'></div>
              <div className='h-6 w-12 glass-card-secondary rounded'></div>
            </div>
            <div className='h-10 glass-card-secondary rounded'></div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGeneralLoading = () => (
    <div className='space-y-6'>
      {[...Array(3)].map((_, i) => (
        <div key={i} className='glass-card p-6 animate-pulse'>
          <div className='h-6 glass-card-secondary rounded mb-3'></div>
          <div className='h-4 glass-card-secondary rounded mb-4'></div>
          <div className='flex gap-2'>
            <div className='h-6 w-16 glass-card-secondary rounded'></div>
            <div className='h-6 w-12 glass-card-secondary rounded'></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLoadingContent = () => {
    switch (type) {
      case 'github-stats':
        return renderGitHubStatsLoading();
      case 'career-section':
        return renderCareerSectionLoading();
      case 'project-list':
        return renderProjectListLoading();
      default:
        return renderGeneralLoading();
    }
  };

  return (
    <div>
      {renderLoadingContent()}
      <div className='text-center py-8'>
        <div className='glass-card inline-flex items-center gap-3 px-6 py-3'>
          <div className='w-4 h-4 glass-card-secondary rounded-full animate-ping'></div>
          <span className='glass-text-primary font-medium'>
            {getLoadingMessage()}
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
