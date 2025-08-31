'use client';

import CareerIntro from '@/components/ui/organisms/CareerIntro';
import CareerTimeline from '@/components/ui/organisms/CareerTimeline';
import {CareerExperience} from '@/types/type';

export default function CareerSection() {
  const introData = {
    name: '조아영',
    title: 'Frontend Developer',
    summary:
      '기술을 통해 이로운 세상을 만드는 것을 목표로 합니다. 단순히 기술을 구현하는 것을 넘어, 서비스의 가치를 사용자에게 효과적으로 전달하는 데 중점을 둡니다. 지속 가능한 성장을 위한 견고한 설게예 관심이 많으며, 새로운 기술을 동료들과 함꼐 논의하고 실무에 적용하는 것을 좋아합니다.',
    highlights: [
      '협업과 소통의 중요성',
      '사용자 경험 중심',
      '현실적인 문제 해결',
      '지속 가능한 성장 목표',
    ],
  };

  const experiences: CareerExperience[] = [
    {
      company: '다온 H&S',
      position: 'Frontend Developer',
      period: '2024.11 - 2025.10',
      description:
        'SvelteKit 기반의 SaaS 플랫폼 프론트엔드 개발을 담당하며, 재난 관제, 공공 서비스, O2O 커머스 등 다양한 도메인을 경험했습니다. 특히 IoT 데이터 연동, 지도 API 기반 시각화, 실시간 대시보드 등 데이터 중심의 인터랙티브 웹 애플리케이션을 구축하여 복잡한 정보를 직관적인 UI/UX로 풀어내는 데 강점을 가지고 있습니다.',
      projects: [
        {
          name: 'IoT 연동형 통합 침수 관제 시스템',
          description:
            '실시간 센서 및 AI 예측 데이터를 연동하여 도시 침수 위험을 관제하는 차세대 재난 관리 솔루션',
          technologies: [
            'SvelteKit',
            'TailwindCSS',
            'Plotly.js',
            'Leaflet.js',
            'Kakao Maps API',
            'VWorld API',
          ],
          achievements: [
            'SvelteKit과 TailwindCSS를 사용하여 빗물받이 민원 신고 및 관리 시스템의 프론트엔드 아키텍처 설계 및 개발',
            '데이터 기반의 통계 대시보드를 구현하여 관리자가 민원 현황과 침수 예측 결과를 직관적으로 파악하고 신속하게 대응할 수 있도록 기여',
            '시민들이 쉽게 사용할 수 있는 사용자 중심의 민원 접수 웹 애플리케이션 개발',
            'IoT 센서(수위, 온/습도) 데이터를 연동하고, 실시간 원격 관제가 가능한 인터랙티브 UI/UX 설계 및 구현',
            '침수 예측 AI 모델 결과를 Kakao Maps API 및 Leaflet.js와 연동하여 지도 기반의 예측 시각화 기능 개발',
          ],
        },
        {
          name: '하이퍼로컬 공동구매 O2O 플랫폼',
          description:
            '동네 인증 기반으로 지역 상점(판매자)과 주민(구매자)을 연결하는 O2O(Online to Offline) 공동구매 플랫폼의 웹 프로토타입을 기획부터 개발까지 주도했습니다. 판매자의 운영 효율성과 구매자의 편리한 구매 경험에 초점을 맞추어 설계했습니다.',
          achievements: [
            '서비스 기획 단계부터 참여하여, 사용자(판매자/구매자) 시나리오를 구체화하고 UI/UX 와이어플로우를 설계하며 기술적 실현 가능성을 검토했습니다.',
            '판매자의 운영 효율을 극대화하기 위한 웹 기반 관리자 대시보드를 개발했습니다. (주요 기능: 상품 등록, 실시간 재고 관리, 주문 접수 및 확인)',
            '온/오프라인 경험을 매끄럽게 연결하기 위해, QR 코드 기반의 픽업 인증 시스템의 웹 인터페이스를 구현하여 주문 처리의 정확성과 편의성을 높였습니다.',
            '사용자들이 동네의 공동구매 정보를 탐색하고 예약할 수 있는 반응형 웹 애플리케이션의 프론트엔드 개발을 담당했습니다.',
          ],
          technologies: [
            'SvelteKit',
            'TailwindCSS',
            'Node.js',
            'Express',
            'Figma',
          ],
        },
        {
          name: '리빙랩 웹 시스템',
          description:
            '연세대학교 연구원과 일반 시민들이 참여하여 도시 문제를 해결하는 리빙랩(Living Lab) 플랫폼',
          technologies: ['Node.js', 'Express', 'SCSS', 'MySQL', 'Nginx'],
          achievements: [
            'Node.js와 Express 기반으로 구축된 기존 시스템의 안정성 향상을 위한 하자 보수 및 유지보수 담당',
            '사용자(연구원, 시민) 피드백을 수집하고 분석하여 시스템 버그를 수정하고 서비스 안정화에 기여',
            'Nginx를 활용한 웹 서버 설정 관리 및 배포 환경 유지보수 지원',
          ],
        },
      ],
    },
  ];

  return (
    <div className='space-y-8'>
      <CareerIntro {...introData} />
      <CareerTimeline experiences={experiences} />
    </div>
  );
}
