const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 card-bg shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      {/* mx-auto px4: 수평 중앙 정렬 */}
      <div className="flex justify-between items-center h-16">
        <a
          href="#Home"
          className="text-2xl font-bold tracking-wider text-white"
        >
          YUJIN KWAK
        </a>
        <div className="hidden md:flex space-x-6 text-gray-300">
          <a
            href="#about"
            className="hover:text-indigo-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-indigo-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-indigo-400 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#certifications"
            className="hover:text-indigo-400 transition duration-300"
          >
            Certifications
          </a>
          <a
            href="#awards"
            className="hover:text-indigo-400 transition duration-300"
          >
            Awards
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
