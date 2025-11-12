"use client";

import { useState } from "react";
import { Project } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectSection from "@/components/ProjectSection";
import ProjectModal from "@/components/ProjectModal";
import Experience from "@/components/Experience";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Navbar />

      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <ProjectSection onProjectClick={handleProjectClick} />
        <Experience />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}
