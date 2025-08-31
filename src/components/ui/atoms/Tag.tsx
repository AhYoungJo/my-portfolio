'use client';

import {TagProps} from '@/types/type';

export default function Tag({icon, text, colorTheme, href, onClick}: TagProps) {
  const glassStyles = 'glass-card-secondary glass-text-primary';

  const tagContent = (
    <div
      className={`
      ${glassStyles}
      px-3 py-2 rounded-lg
      font-medium text-sm inline-flex items-center gap-2
      backdrop-filter backdrop-blur-md
      border border-white/20
      shadow-sm
      ${
        href || onClick
          ? 'hover:glass-card cursor-pointer transition-all duration-200'
          : ''
      }
    `}
    >
      <span className='text-base icon-glass-sm'>
        <span className='text-sm'>{icon}</span>
      </span>
      <span>{text}</span>
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
