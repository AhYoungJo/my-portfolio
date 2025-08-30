'use client';

import {GitHubUser} from '@/types/type';
import PixelTag from '../atoms/PixelTag';
import PixelAvatar from '../atoms/PixelAvatar';
import PixelInfoBox from '../atoms/PixelInfoBox';

interface PixelProfileProps {
  user: GitHubUser;
}

export default function PixelProfile({user}: PixelProfileProps) {
  return (
    <div className='pixel-profile'>
      {/* 배경 픽셀 패턴 */}
      <div className='absolute inset-0 opacity-5 pixel-grid-pattern'></div>

      <div className='absolute top-4 right-4 text-yellow-400 text-2xl'>⭐</div>
      <div className='absolute top-12 right-8 text-pink-400 text-xl'>✨</div>
      <div className='absolute bottom-4 left-4 text-green-400 text-xl'>🌟</div>

      <div className='relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8'>
        <PixelAvatar
          src={user.avatar_url}
          alt={user.name || user.login}
          size='large'
          showHighlight={true}
        />

        <div className='flex-1 text-center md:text-left'>
          <div className='mb-4'>
            <h1 className='text-4xl font-black text-gray-800 mb-2 tracking-wide'>
              {user.name || user.login}
            </h1>
            <p className='text-xl text-gray-600 font-bold'>@{user.login}</p>
          </div>

          {user.bio && (
            <PixelInfoBox variant='default'>
              <p>{user.bio}</p>
            </PixelInfoBox>
          )}

          <div className='flex flex-wrap justify-center md:justify-start gap-3'>
            {user.company && (
              <PixelTag icon='🏢' text={user.company} colorTheme='pink' />
            )}

            {user.location && (
              <PixelTag icon='📍' text={user.location} colorTheme='green' />
            )}

            {user.blog && (
              <PixelTag
                icon='🔗'
                text={user.blog}
                colorTheme='blue'
                href={
                  user.blog.startsWith('http')
                    ? user.blog
                    : `https://${user.blog}`
                }
              />
            )}

            {user.email && (
              <PixelTag icon='📧' text={user.email} colorTheme='purple' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
