"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import About from "@/components/About";

export default function PortfolioPage() {
  return (
    <div className="max-w-screen min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
}
