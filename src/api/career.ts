import {CareerIntroProps, CareerExperience} from '@/types/type';
import {memoryCache} from '@/utils/cache';

export async function fetchCareerData(): Promise<{
  introData: CareerIntroProps;
  experiences: CareerExperience[];
}> {
  const cacheKey = 'career-data';
  const cachedData = memoryCache.get<{
    introData: CareerIntroProps;
    experiences: CareerExperience[];
  }>(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const response = await fetch('/api/career');
  if (!response.ok) {
    throw new Error('커리어 정보를 가져올 수 없습니다.');
  }
  const careerData = await response.json();
  memoryCache.set(cacheKey, careerData, 30 * 60 * 1000);

  return careerData;
}
