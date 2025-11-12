import EnvelopeIcon from "./icons/EnvelopeIcon";
import GithubIcon from "./icons/GithubIcon";
import BlogIcon from "./icons/BlogIcon";

type AboutSectionProps = {
  ref: React.Ref<HTMLElement>;
};

const About = ({ ref }: AboutSectionProps) => (
  <section
    id="about"
    ref={ref}
    data-color="#1f2937"
    className="min-h-screen py-24 px-4 flex items-center"
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2">
        <h2 className="text-4xl font-bold mb-6 text-indigo-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          안녕하세요! 사용자 경험 개선에 깊은 관심을 두고 개발에 임하는
          프론트엔드 개발자 곽유진입니다. 복잡한 문제를 마주했을 때,
          포기하기보다는 다양한 해결책을 탐색하고 토론하며 최적의 답을 찾아내는
          과정에서 큰 성취감을 느낍니다.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          단순히 코드를 작성하는 것을 넘어, 동료 개발자 및 디자이너와 긴밀하게
          소통하며 더 나은 제품을 함께 만들어나가는 협업의 가치를 중요하게
          생각합니다. 매일 꾸준히 성장하며, 함께 일하고 싶은 동료가 되는 것이
          저의 목표입니다.
        </p>
      </div>

      <div className="space-y-6">
        <a
          href="mailto:yujin02371@gmail.com"
          className="flex items-center p-4 card-bg bg-[rgba(17,24,39,0.6)] rounded-lg hover:bg-indigo-900/50 transition duration-300"
        >
          <EnvelopeIcon className="text-2xl text-indigo-400 w-8 h-8" />
          <span className="ml-4 text-lg text-white">yujin02371@gmail.com</span>
        </a>
        <a
          href="https://github.com/yujin-kwak"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 card-bg bg-[rgba(17,24,39,0.6)] rounded-lg hover:bg-indigo-900/50 transition duration-300"
        >
          <GithubIcon className="text-2xl text-indigo-400 w-8 h-8" />
          <span className="ml-4 text-lg text-white">github.com/yujin-kwak</span>
        </a>
        <a
          href="https://velog.io/@yujin02371"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-4 card-bg bg-[rgba(17,24,39,0.6)]  rounded-lg hover:bg-indigo-900/50 transition duration-300"
        >
          <BlogIcon className="text-2xl text-indigo-400 w-8 h-8" />
          <span className="ml-4 text-lg text-white">
            https://velog.io/@yujin02371
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default About;
