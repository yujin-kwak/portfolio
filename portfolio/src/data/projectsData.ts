import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: 5,
    title: "개인 포트폴리오",
    isTeamProject: false,
    subtitle: "Next.js/TypeScript 기반 인터랙티브 포트폴리오",
    period: "2025.10.31 ~ 2025.11.13",
    role: [
      "Next.js, TypeScript, Tailwind CSS 기반 포트폴리오 기획 및 개발",
      "Canvas API를 활용한 역동적인 배경 파티클 구현",
      "Intersection Observer를 이용한 인터랙션 구현",
      "웹 표준 및 웹 접근성을 준수한 모달 컴포넌트 설계",
    ],
    description:
      "Next.js, TypeScript, Tailwind CSS 스택을 기반으로 성능과 인터랙션에 중점을 두고 구축한 개인 포트폴리오입니다. Canvas API와 Intersection Observer를 활용하여 역동적인 배경 효과와 부드러운 스크롤 경험을 구현했으며, Vercel을 통해 서버리스 환경에 배포했습니다.",
    details: `이 프로젝트는 최신 Next.js 및 TypeScript 환경에서 개발되었습니다.
성능 및 배경: Canvas API를 사용하여 파티클 배경을 구현했습니다. GIF 대신 mp4를 사용하여 로딩 속도를 최적화했습니다.
동적 인터랙션: Intersection Observer를 활용하여 기능을 스크롤 시 부드러운 배경색 전환 효과를 구현했습니다.
디자인 시스템: Tailwind CSS와 backdrop-filter 속성을 조합하여 글래스모피즘 기반의 모던한 UI를 완성했습니다.   
배포 환경: Next.js의 공식 플랫폼인 Vercel에 서버리스 환경으로 배포했습니다.`,
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Canvas API",
      "IntersectionObserver",
      "Vercel",
    ],
    videoSrc: "/videos/portfolio.mp4",
    posterSrc: "/images/portfolio.png",
  },
  {
    id: 2,
    title: "이상한 나라의 책장수",
    isTeamProject: true,
    subtitle: "책을 판매하는 커머스 서비스",
    period: "2023.02.13 ~ 2023.03.03",
    role: [
      "회원/비회원 주문 관련 페이지 구현",
      "마이페이지 (주문 내역, 회원 정보 수정/탈퇴)",
      "관리자 페이지 (주문/배송 관리, 유저 관리)",
      "useParams와 Suspense를 이용한 도서 상세 페이지 구현",
    ],
    description:
      "책을 판매하는 커머스 서비스입니다. Figma로 플로우 차트를 설계하고, Eslint/Prettier로 코드 컨벤션을 통일하여 FE 3명, BE 1명과 협업했습니다.",
    details:
      "Figma를 이용한 플로우 차트 작성, Eslint/Prettier를 통한 코드 컨벤션 설정 등 원활한 협업 환경을 구축했습니다. 회원/비회원 주문 로직, 주문번호를 통한 비회원 주문 조회/취소, 관리자 페이지에서의 주문 및 배송 상태 관리, 마이페이지에서의 회원 정보 관리 등 복잡한 이커머스 기능을 구현했습니다. 또한, useParams와 Suspense를 활용하여 도서 상세 페이지의 로딩 상태를 관리했습니다.",
    techStack: [
      "React",
      "JavaScript",
      "React Router",
      "Styled-Components",
      "Axios",
      "Git",
      "ESlint",
      "Prettier",
      "Figma",
    ],
    videoSrc: "/videos/bookstore.mp4",
    posterSrc: "/images/bookstore.png",
  },
  {
    id: 3,
    title: "오늘 농장",
    isTeamProject: true,
    subtitle: "원격 스마트팜 관리 커머스 서비스",
    period: "2023.04.24 ~ 2023.05.20",
    role: [
      "Chart.js를 활용한 센서 데이터 시각화 (온습도, 토양수분, 조도)",
      "데이터 값에 따른 게이지 차트 UI 커스터마이징",
      "Figma를 이용한 플로우 차트 구현 참여",
      "Eslint, Prettier를 통한 프로젝트 코드 컨벤션 설정",
    ],
    description:
      "원격으로 농작물의 상태를 확인하고 관리할 수 있는 스마트팜 프로젝트입니다. FE 2명, BE 2명, Device 1명과 협업했으며, Figma와 Eslint 등을 활용해 협업 환경을 구축했습니다.",
    details:
      "센서에서 측정된 값을 사용자에게 직관적으로 보여주기 위해 Chart.js 라이브러리를 도입했습니다. 당시 유지보수가 잘 되지 않던 다른 라이브러리 대신, 커뮤니티가 활발하고 업데이트가 최신인 Chart.js를 선택했습니다. 도넛 차트의 속성을 커스터마이징하여 화살표 없는 게이지 차트, 차트 중앙의 텍스트, 값에 따른 색상 변화 등 기획에 맞는 차트를 구현했습니다.",
    techStack: [
      "React",
      "JavaScript",
      "React Router",
      "Styled-Components",
      "Axios",
      "Git",
      "ESlint",
      "Prettier",
      "Figma",
      "Chart.js",
    ],
    videoSrc: "/videos/smart-farm.mp4",
    posterSrc: "/images/smart-farm.png",
  },
  {
    id: 4,
    title: "아이유 소개페이지",
    isTeamProject: false,
    subtitle: "아이유를 소개하는 팬 페이지",
    period: "2022.12.23 ~ 2023.01.11",
    role: [
      "Figma를 이용한 페이지 기획 및 디자인",
      "Chart.js를 활용한 Bar Chart (데이터 시각화) 구현",
      "map() 메서드를 활용한 반복 UI 컴포넌트 처리",
      "CSS Hover를 이용한 앨범 카드 애니메이션 구현",
      "JavaScript 기반 이미지 슬라이더 및 Go Top 버튼 구현",
      "비밀번호 기반 방명록 삭제 기능 구현",
    ],
    description:
      "Figma로 직접 기획부터 디자인, 개발까지 진행한 개인 프로젝트입니다. 아이유의 앨범, 작품활동, 통계 등을 시각적으로 보여주는 팬 페이지입니다.",
    details:
      "Figma로 페이지 구상을 한 뒤, Chart.js를 이용해 데이터 Bar Chart를 구현했습니다. CSS의 hover와 transform을 응용해 앨범 위에 마우스를 올리면 반짝이는 애니메이션을 구현했습니다. 또한 JavaScript(Vanilla JS)를 사용하여 이미지 슬라이더, 스크롤에 따른 Go Top 버튼, 비밀번호가 일치해야 삭제되는 방명록 등 다양한 동적 기능을 구현했습니다.",
    techStack: ["JavaScript", "HTML", "CSS"],
    videoSrc: "/videos/iu-fanpage.mp4",
    posterSrc: "/images/iu-fanpage.png",
  },
];

export const techColorMap: { [key: string]: string } = {
  React: "bg-indigo-500/50",
  "Styled-Components": "bg-pink-500/50",
  HTML: "bg-gray-500/50",
  CSS: "bg-blue-500/50",
  JavaScript: "bg-yellow-500/50",
  "Next.js": "bg-gray-800/50",
  TypeScript: "bg-blue-600/50",
  "Tailwind CSS": "bg-cyan-500/50",
  "Chart.js": "bg-red-500/50",
  Figma: "bg-pink-500/50",
  Git: "bg-orange-600/50",
  ESlint: "bg-purple-600/50",
  Prettier: "bg-pink-400/50",
  Axios: "bg-indigo-700/50",
  "React Router": "bg-red-600/50",
};
