import React, { useState } from 'react';

interface NavbarProps {
    currentStep: number;
    onStepChange: (step: number) => void;
    className?: string;
}

const Navbar = ({ currentStep, onStepChange, className = '' }: NavbarProps) => {
    const [hoverStep, setHoverStep] = useState<number | null>(null);

    const steps = [
        { id: 1, label: 'Intro' },
        { id: 2, label: 'Challenge' },
        { id: 3, label: 'Product' },
        { id: 4, label: 'Solution' },
        { id: 5, label: 'Impact' },
    ];

    return (
        <nav className={`fixed top-8 left-0 right-0 z-50 flex justify-center ${className}`}>
            <div className="flex items-start gap-0">
                {steps.map((step, index) => {
                    const isLast = index === steps.length - 1;
                    const isActive = step.id === currentStep;
                    const isPassed = step.id < currentStep;

                    return (
                        <div key={step.id} className="flex items-start">
                            {/* Step Item */}
                            <div
                                className="relative flex flex-col items-center cursor-pointer group"
                                onMouseEnter={() => setHoverStep(step.id)}
                                onMouseLeave={() => setHoverStep(null)}
                                onClick={() => onStepChange(step.id)}
                            >
                                {/* Icon Container */}
                                <div className="w-10 h-10 flex items-center justify-center relative translate-y-[-25%]">
                                    {/* 
                      Icon Logic:
                      - Passed: Fill
                      - Active: Outline + Small Fill (Center)
                      - Future: Outline
                   */}

                                    {/* Base Outline (Always visible except when passed? No, passed shows fill. Let's stack them) */}
                                    <svg width="32" height="32" viewBox="0 0 32 32" className={`transition-all duration-300 ${isPassed ? 'opacity-0' : 'opacity-100'}`}>
                                        {/* Generic Shapes for each step */}
                                        {step.id === 1 && <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gray-500" />}
                                        {step.id === 2 && <path d="M16 2L30 28H2L16 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gray-500" />}
                                        {step.id === 3 && <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gray-500" />}
                                        {step.id === 4 && <path d="M16 2L2 16L16 30L30 16L16 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gray-500" />}
                                        {step.id === 5 && <path d="M16 2L19 12L29 12L21 19L24 29L16 23L8 29L11 19L3 12L13 12L16 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-gray-500" />}
                                    </svg>

                                    {/* Active Inner Fill */}
                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                                        {step.id === 1 && <circle cx="16" cy="16" r="6" fill="#fff" />}
                                        {step.id === 2 && <path d="M16 10L20 22H12L16 10Z" fill="#fff" />}
                                        {step.id === 3 && <rect x="12" y="12" width="8" height="8" fill="#fff" />}
                                        {step.id === 4 && <path d="M16 10L10 16L16 22L22 16L16 10Z" fill="#fff" />}
                                        {step.id === 5 && <circle cx="16" cy="16" r="6" fill="#fff" />}
                                    </div>

                                    {/* Passed Fill */}
                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPassed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                                        {step.id === 1 && <circle cx="16" cy="16" r="14" fill="#fff" />}
                                        {step.id === 2 && <path d="M16 2L30 28H2L16 2Z" fill="#fff" />}
                                        {step.id === 3 && <rect x="4" y="4" width="24" height="24" fill="#fff" />}
                                        {step.id === 4 && <path d="M16 2L2 16L16 30L30 16L16 2Z" fill="#fff" />}
                                        {step.id === 5 && <path d="M16 2L19 12L29 12L21 19L24 29L16 23L8 29L11 19L3 12L13 12L16 2Z" fill="#fff" />}
                                    </div>
                                </div>

                                {/* Label (Hover or Active) */}
                                <div className={`absolute top-12 whitespace-nowrap transition-all duration-300 ${hoverStep === step.id || isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                                    <span className={`text-2xl font-light italic ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                        {step.label}
                                    </span>
                                </div>
                            </div>

                            {/* Connector Line */}
                            {!isLast && (
                                <div className="w-16 h-[2px] mt-5 mx-2 bg-gray-800 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-white transition-transform duration-500 origin-left ${isPassed ? 'scale-x-100' : 'scale-x-0'}`} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
