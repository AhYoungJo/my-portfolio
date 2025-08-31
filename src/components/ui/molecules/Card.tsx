'use client';

import {CardProps} from '@/types/type';

export default function Card({
  title,
  value,
  icon,
  colorTheme,
  children,
  onClick,
  href,
}: CardProps) {
  const cardContent = (
    <div
      className={`
        glass-card p-5 h-full
        ${href || onClick ? 'cursor-pointer' : ''}
      `}
    >
      <div className='flex items-start justify-between mb-4'>
        <div className='flex-1'>
          <h3 className='text-sm font-medium glass-text-secondary uppercase tracking-wide mb-2'>
            {title}
          </h3>
          <p className=' font-bold glass-text-primary leading-tight'>{value}</p>
        </div>
        <div className='icon-glass ml-1'>
          <span className='text-xl glass-text-primary'>{icon}</span>
        </div>
      </div>
      {children}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='block'
      >
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className='w-full text-left'>
        {cardContent}
      </button>
    );
  }

  return cardContent;
}
