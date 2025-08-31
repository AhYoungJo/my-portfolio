'use client';

import {AvatarProps} from '@/types/type';

export default function Avatar({
  src,
  alt,
  size = 'large',
  showHighlight = true,
}: AvatarProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
    xlarge: 'w-40 h-40',
  };

  return (
    <div className='relative'>
      <div
        className={`
        ${sizeClasses[size]} 
        glass-card p-1
        backdrop-filter blur(20px)
        border border-white/30
        rounded-2xl overflow-hidden
        shadow-lg
      `}
      >
        <img
          src={src}
          alt={alt}
          className='w-full h-full object-cover rounded-xl'
        />
      </div>

      {showHighlight && (
        <div className='absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full shadow-md border border-white/50'></div>
      )}
    </div>
  );
}
