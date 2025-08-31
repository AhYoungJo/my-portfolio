'use client';

import {ProfileProps} from '@/types/type';
import Avatar from '@/components/ui/atoms/Avatar';
import Tag from '@/components/ui/atoms/Tag';
// import PixelInfoBox from '../atoms/PixelInfoBox';

export default function Profile({user}: ProfileProps) {
  return (
    <div className='flex flex-col items-center md:items-start space-y-6  md:space-x-8'>
      <Avatar
        src={user.avatar_url}
        alt={user.name || user.login}
        size='xlarge'
        showHighlight={true}
      />
      <div className='p-5 glass-card  flex flex-wrap justify-center md:justify-start gap-3'>
        {(user.blog || 'https://velog.io/@double29/posts') && (
          <Tag
            icon='🔗'
            text={user.blog || 'https://velog.io/@double29/posts'}
            colorTheme='blue'
            href={user.blog || 'https://velog.io/@double29/posts'}
          />
        )}

        <Tag icon='📧' text='doubletwosep@gmail.com' colorTheme='purple' />
      </div>
    </div>
  );
}
