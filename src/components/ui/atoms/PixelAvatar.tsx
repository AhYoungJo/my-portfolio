'use client';

import {PixelAvatarProps} from '@/types/type';

export default function PixelAvatar({
  src,
  alt,
  size = 'large',
  showHighlight = true,
}: PixelAvatarProps) {
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
        border-4 border-white 
        shadow-[6px_6px_0px_0px] shadow-gray-400 
        rounded-none overflow-hidden
      `}
      >
        <img
          src={src}
          alt={alt}
          className='w-full h-full object-cover pixelated'
          style={{imageRendering: 'pixelated'}}
        />
      </div>

      {showHighlight && (
        <div className='absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 border-2 border-yellow-500 rounded-none'></div>
      )}
    </div>
  );
}
