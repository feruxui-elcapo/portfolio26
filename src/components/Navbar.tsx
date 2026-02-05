"use client";

import React, { useState } from "react";
import { NavbarIcons } from "./NavbarIcons";

interface NavbarProps {
    currentStep: number;
    onStepChange: (step: number) => void;
    className?: string;
}

const steps = [
    { id: 1, label: "Intro" },
    { id: 2, label: "Challenge" },
    { id: 3, label: "Product" },
    { id: 4, label: "Solution" },
    { id: 5, label: "Impact" },
];

export const Navbar: React.FC<NavbarProps> = ({ currentStep, onStepChange, className = "" }) => {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const getIconState = (stepId: number) => {
        if (stepId < currentStep) return "passed";
        if (stepId === currentStep) return "current";
        return "future";
    };

    return (
        <nav className={`fixed top-12 left-0 w-full z-50 flex items-center justify-center p-[10px] ${className}`}>
            <div className="flex items-start relative gap-0">
                {steps.map((step, index) => {
                    const isActive = currentStep === step.id;
                    const isHovered = hoveredStep === step.id;
                    const isLabelVisible = isActive || isHovered;

                    return (
                        <div key={step.id} className="flex items-start relative shrink-0">
                            <div
                                className="flex flex-col gap-[9.676px] items-start relative shrink-0 cursor-pointer group"
                                onMouseEnter={() => setHoveredStep(step.id)}
                                onMouseLeave={() => setHoveredStep(null)}
                                onClick={() => onStepChange(step.id)}
                            >
                                <div className="flex items-center overflow-clip relative shrink-0 w-full">
                                    <NavbarIcons
                                        step={step.id as any}
                                        state={getIconState(step.id)}
                                        className="shrink-0 size-[40.958px] transition-transform duration-300 group-hover:scale-110"
                                    />
                                    {/* Line connecting to next icon (only if not last) */}
                                    {index < steps.length - 1 && (
                                        <div className={`h-0 relative shrink-0 w-[25.294px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}>
                                            <div className="absolute top-0 left-0 right-0 h-[2.6px] bg-white transform -translate-y-1/2" />
                                        </div>
                                    )}
                                </div>

                                {/* Label - Only visible if active or hovered */}
                                <div className={`transition-all duration-500 overflow-hidden ${isLabelVisible ? "h-[53.216px] opacity-100" : "h-0 opacity-0"}`}>
                                    <div className="flex items-center justify-center pr-[24.189px] relative mt-[2px]">
                                        <p className="font-['Haas_Grot_Disp_R_Trial',sans-serif] italic leading-[normal] relative shrink-0 text-[44.73px] text-white whitespace-nowrap" style={{ fontStyle: 'italic', fontWeight: 100 }}>
                                            {step.label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};
