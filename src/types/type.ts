import {EXPORT_DETAIL} from 'next/dist/shared/lib/constants';
import {ReactNode} from 'react';

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio?: string;
  blog?: string;
  totalRepos: number;
  followers: number;
  following: number;
  topLanguages: {language: string; count: number}[];
  topFrameworks: {framework: string; count: number}[];
  recentProjects: number;
  accountCreated: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  homepage?: string;
  language?: string;
  created_at: string;
  updated_at: string;
  size: number;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  license?: string;
  frameworks?: string[];
  primaryFramework?: string;
}

export interface GitHubStatsPresentationProps {
  user: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

export interface CardProps {
  title: string;
  value: string | number;
  icon: string;
  unit?: string;
  colorTheme?: 'blue' | 'green' | 'purple' | 'yellow' | 'pink' | 'orange';
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export interface ErrorScreenProps {
  error: string;
}

export interface TagProps {
  icon: string;
  text: string;
  colorTheme?: 'blue' | 'green' | 'purple' | 'yellow' | 'pink' | 'orange';
  href?: string;
  onClick?: () => void;
}

export interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showHighlight?: boolean;
}

export interface InfoBoxProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

export interface CareerExperience {
  company: string;
  position: string;
  period: string;
  description: string;
  projects: {
    name: string;
    description?: string;
    role?: string;
    technologies: string[];
    achievements?: string[];
  }[];
}

export interface CareerTimelineProps {
  experiences: CareerExperience[];
}

export interface CareerIntroProps {
  name: string;
  title: string;
  summary: string;
  highlights: string[];
}

export interface RankingItem {
  name: string;
}

export interface RankingListProps {
  title: string;
  items: RankingItem[];
  icon: string;
  colorTheme: 'blue' | 'green' | 'purple' | 'yellow' | 'pink' | 'orange';
}

export interface LoadingScreenProps {
  type?: 'github-stats' | 'career-section' | 'project-list' | 'general';
  message?: string;
  showShimmer?: boolean;
}

export interface FrameworkRankingProps {
  frameworks: GitHubUser['topFrameworks'];
}
