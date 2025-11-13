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
import ParticleCanvas from "@/components/ParticleCanvas";

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
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute("data-color");
            if (color) {
              setBgColor(color);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const refs = Object.values(sectionRefs);
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <>
      <ParticleCanvas />

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
