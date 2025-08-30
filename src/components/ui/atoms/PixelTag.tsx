'use client';

import {PixelTagProps} from '@/types/type';

export default function PixelTag({
  icon,
  text,
  colorTheme,
  href,
  onClick,
}: PixelTagProps) {
  const colorClassMap = {
    blue: 'bg-blue-200 border-blue-400 shadow-blue-300 text-blue-800',
    green: 'bg-green-200 border-green-400 shadow-green-300 text-green-800',
    purple: 'bg-purple-200 border-purple-400 shadow-purple-300 text-purple-800',
    yellow: 'bg-yellow-200 border-yellow-400 shadow-yellow-300 text-yellow-800',
    pink: 'bg-pink-200 border-pink-400 shadow-pink-300 text-pink-800',
    orange: 'bg-orange-200 border-orange-400 shadow-orange-300 text-orange-800',
  };

  const tagContent = (
    <div
      className={`
      ${colorClassMap[colorTheme]} 
      border-2 rounded-none px-3 py-2 shadow-[3px_3px_0px_0px]
      font-bold text-sm inline-block
      ${
        href || onClick
          ? 'hover:shadow-[1px_1px_0px_0px] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 cursor-pointer'
          : ''
      }
    `}
    >
      <span>
        {icon} {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {tagContent}
      </a>
    );
  }

  if (onClick) {
    return <button onClick={onClick}>{tagContent}</button>;
  }

  return tagContent;
}
