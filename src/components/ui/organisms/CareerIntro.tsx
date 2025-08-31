'use client';

import {CareerIntroProps} from '@/types/type';

export default function CareerIntro({
  name,
  title,
  summary,
  highlights,
}: CareerIntroProps) {
  return (
    <div className='glass-card p-8 mb-8'>
      <div className='text-center mb-8'>
        <h2 className='text-2xl font-bold glass-text-primary mb-2'>{name}</h2>
        <p className='text-lg glass-text-secondary mb-4'>{title}</p>
        <div className='w-16 h-px bg-gray-200 border-opacity-30 mx-auto mb-6'></div>
        <p className='text-base glass-text-secondary leading-relaxed max-w-2xl mx-auto'>
          {summary}
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className='glass-card-secondary p-4 text-center rounded-lg'
          >
            <div className='icon-glass-sm mb-3'>
              <span className='text-xl'>
                {index === 0 && '💻'}
                {index === 1 && '🚀'}
                {index === 2 && '🎯'}
                {index === 3 && '📚'}
              </span>
            </div>
            <p className='text-sm glass-text-primary font-medium'>
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
