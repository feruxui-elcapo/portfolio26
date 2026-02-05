"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";
import NavigationArrow from "@/components/NavigationArrow";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Scroll Navigation (Debounced with direction check)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 10) return; // Ignore small scrolls
      if (isScrolling) return;

      setIsScrolling(true);
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 1200); // 1.2s delay for smoother transition feel
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeoutId);
    };
  }, [isScrolling, handleNext, handlePrev]);

  return (
    <main className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden text-white font-sans selection:bg-purple-500/30">
      {/* Background Video (Unified for all projects to avoid flash) */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 bg-black"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/siconm-40cbd.firebasestorage.app/o/project-e892b18a-e553-4463-aacf-c809152b0d02.mp4?alt=media&token=e0aa0b16-f3d9-44bc-9aa5-912d41809e12"
            type="video/mp4"
          />
        </video>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Navbar Container */}
      <div className="relative z-50">
        <Navbar currentStep={currentStep} onStepChange={setCurrentStep} />
      </div>

      {/* Side Navigation Arrows */}
      <NavigationArrow
        direction="left"
        onClick={handlePrev}
        visible={currentStep > 1}
        className="hidden md:flex left-8 border-none bg-transparent hover:bg-white/5"
      />
      <NavigationArrow
        direction="right"
        onClick={handleNext}
        visible={currentStep < 5}
        className="hidden md:flex right-8 border-none bg-transparent hover:bg-white/5"
      />

      {/* Mobile-only Arrow Indicator (Bottom right) */}
      <div className="md:hidden fixed bottom-8 right-8 z-50">
        <NavigationArrow
          direction="right"
          onClick={handleNext}
          visible={currentStep < 5}
          className="relative inset-0"
        />
      </div>

      {/* Unique layouts per step */}
      <div
        key={currentStep}
        className="relative z-10 w-full h-full pt-20 animate-in fade-in zoom-in-95 duration-1000 ease-out"
      >
        <ProjectSection step={currentStep} />
      </div>

      {/* Decorative corner elements (as seen in Figma) */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l border-t border-white/5 m-8 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r border-b border-white/5 m-8 pointer-events-none" />
    </main>
  );
}
