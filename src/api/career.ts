import {CareerIntroProps, CareerExperience} from '@/types/type';

export async function fetchCareerData(): Promise<{
  introData: CareerIntroProps;
  experiences: CareerExperience[];
}> {
  const response = await fetch('/api/career');
  if (!response.ok) {
    throw new Error('커리어 정보를 가져올 수 없습니다.');
  }
  return response.json();
}
