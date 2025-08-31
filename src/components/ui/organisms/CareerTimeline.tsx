'use client';

import {CareerTimelineProps} from '@/types/type';

export default function CareerTimeline({experiences}: CareerTimelineProps) {
  return (
    <div className='glass-card p-8'>
      <div className='flex items-center gap-3 mb-8'>
        <div className='icon-glass-sm'>
          <span className='text-xl'>📈</span>
        </div>
        <h3 className='text-xl font-semibold glass-text-primary'>
          Career Experience
        </h3>
      </div>
      <div className='w-16 h-px bg-gray-200 border-opacity-30 mb-8'></div>

      <div className='space-y-8'>
        {experiences.map((experience, index) => (
          <div key={index} className='relative'>
            {index !== experiences.length - 1 && (
              <div className='absolute left-6 top-16 w-px h-full bg-gradient-to-b from-purple-300 to-transparent'></div>
            )}

            <div className='flex items-start gap-6'>
              <div className='flex-shrink-0 w-12 h-12 glass-card-secondary rounded-full flex items-center justify-center border border-white/30'>
                <div className='w-3 h-3 bg-purple-500 rounded-full'></div>
              </div>

              <div className='flex-1 min-w-0'>
                <div className='glass-card-secondary p-6 rounded-lg mb-4'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                    <div>
                      <h4 className='text-lg font-semibold glass-text-primary mb-1'>
                        {experience.position}
                      </h4>
                      <p className='text-base glass-text-secondary font-medium'>
                        {experience.company}
                      </p>
                    </div>
                    <div className='mt-2 md:mt-0'>
                      <span className='glass-card px-3 py-1 rounded-full text-sm glass-text-secondary'>
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <p className='text-sm glass-text-secondary leading-relaxed'>
                    {experience.description}
                  </p>
                </div>

                <div className='space-y-4'>
                  {experience.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className='glass-card p-5 rounded-lg border-l-4 border-purple-400'
                    >
                      <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3'>
                        <h5 className='text-base font-semibold glass-text-primary mb-1'>
                          {project.name}
                        </h5>
                        <span className='text-sm glass-text-secondary'>
                          {project.role}
                        </span>
                      </div>

                      <p className='text-sm glass-text-secondary leading-relaxed'>
                        {project.description}
                      </p>
                      <hr className='my-3 border-gray-200 border-opacity-30' />

                      <div className='flex flex-wrap gap-2 mb-3'>
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='glass-card-secondary px-2 py-1 rounded text-xs glass-text-primary font-medium'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.achievements &&
                        project.achievements.length > 0 && (
                          <div className='mt-3'>
                            <ul className='space-y-1'>
                              {project.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className='text-sm glass-text-secondary flex items-start gap-2'
                                  >
                                    <span className='text-purple-400 mt-1'>
                                      •
                                    </span>
                                    <span>{achievement}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
