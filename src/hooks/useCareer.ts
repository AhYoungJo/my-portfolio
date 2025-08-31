import {useAsyncData} from './useAsyncData';
import {fetchCareerData} from '@/api/career';

export function useCareerData() {
  return useAsyncData(fetchCareerData, {
    delay: 1500,
  });
}
