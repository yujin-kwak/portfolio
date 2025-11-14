import React from "react";

const Experience = React.forwardRef<HTMLDivElement>((_, ref) => (
  <section
    id="experience"
    ref={ref}
    data-color="#111827"
    className="py-24 px-4"
  >
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">
        Experience & Education
      </h2>
      <div className="card-bg bg-[rgba(17,24,39,0.6)] p-8 rounded-xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white">
          엘리스 (Elice) IoT 1기
        </h3>
        <p className="text-indigo-300 font-semibold my-1">
          IoT 서비스 개발 트랙 수료
        </p>
        <p className="text-gray-400">2022.12 - 2023.05</p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li>IoT 기기 연동을 위한 기초 웹 개발 지식(Full-stack) 학습</li>
          <li>Frontend: JavaScript(ES6+), HTML, CSS, React 기술 스택 학습</li>
          <li>Backend: Node.js를 사용한 서버 구축 학습</li>
          <li>다수의 팀 프로젝트 수행 및 2회 우수상 수상</li>
        </ul>
      </div>
    </div>
  </section>
));

Experience.displayName = "Experience";
export default Experience;
