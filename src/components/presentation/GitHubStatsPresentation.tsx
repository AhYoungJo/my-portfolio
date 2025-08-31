'use client';

import {GitHubStatsPresentationProps, GitHubUser} from '@/types/type';
import Card from '@/components/ui/molecules/Card';
import Profile from '@/components/ui/organisms/Profile';
import LanguageRanking from '@/components/ui/organisms/LanguageRanking';
import LoadingScreen from '@/components/ui/organisms/LoadingScreen';
import ErrorScreen from '@/components/ui/organisms/ErrorScreen';

const cardList = [
  {
    title: 'GitHub',
    icon: '🔗',
    getValue: (user: GitHubUser) => `@${user.login}`,
    getHref: (user: GitHubUser) => `https://github.com/${user.login}`,
  },
  {
    title: '최근 3개월',
    icon: '🔥',
    getValue: (user: GitHubUser) => `${user.recentProjects}개 활동`,
  },

  {
    title: '팔로워',
    icon: '👥',
    getValue: (user: GitHubUser) => `${user.followers}명`,
  },
  {
    title: '팔로잉',
    icon: '🤝',
    getValue: (user: GitHubUser) => `${user.following}명`,
  },
];

export default function GitHubStatsPresentation({
  user,
  loading,
  error,
}: GitHubStatsPresentationProps) {
  if (loading) {
    return <LoadingScreen type='github-stats' />;
  }

  if (error || !user) {
    return <ErrorScreen error={error || '사용자 정보를 불러올 수 없습니다.'} />;
  }

  return (
    <div className='space-y-6'>
      <Profile user={user} />
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
        {cardList.map(card => {
          const href = card.getHref ? card.getHref(user) : undefined;
          return (
            <Card
              key={card.title}
              title={card.title}
              icon={card.icon}
              value={card.getValue(user)}
              {...(href && {href})}
            />
          );
        })}
      </div>

      <div className='space-y-6'>
        <LanguageRanking languages={user.topLanguages} />
      </div>
    </div>
  );
}
