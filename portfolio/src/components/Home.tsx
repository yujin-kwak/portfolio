import React from "react";

const Home = React.forwardRef<HTMLDivElement>((_, ref) => (
  <section
    id="home"
    ref={ref}
    data-color="#111827"
    className="min-h-screen flex flex-col justify-center items-center text-center p-4"
  >
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white text-glow">
      성장을 즐기는 프론트엔드 개발자
    </h1>
    <p className="text-5xl md:text-7xl font-black mb-8 text-indigo-400">
      곽유진입니다.
    </p>
    <p className="max-w-2xl text-lg md:text-xl text-gray-300">
      새로운 기술을 배우고 적용하는 과정에서 즐거움을 느끼며, 동료들과의 소통을
      통해 함께 성장하는 것을 중요하게 생각합니다.
    </p>
  </section>
));

Home.displayName = "Home";

export default Home;
