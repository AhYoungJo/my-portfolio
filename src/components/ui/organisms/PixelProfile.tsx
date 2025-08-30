'use client';

import {GitHubUser} from '@/types/type';
import PixelTag from '../atoms/PixelTag';
import PixelAvatar from '../atoms/PixelAvatar';
// import PixelInfoBox from '../atoms/PixelInfoBox';

interface PixelProfileProps {
  user: GitHubUser;
}

export default function PixelProfile({user}: PixelProfileProps) {
  return (
    <div className='pixel-profile'>
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
            <p className='text-xl text-gray-600 font-bold'>🚗🚓</p>
          </div>

          {/* {user.bio && (
            <PixelInfoBox variant='default'>
              <p>{user.bio}</p>
            </PixelInfoBox>
          )} */}

          <div className='flex flex-wrap justify-center md:justify-start gap-3'>
            {user && (
              <PixelTag
                icon='🔗'
                text={'velog'}
                colorTheme='blue'
                href={'https://velog.io/@double29/posts'}
              />
            )}

            {user && (
              <PixelTag
                icon='📧'
                text={'doubletwosep@gmail.com'}
                colorTheme='purple'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
