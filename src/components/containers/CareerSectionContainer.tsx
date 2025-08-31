'use client';

import CareerSectionPresentation from '@/components/presentation/CareerSectionPresentation';
import {useCareerData} from '@/hooks/useCareer';

export default function CareerSectionContainer() {
  const {data, loading, error} = useCareerData();

  if (error) {
    return (
      <div className='glass-card p-8 text-center'>
        <p className='glass-text-secondary'>
          커리어 정보를 불러올 수 없습니다: {error}
        </p>
      </div>
    );
  }

  return (
    <CareerSectionPresentation
      introData={data?.introData || null}
      experiences={data?.experiences || []}
      loading={loading}
    />
  );
}
