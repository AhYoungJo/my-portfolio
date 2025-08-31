'use client';

import {RankingListProps, RankingItem} from '@/types/type';
const getRankIcon = (rank: number): string => {
  switch (rank) {
    case 1:
      return '🥇';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    case 4:
      return '🏅';
    case 5:
      return '🎖️';
    default:
      return '🏆';
  }
};

const getRankTextColor = (rank: number): string => {
  switch (rank) {
    case 1:
      return 'accent-orange';
    case 2:
    case 3:
      return 'glass-text-primary';
    default:
      return 'glass-text-secondary';
  }
};

export default function RankingList({
  title,
  items,
  icon,
  colorTheme,
}: RankingListProps) {
  if (items.length === 0) {
    return (
      <div className='glass-ranking p-8'>
        <div className='text-center'>
          <h3 className='text-lg font-semibold glass-text-primary mb-3'>
            {icon} {title}
          </h3>
          <p className='glass-text-tertiary text-sm'>정보를 수집중이에요...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='glass-ranking p-8'>
      <div className='mb-6'>
        <h3 className='text-xl font-semibold glass-text-primary mb-2'>
          {icon} {title}
        </h3>
        <div className='w-12 h-0.5 bg-gray-300 rounded-full'></div>
      </div>

      <div className='overflow-x-auto'>
        <div className='flex gap-3 pb-2 min-w-max'>
          {items.map((item, index) => (
            <div
              key={item.name}
              className={`
                glass-ranking-item
                inline-flex items-center gap-3 px-5 py-3
                font-medium text-sm
                whitespace-nowrap cursor-default
                ${getRankTextColor(index + 1)}
              `}
            >
              <span className='text-lg'>{getRankIcon(index + 1)}</span>
              <span className='font-semibold'>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
