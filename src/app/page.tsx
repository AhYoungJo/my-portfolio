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

      <main className='relative z-10 max-w-7xl mx-auto px-8 py-16 '>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16'>
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
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center'>
            <div className='glass-card max-w-2xl mx-auto p-6'>
              <h3 className='text-lg font-semibold glass-text-primary mb-2'>
                Made with ❤️ by 조아영
              </h3>
              <p className='text-sm glass-text-secondary'>
                Next.js • React • TypeScript • Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
