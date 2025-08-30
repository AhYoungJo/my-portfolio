export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio?: string;
  company?: string;
  location?: string;
  blog?: string;
  email?: string;
  totalRepos: number;
  followers: number;
  following: number;
  topLanguages: {language: string; count: number}[];
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
}
