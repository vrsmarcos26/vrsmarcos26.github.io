// components/Certifications.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useThemeLang } from "../context/ThemeLangContext";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaAndroid,
  FaWifi,
  FaWordpress,
  FaLanguage,
  FaLock,
  FaNetworkWired,
  FaBug,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface CertItem {
  title: string;
  issuer: string;
  link: string;
}

export default function Certifications() {
  const { content } = useThemeLang();
  const certs: CertItem[] = content.certifications || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);
  const [hasDragged, setHasDragged] = useState(false);

  const getIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("android"))
      return <FaAndroid className="text-4xl text-emerald-500 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
    if (lower.includes("wireless") || lower.includes("wifi") || lower.includes("rede"))
      return <FaWifi className="text-4xl text-blue-500 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
    if (lower.includes("wordpress"))
      return <FaWordpress className="text-4xl text-sky-600 dark:text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
    if (lower.includes("inglês") || lower.includes("english") || lower.includes("language"))
      return <FaLanguage className="text-4xl text-teal-600 dark:text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
    if (lower.includes("introdução") || lower.includes("lock"))
      return <FaLock className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
    if (lower.includes("dispositivos") || lower.includes("network"))
      return <FaNetworkWired className="text-4xl text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
    if (lower.includes("ameaças") || lower.includes("threat") || lower.includes("bug"))
      return <FaBug className="text-4xl text-rose-600 dark:text-rose-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
    return <FaShieldAlt className="text-4xl text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < certs.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : certs.length - 1));
  };

  useEffect(() => {
    if (isHovered || isDragging || certs.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, certs.length, currentIndex]);

  const minSwipeDistance = 40;

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setHasDragged(false);
    setDragEnd(null);
    setDragStart(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || dragStart === null) return;
    setDragEnd(clientX);
    if (Math.abs(clientX - dragStart) > 10) {
      setHasDragged(true);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!dragStart || !dragEnd) return;
    const distance = dragStart - dragEnd;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const getVisibleCards = () => {
    const total = certs.length;
    if (total === 0) return [];
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (currentIndex + offset + total) % total;
      return { cert: certs[index], offset, realIndex: index };
    });
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--cor-primaria)]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--cor-primaria)]/10 text-[var(--cor-primaria)] border border-[var(--cor-primaria)]/20 mb-3 inline-block">
          Maturidade & Reconhecimento
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--cor-texto)]">
          {content.certificationsTitle}
        </h2>
        <p className="text-sm md:text-base text-[var(--cor-secundaria)] mt-3">
          Formações técnicas e certificações globais em constante evolução.
        </p>
      </div>

      <div
        className={`relative h-[340px] md:h-[380px] w-full flex items-center justify-center [perspective:1000px] transition-all ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (isDragging) handleDragEnd();
        }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Anterior"
          className="absolute left-2 md:left-10 z-30 w-12 h-12 rounded-full bg-[var(--cor-card)] border border-[var(--cor-borda)] backdrop-blur-md flex items-center justify-center text-[var(--cor-texto)]/70 hover:text-[var(--cor-primaria)] hover:border-[var(--cor-primaria)] hover:scale-110 transition-all shadow-xl cursor-pointer"
        >
          <FaChevronLeft className="text-base" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          {getVisibleCards().map(({ cert, offset, realIndex }) => {
            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            const scale = isCenter ? 1 : absOffset === 1 ? 0.8 : 0.6;
            const x = offset * 220;
            const z = absOffset === 1 ? -150 : absOffset === 2 ? -300 : 0;
            const rotateY = offset * -20;
            const opacity = isCenter ? 1 : absOffset === 1 ? 0.65 : 0.25;
            const zIndex = 20 - absOffset * 5;

            return (
              <motion.div
                key={realIndex}
                className="absolute w-[280px] sm:w-[320px] pointer-events-auto"
                style={{ zIndex }}
                animate={{
                  x,
                  z,
                  scale,
                  rotateY,
                  opacity,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => {
                  if (hasDragged) return;

                  if (offset !== 0) {
                    if (offset > 0) nextSlide();
                    else prevSlide();
                  } else {
                    window.open(cert.link, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <div
                  className={`group relative bg-[var(--cor-card)] border p-7 rounded-3xl flex flex-col justify-between items-center text-center backdrop-blur-xl transition-all duration-300 min-h-[260px] shadow-2xl ${
                    isCenter
                      ? "border-[var(--cor-primaria)] shadow-[var(--cor-primaria)]/15"
                      : "border-[var(--cor-borda)] opacity-90"
                  }`}
                >
                  <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    <FaExternalLinkAlt className="text-xs text-[var(--cor-primaria)]" />
                  </div>

                  <div className="w-full flex flex-col items-center my-2">
                    {getIcon(cert.title)}
                    <h3 className="text-base font-bold text-[var(--cor-texto)] mb-2 leading-snug group-hover:text-[var(--cor-primaria)] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[var(--cor-secundaria)] bg-[var(--cor-texto)]/5 px-3.5 py-1.5 rounded-full border border-[var(--cor-borda)] mt-4">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Próximo"
          className="absolute right-2 md:right-10 z-30 w-12 h-12 rounded-full bg-[var(--cor-card)] border border-[var(--cor-borda)] backdrop-blur-md flex items-center justify-center text-[var(--cor-texto)]/70 hover:text-[var(--cor-primaria)] hover:border-[var(--cor-primaria)] hover:scale-110 transition-all shadow-xl cursor-pointer"
        >
          <FaChevronRight className="text-base" />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-8">
        {certs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para certificado ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-7 bg-[var(--cor-primaria)] shadow-md shadow-[var(--cor-primaria)]/30"
                : "w-2 bg-[var(--cor-secundaria)]/30 hover:bg-[var(--cor-secundaria)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}