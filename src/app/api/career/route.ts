import {mockIntroData, mockExperiences} from '@/constants/career';

export async function GET() {
  try {
    // 현재는 목 데이터, 나중에 실제 데이터베이스나 외부 API로 교체 가능
    const careerData = {
      introData: mockIntroData,
      experiences: mockExperiences,
    };

    return Response.json(careerData);
  } catch (error) {
    console.error('Career API 에러:', error);
    return Response.json(
      {error: '커리어 정보를 가져올 수 없습니다.'},
      {status: 500},
    );
  }
}
