"use client";

import React, { useState, useEffect, useCallback } from "react";
import ProjectShowcase from "@/components/ProjectShowcase";
import Navbar from "@/components/Navbar";
import NavigationArrow from "@/components/NavigationArrow";

const projectData = [
  {
    id: 1,
    title: <React.Fragment>Motor de reserva <br /><span className="italic font-thin text-gray-400">y página web.</span></React.Fragment>,
    description: "ModHotels, reconocido hotel de 4 estrellas en Mendoza, se renueva con un motor de reservas CRM para optimizar su gestión y fomentar las reservas directas, reflejando su sofisticación y servicios premium.",
    tags: ["Producto", "Diseño", "Desarrollo"],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/siconm-40cbd.firebasestorage.app/o/project-e892b18a-e553-4463-aacf-c809152b0d02.mp4?alt=media&token=e0aa0b16-f3d9-44bc-9aa5-912d41809e12"
  },
  {
    id: 2,
    title: <React.Fragment>Desafío <br /><span className="italic font-thin text-gray-400">del proyecto.</span></React.Fragment>,
    description: "El principal desafío fue integrar un sistema de reservas complejo sin sacrificar la elegancia y la experiencia de usuario que caracteriza a la marca ModHotels.",
    tags: ["UX Research", "Estrategia"],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/siconm-40cbd.firebasestorage.app/o/project-e892b18a-e553-4463-aacf-c809152b0d02.mp4?alt=media&token=e0aa0b16-f3d9-44bc-9aa5-912d41809e12"
  },
  {
    id: 3,
    title: <React.Fragment>Producto <br /><span className="italic font-thin text-gray-400">final.</span></React.Fragment>,
    description: "Interfaz intuitiva, rápida y responsive que permite a los usuarios reservar en pocos pasos, aumentando la conversión significativamente.",
    tags: ["UI Design", "Frontend"],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/siconm-40cbd.firebasestorage.app/o/project-e892b18a-e553-4463-aacf-c809152b0d02.mp4?alt=media&token=e0aa0b16-f3d9-44bc-9aa5-912d41809e12"
  },
  {
    id: 4,
    title: <React.Fragment>Solución <br /><span className="italic font-thin text-gray-400">técnica.</span></React.Fragment>,
    description: "Implementación con Next.js y Tailwind para asegurar performance, con integración directa a CRM de terceros.",
    tags: ["Development", "API"],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/siconm-40cbd.firebasestorage.app/o/project-e892b18a-e553-4463-aacf-c809152b0d02.mp4?alt=media&token=e0aa0b16-f3d9-44bc-9aa5-912d41809e12"
  },
  {
    id: 5,
    title: <React.Fragment>Impacto <br /><span className="italic font-thin text-gray-400">en el negocio.</span></React.Fragment>,
    description: "Aumento del 40% en reservas directas y reducción del 20% en consultas administrativas gracias a la claridad de la información.",
    tags: ["Business", "Analytics"],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/siconm-40cbd.firebasestorage.app/o/project-e892b18a-e553-4463-aacf-c809152b0d02.mp4?alt=media&token=e0aa0b16-f3d9-44bc-9aa5-912d41809e12"
  }
];

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
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Scroll Navigation (Debounced)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      setIsScrolling(true);
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // 1s debounce
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeoutId);
    };
  }, [isScrolling, handleNext, handlePrev]);

  const currentData = projectData[currentStep - 1];

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden transition-colors duration-500">
      <Navbar currentStep={currentStep} onStepChange={setCurrentStep} />

      {/* Navigation Arrows */}
      <NavigationArrow direction="left" onClick={handlePrev} visible={currentStep > 1} />
      <NavigationArrow direction="right" onClick={handleNext} visible={currentStep < 5} />

      {/* Content with Transition Key */}
      <div key={currentStep} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <ProjectShowcase
          title={currentData.title}
          description={currentData.description}
          tags={currentData.tags}
          videoUrl={currentData.videoUrl}
        />
      </div>
    </main>
  );
}
