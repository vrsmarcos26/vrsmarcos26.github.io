// app/page.tsx
"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="space-y-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
      </div>
      <Footer />
    </main>
  );
}