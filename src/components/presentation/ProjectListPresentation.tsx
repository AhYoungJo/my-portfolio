'use client';

import {GitHubRepo} from '@/types/type';
import LoadingScreen from '@/components/ui/organisms/LoadingScreen';
import ErrorScreen from '@/components/ui/organisms/ErrorScreen';

interface ProjectListPresentationProps {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

export default function ProjectListPresentation({
  repos,
  loading,
  error,
}: ProjectListPresentationProps) {
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-100 text-yellow-800',
      TypeScript: 'bg-blue-100 text-blue-800',
      Python: 'bg-green-100 text-green-800',
      Java: 'bg-red-100 text-red-800',
      'C++': 'bg-purple-100 text-purple-800',
      'C#': 'bg-purple-100 text-purple-800',
      Go: 'bg-cyan-100 text-cyan-800',
      Rust: 'bg-orange-100 text-orange-800',
      PHP: 'bg-indigo-100 text-indigo-800',
      Ruby: 'bg-red-100 text-red-800',
      Swift: 'bg-orange-100 text-orange-800',
      Kotlin: 'bg-purple-100 text-purple-800',
      Vue: 'bg-green-100 text-green-800',
      React: 'bg-blue-100 text-blue-800',
      HTML: 'bg-orange-100 text-orange-800',
      CSS: 'bg-blue-100 text-blue-800',
      Svelte: 'bg-orange-100 text-orange-800',
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  const formatProjectSize = (sizeInKB: number) => {
    if (sizeInKB > 1024) {
      return `${(sizeInKB / 1024).toFixed(1)}MB`;
    }
    return `${sizeInKB}KB`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return <LoadingScreen type='project-list' />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <div>
      <div className='mb-8 text-center'>
        <div className='glass-card inline-block p-6'>
          <h2 className='text-xl font-semibold glass-text-primary mb-2'>
            🚀 프로젝트 목록 ({repos?.length || 0}개)
          </h2>
          <div className='w-16 h-px bg-gray-400 mx-auto'></div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {repos?.map((repo: GitHubRepo) => (
          <div
            key={repo.id}
            className='glass-card p-6 hover:glass-card-secondary transition-all duration-200'
          >
            <div className='flex items-start justify-between mb-3'>
              <h3 className='text-xl font-bold glass-text-primary hover:text-blue-400 transition-colors'>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h3>
              <div className='flex items-center space-x-2 text-xs glass-text-secondary'>
                <span>{formatProjectSize(repo.size)}</span>
              </div>
            </div>

            <p className='glass-text-secondary mb-4 text-sm leading-relaxed min-h-[3rem]'>
              {repo.description || '설명이 없습니다.'}
            </p>

            <div className='flex items-center space-x-4 mb-4 text-sm glass-text-secondary'>
              <div className='flex items-center'>
                <span className='text-yellow-400 mr-1'>⭐</span>
                {repo.stargazers_count}
              </div>
              <div className='flex items-center'>
                <span className='mr-1'>🍴</span>
                {repo.forks_count}
              </div>
              {repo.license && (
                <div className='flex items-center'>
                  <span className='mr-1'>📄</span>
                  {repo.license}
                </div>
              )}
            </div>

            <div className='flex flex-wrap gap-2 mb-4'>
              {repo.language && (
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(
                    repo.language,
                  )}`}
                >
                  {repo.language}
                </span>
              )}
              {repo.topics?.slice(0, 3).map((topic: string) => (
                <span
                  key={topic}
                  className='px-2 py-1 glass-card-secondary text-xs glass-text-primary rounded-full'
                >
                  #{topic}
                </span>
              ))}
              {repo.topics && repo.topics.length > 3 && (
                <span className='px-2 py-1 glass-card-secondary text-xs glass-text-primary rounded-full'>
                  +{repo.topics.length - 3}
                </span>
              )}
            </div>

            <div className='text-xs glass-text-secondary mb-4 space-y-1'>
              <p>생성: {formatDate(repo.created_at)}</p>
              <p>업데이트: {formatDate(repo.updated_at)}</p>
            </div>

            <div className='flex gap-2'>
              <a
                href={repo.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 inline-flex items-center justify-center px-4 py-2 glass-card-secondary text-sm font-medium rounded-md hover:glass-card transition-all duration-200'
              >
                <svg
                  className='w-4 h-4 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                    clipRule='evenodd'
                  />
                </svg>
                GitHub
              </a>
              {repo.homepage && (
                <a
                  href={
                    repo.homepage.startsWith('http')
                      ? repo.homepage
                      : `https://${repo.homepage}`
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-4 py-2 glass-card-secondary text-sm font-medium rounded-md hover:glass-card transition-all duration-200'
                >
                  <svg
                    className='w-4 h-4 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {(!repos || repos.length === 0) && (
        <div className='text-center py-12'>
          <div className='glass-card inline-block p-6'>
            <p className='glass-text-secondary'>표시할 프로젝트가 없습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}
