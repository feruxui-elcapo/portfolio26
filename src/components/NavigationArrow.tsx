import React from 'react';

interface NavigationArrowProps {
    direction: 'left' | 'right';
    onClick: () => void;
    className?: string;
    visible?: boolean;
}

const NavigationArrow = ({ direction, onClick, className = '', visible = true }: NavigationArrowProps) => {
    if (!visible) return null;

    return (
        <button
            onClick={onClick}
            className={`fixed top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group ${direction === 'left' ? 'left-4' : 'right-4'
                } ${className}`}
            aria-label={direction === 'left' ? 'Previous Project' : 'Next Project'}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`text-white transition-transform duration-300 ${direction === 'left' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
            >
                <path
                    d={direction === 'left' ? "M15 19L8 12L15 5" : "M9 5L16 12L9 19"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default NavigationArrow;
