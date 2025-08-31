'use client';

import {GitHubUser} from '@/types/type';
import RankingList from '@/components/ui/molecules/RankingList';

interface LanguageRankingProps {
  languages: GitHubUser['topLanguages'];
}

export default function LanguageRanking({languages}: LanguageRankingProps) {
  const languageItems = languages.map((lang, index) => ({
    name: lang.language,
  }));

  return (
    <RankingList
      title='Language Rank'
      items={languageItems}
      icon='💻'
      colorTheme='purple'
    />
  );
}
