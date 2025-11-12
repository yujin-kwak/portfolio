const Certification = () => (
  <section id="certifications" className="py-24 px-4">
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">
        Certifications
      </h2>

      <div className="card-bg bg-[rgba(17,24,39,0.6)] p-8 rounded-xl max-w-3xl mx-auto">
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold text-white">정보처리기사</h4>
            <p className="text-indigo-300 font-semibold my-1">
              한국산업인력공단
            </p>
            <p className="text-gray-400">2025.06</p>
          </div>

          <div className="border-t border-gray-700/50"></div>

          <div>
            <h4 className="text-xl font-bold text-white">컴퓨터활용능력 1급</h4>
            <p className="text-indigo-300 font-semibold my-1">대한상공회의소</p>
            <p className="text-gray-400">2020.08</p>
          </div>

          <div className="border-t border-gray-700/50"></div>

          <div>
            <h4 className="text-xl font-bold text-white">
              TOEIC(Speaking) IM3
            </h4>
            <p className="text-indigo-300 font-semibold my-1">YBM</p>
            <p className="text-gray-400">2024.09</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Certification;
