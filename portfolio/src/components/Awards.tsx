type AwardsSectionProps = {
  ref: React.Ref<HTMLElement>;
};

const Awards = ({ ref }: AwardsSectionProps) => (
  <section id="awards" ref={ref} data-color="#111827" className="py-24 px-4">
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">
        Awards
      </h2>

      <div className="card-bg bg-[rgba(17,24,39,0.6)] p-8 rounded-xl max-w-3xl mx-auto">
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold text-white">입선</h4>
            <p className="text-indigo-300 font-semibold my-1">
              한국정보산업연합회
            </p>
            <p className="text-gray-400">2019.11</p>
            <p className="text-gray-300 mt-2">
              한이음에서 '스마트 창문'을 주제로 입선했습니다. 미세먼지, 온습도,
              레인센서 등을 활용하여 일정 기준에 만족하는 경우 자동으로 창문이
              개폐되도록 제작한 프로젝트입니다.
            </p>
          </div>

          <div className="border-t border-gray-700/50 pt-6">
            <h4 className="text-xl font-bold text-white">우수상</h4>
            <p className="text-indigo-300 font-semibold my-1">엘리스</p>
            <p className="text-gray-400">2023.05</p>
            <p className="text-gray-300 mt-2">
              '오늘 농장'을 주제로 한 팀 프로젝트로 우수상을 수상했습니다.
              스마트 팜 페이지이며 그 중 온습도, 조도, 토양 수분 센서의 값을
              받아 사용자에게 게이지 차트로 보여주는 역할을 담당했습니다. 이
              과정에서 Chart.js의 도넛차트를 이용하여 게이지 차트를 새롭게
              구성했습니다.
            </p>
          </div>

          <div className="border-t border-gray-700/50 pt-6">
            <h4 className="text-xl font-bold text-white">우수상</h4>
            <p className="text-indigo-300 font-semibold my-1">엘리스</p>
            <p className="text-gray-400">2023.05</p>
            <p className="text-gray-300 mt-2">
              '이상한 나라의 책장수'를 주제로 한 팀 프로젝트로 우수상을
              수상했습니다. 도서 판매 페이지이며 그 중 회원 및 비회원의 주문
              관련 페이지, 마이 페이지, 도서 상세 페이지, 주문 관리자 페이지를
              담당해 구현했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
