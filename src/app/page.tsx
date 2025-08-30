import GitHubStats from '@/components/GitHubStats';
import ProjectList from '@/components/ProjectList';

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* 헤더 */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-6xl mx-auto px-4 py-6'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>
              👩‍💼 Done is Better than Perfect 🏃‍♀️
            </h1>
            <p className='text-lg text-gray-600'>
              안녕하세요. 주니어 프론트엔드 개발자 조아영입니다.
            </p>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className='max-w-6xl mx-auto px-4 py-8 space-y-12'>
        {/* GitHub 통계 섹션 */}
        <section>
          <GitHubStats />
        </section>

        {/* 프로젝트 목록 섹션 */}
        <section>
          <ProjectList />
        </section>
      </main>

      {/* 푸터 */}
      <footer className='bg-white border-t border-gray-200 mt-16'>
        <div className='max-w-6xl mx-auto px-4 py-8'>
          <div className='text-center text-gray-600'>
            <p className='mb-2'>
              이 포트폴리오는 GitHub API를 통해 실시간으로 업데이트됩니다.
            </p>
            <p className='text-sm text-gray-500'>
              Made with ❤️ using Next.js & GitHub API
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
