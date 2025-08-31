'use client';

import {GitHubStatsPresentationProps, GitHubUser} from '@/types/type';
import Card from '@/components/ui/molecules/Card';
import Profile from '@/components/ui/organisms/Profile';
import LanguageRanking from '@/components/ui/organisms/LanguageRanking';
// import FrameworkRanking from '@/components/ui/organisms/FrameworkRanking';
import LoadingScreen from '@/components/ui/organisms/LoadingScreen';
import ErrorScreen from '@/components/ui/organisms/ErrorScreen';

const cardList = [
  {
    title: '총 프로젝트',
    icon: '📚',
    getValue: (user: GitHubUser) => `${user.totalRepos}개`,
  },
  {
    title: '팔로워',
    icon: '👥',
    getValue: (user: GitHubUser) => `${user.followers}명`,
  },
  {
    title: '최근 3개월',
    icon: '🔥',
    getValue: (user: GitHubUser) => `${user.recentProjects}개 활동`,
  },
  {
    title: '팔로잉',
    icon: '🤝',
    getValue: (user: GitHubUser) => `${user.following}명`,
  },
  {
    title: '계정 연령',
    icon: '⏰',
    getValue: (user: GitHubUser, accountAge: number) => `${accountAge}년`,
  },
  {
    title: 'GitHub',
    icon: '🔗',
    getValue: (user: GitHubUser) => `@${user.login}`,
    getHref: (user: GitHubUser) => `https://github.com/${user.login}`,
  },
];

export default function GitHubStatsPresentation({
  user,
  loading,
  error,
}: GitHubStatsPresentationProps) {
  if (loading) {
    return <LoadingScreen />;
  }

  if (error || !user) {
    return <ErrorScreen error={error || '알 수 없는 오류'} />;
  }

  const accountAge = Math.floor(
    (new Date().getTime() - new Date(user.accountCreated).getTime()) /
      (1000 * 60 * 60 * 24 * 365),
  );

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
              value={card.getValue(user, accountAge)}
              {...(href && {href})}
            />
          );
        })}
      </div>

      <div className='space-y-6'>
        <LanguageRanking languages={user.topLanguages} />
        {/* <FrameworkRanking frameworks={user.topFrameworks} /> */}
      </div>
    </div>
  );
}
