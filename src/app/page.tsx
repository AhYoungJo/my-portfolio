import GitHubStats from '@/components/GitHubStats';
import CareerSection from '@/components/CareerSection';
import ProjectList from '@/components/ProjectList';

export default function Portfolio() {
  return (
    <div
      className='min-h-screen bg-gray-50 bg-cover bg-center bg-fixed bg-no-repeat'
      style={{backgroundImage: 'url(/assets/bg-5.jpg)'}}
    >
      <div className='fixed inset-0 bg-white/10 backdrop-blur-md pointer-events-none'></div>
      {/* 
      <header className='glass-header relative z-10'>
        <div className='max-w-6xl mx-auto px-6 py-2'>
          <div className='text-center'>
            <div className='glass-card max-w-2xl mx-auto p-5'>
              <h1 className='text-2xl font-bold glass-text-primary mb-4 leading-tight'>
                Done is Better than Perfect
              </h1>
              <div className='w-16 h-0.5 bg-gray-400 mx-auto rounded-full mb-4'></div>
              <p className='text-lg glass-text-secondary font-medium'>
                안녕하세요. 주니어 프론트엔드 개발자 조아영입니다.
              </p>
            </div>
          </div>
        </div>
      </header> */}

      <main className='relative z-10 max-w-7xl mx-auto px-8 py-16 '>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10'>
          <div className='lg:col-span-8 space-y-8'>
            <CareerSection />
          </div>

          <div className='lg:col-span-4 space-y-6'>
            <GitHubStats />
          </div>
        </div>
        <div className='glass-card p-8'>
          <ProjectList />
        </div>
      </main>

      <footer className='relative z-10 mt-20 pb-12'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center'>
            <div className='glass-card p-8'>
              <p className='text-base glass-text-primary font-medium mb-4'>
                🚀 이 포트폴리오는 GitHub API를 통해 실시간으로 업데이트됩니다.
              </p>
              <div className='w-12 h-px bg-gray-400 mx-auto mb-4'></div>
              <p className='glass-text-secondary text-sm'>
                Made with ❤️ using Next.js & GitHub API
              </p>

              <div className='flex justify-center gap-2 mt-6'>
                <div className='w-2 h-2 bg-pink-400 rounded-full animate-pulse'></div>
                <div className='w-2 h-2 bg-blue-400 rounded-full animate-ping'></div>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce'></div>
                <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse'></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
