'use client';

import {FrameworkRankingProps} from '@/types/type';
import RankingList from '@/components/ui/molecules/RankingList';

export default function FrameworkRanking({frameworks}: FrameworkRankingProps) {
  const frameworkItems = frameworks.map((framework, index) => ({
    name: framework.framework,
  }));

  return (
    <RankingList
      title='Framework Rank'
      items={frameworkItems}
      icon='🚀'
      colorTheme='green'
    />
  );
}
