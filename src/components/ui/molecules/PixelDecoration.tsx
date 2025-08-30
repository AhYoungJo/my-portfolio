'use client';

import {PixelDecorationProps} from '@/types/type';

export default function PixelDecoration({
  variant = 'background',
  opacity = 5,
}: PixelDecorationProps) {
  if (variant === 'section') {
    return (
      <div
        className={`fixed inset-0 pointer-events-none overflow-hidden opacity-${opacity}`}
      >
        <div className='absolute top-10 left-10 text-6xl text-blue-400 animate-bounce'>
          🌟
        </div>
        <div className='absolute top-20 right-20 text-4xl text-pink-400 animate-pulse'>
          ✨
        </div>
        <div className='absolute bottom-20 left-20 text-5xl text-green-400 animate-ping'>
          ⭐
        </div>
        <div className='absolute bottom-10 right-10 text-3xl text-yellow-400 animate-bounce'>
          💫
        </div>
      </div>
    );
  }

  return (
    <div className='pixel-decorations'>
      <div className='absolute top-5 left-5 text-3xl text-pink-400 animate-bounce'>
        🎮
      </div>
      <div className='absolute top-5 right-5 text-3xl text-blue-400 animate-pulse'>
        ⭐
      </div>
      <div className='absolute top-1/4 left-10 text-2xl text-green-400 animate-ping'>
        🚀
      </div>
      <div className='absolute top-1/4 right-10 text-2xl text-yellow-400 animate-bounce'>
        ✨
      </div>
      <div className='absolute bottom-20 left-5 text-3xl text-purple-400 animate-pulse'>
        🌟
      </div>
      <div className='absolute bottom-20 right-5 text-3xl text-orange-400 animate-bounce'>
        💫
      </div>
    </div>
  );
}
