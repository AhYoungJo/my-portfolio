'use client';

import {ErrorScreenProps} from '@/types/type';

export default function ErrorScreen({error}: ErrorScreenProps) {
  return (
    <div className='text-center py-12'>
      <div className='glass-card inline-block p-8 relative max-w-md mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-red-50/10 to-transparent opacity-30 animate-shimmer'></div>

        <div className='relative z-10 mb-6'>
          <div className='glass-card-secondary inline-flex items-center justify-center w-20 h-20 rounded-full mb-4'>
            <span className='text-3xl'>💥</span>
          </div>
          <div className='glass-text-primary text-xl font-semibold mb-2'>
            오류 발생!
          </div>
        </div>

        <div className='relative z-10 glass-card-secondary p-4 mb-6 rounded-lg'>
          <p className='glass-text-primary font-medium text-sm leading-relaxed'>
            GitHub 정보를 불러올 수 없습니다.
          </p>
          <p className='glass-text-secondary text-xs mt-2'>{error}</p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className='glass-card px-6 py-3 glass-text-primary font-medium hover:glass-card-secondary transition-all duration-200'
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
