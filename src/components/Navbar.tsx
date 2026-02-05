"use client";

import React, { useState } from "react";
import { NavbarIcons } from "./NavbarIcons";

interface NavbarProps {
    currentStep: number;
    onStepChange: (step: number) => void;
}

const steps = [
    { id: 1, label: "Intro" },
    { id: 2, label: "Challenge" },
    { id: 3, label: "Product" },
    { id: 4, label: "Solution" },
    { id: 5, label: "Impact" },
];

export const Navbar: React.FC<NavbarProps> = ({ currentStep, onStepChange }) => {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const getIconState = (stepId: number) => {
        if (stepId < currentStep) return "passed";
        if (stepId === currentStep) return "current";
        return "future";
    };

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-4 px-6 h-12 relative">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        {/* Step Icon */}
                        <div
                            className="relative group cursor-pointer flex flex-col items-center"
                            onMouseEnter={() => setHoveredStep(step.id)}
                            onMouseLeave={() => setHoveredStep(null)}
                            onClick={() => onStepChange(step.id)}
                        >
                            <NavbarIcons
                                step={step.id as any}
                                state={getIconState(step.id)}
                                className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300"
                            />
                        </div>

                        {/* Progress Line */}
                        {index < steps.length - 1 && (
                            <div className="w-8 sm:w-12 h-px relative bg-white/20">
                                <div
                                    className={`absolute h-full bg-white transition-all duration-500 ease-out ${step.id < currentStep ? "w-full" : "w-0"
                                        }`}
                                />
                                {/* Visual Dotted Line for future states */}
                                <div className="absolute inset-0 border-t border-dotted border-white/40" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Dynamic Title (Neue Haas Grotesk style) */}
            <div className="h-8 flex items-center justify-center overflow-hidden">
                {steps.map((step) => (
                    <span
                        key={step.id}
                        className={`absolute transition-all duration-500 ease-in-out text-xl sm:text-2xl font-light italic tracking-tight text-white ${(hoveredStep || currentStep) === step.id
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                        {step.label}
                    </span>
                ))}
            </div>
        </nav>
    );
};
