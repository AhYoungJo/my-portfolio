'use client';

import CareerIntro from '@/components/ui/organisms/CareerIntro';
import CareerTimeline from '@/components/ui/organisms/CareerTimeline';
import LoadingScreen from '@/components/ui/organisms/LoadingScreen';
import {CareerExperience, CareerIntroProps} from '@/types/type';

interface CareerSectionPresentationProps {
  introData: CareerIntroProps | null;
  experiences: CareerExperience[];
  loading: boolean;
}

export default function CareerSectionPresentation({
  introData,
  experiences,
  loading,
}: CareerSectionPresentationProps) {
  if (loading) {
    return <LoadingScreen type='career-section' />;
  }

  if (!introData) {
    return (
      <div className='glass-card p-8 text-center'>
        <p className='glass-text-secondary'>
          커리어 정보를 불러올 수 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      <CareerIntro {...introData} />
      <CareerTimeline experiences={experiences} />
    </div>
  );
}
