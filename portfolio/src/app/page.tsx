"use client";

import { useState, useRef, useEffect } from "react";
import { Project } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectSection from "@/components/ProjectSection";
import ProjectModal from "@/components/ProjectModal";
import Experience from "@/components/Experience";
import Certification from "@/components/Certification";
import Awards from "@/components/Awards";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [bgColor, setBgColor] = useState("#111827");

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    certification: useRef<HTMLElement>(null),
    awards: useRef<HTMLElement>(null),
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 섹션이 화면 중앙(50%)에 들어왔을 때
          if (entry.isIntersecting) {
            // data-color 속성값을 읽어옵니다.
            const color = entry.target.getAttribute("data-color");
            if (color) {
              setBgColor(color); // 배경색 상태를 업데이트합니다.
            }
          }
        });
      },
      { threshold: 0.5 } // 섹션이 50% 이상 보일 때 반응
    );

    // 모든 섹션의 '센서(ref)'를 관찰 대상으로 등록합니다.
    const refs = Object.values(sectionRefs);
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // 컴포넌트가 사라질 때 관찰을 중지합니다. (메모리 누수 방지)
    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // 빈 배열: 페이지가 처음 로드될 때 '한 번만' 실행

  // 10. [추가] bgColor 상태가 바뀔 때마다, 실제 <body>의 배경색을 변경합니다.
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // bgColor 값이 바뀔 때마다 실행
  return (
    <>
      <Navbar />

      <main className="relative z-10">
        <Home ref={sectionRefs.home} />
        <About ref={sectionRefs.about} />
        <Skills ref={sectionRefs.skills} />
        <ProjectSection
          ref={sectionRefs.projects}
          onProjectClick={handleProjectClick}
        />
        <Experience ref={sectionRefs.experience} />
        <Certification ref={sectionRefs.certification} />
        <Awards ref={sectionRefs.awards} />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}
