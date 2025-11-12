type SkillsSectionProps = {
  ref: React.Ref<HTMLElement>;
};

const Skills = ({ ref }: SkillsSectionProps) => (
  <section
    id="skills"
    ref={ref}
    data-color="#374151"
    className="min-h-screen py-24 px-4 flex items-center"
  >
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="card-bg bg-[rgba(17,24,39,0.6)] p-8 rounded-xl h-full">
          <h3 className="text-2xl font-bold text-green-300 mb-4">Front-end</h3>
          <ul className="space-y-2 text-gray-300">
            <li>- HTML, CSS, JavaScript(ES6+)</li>
            <li>- TypeScript</li>
            <li>- React, Next.js</li>
            <li>- Styled-Components, Tailwind CSS</li>
            <li>- Chart.js (데이터 시각화)</li>
          </ul>
        </div>
        <div className="card-bg bg-[rgba(17,24,39,0.6)] p-8 rounded-xl h-full">
          <h3 className="text-2xl font-bold text-amber-300 mb-4">
            Deployment & Tools
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>- Git, GitHub</li>
            <li>- Notion</li>
            <li>- Figma</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
