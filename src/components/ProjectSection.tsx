"use client";

import React from "react";
import { NavbarIcons } from "./NavbarIcons";

// Figma Assets
const ASSETS = {
    INTRO_LAPTOP: "http://localhost:3845/assets/53e135b4b7b011f5e5c3b9eef77fed0f58cffe19.png",
    CHALLENGE_GRID: "http://localhost:3845/assets/e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5.svg",
    LINE_DECOR: "http://localhost:3845/assets/c827cb8cb4cd47610567eb863806b04f4b268c29.svg",
    TEAM_MEMBER_1: "http://localhost:3845/assets/5e09f8745c115456fbd8c8a143ae3c683b7238ca.png",
    IMPACT_IMAGE: "http://localhost:3845/assets/7a9773ba679b05476a515b4691c593da4ceb9db5.png",
    STAR_ICON: "http://localhost:3845/assets/df3ff7c7fda8f7e591fe9b7e23f146ffd265281a.svg",
    VERTICAL_TIMELINE: "http://localhost:3845/assets/46ca39a6622caef473cd69f84c94ad92dc2f8ad9.svg",
};

interface ProjectSectionProps {
    step: number;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ step }) => {
    const renderContent = () => {
        switch (step) {
            case 1: // Intro
                return (
                    <div className="relative w-full h-full max-w-[1920px] mx-auto overflow-hidden">
                        {/* Left Content Column */}
                        <div className="absolute left-[205px] top-[232px] w-[717px] space-y-[41px]">
                            <div className="space-y-[10px]">
                                <div className="flex items-center gap-[15px]">
                                    <div className="w-[165px] h-[2.6px] bg-white/40" />
                                    <span className="font-['Haas_Grot_Disp_R_Trial',sans-serif] text-[40px] italic font-light text-white opacity-60">Intro</span>
                                </div>
                                <h1 className="font-['Haas_Grot_Disp_R_Trial',sans-serif] text-[162px] font-light tracking-tighter text-white leading-[0.85] uppercase">
                                    MOD <br /> HOTELS
                                </h1>
                                <p className="font-['Haas_Grot_Disp_R_Trial',sans-serif] text-[45px] font-light italic text-white flex gap-2">
                                    Motor de reserva <span className="opacity-40 font-normal">y página web.</span>
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-[13.1px]">
                                {["Producto", "Diseño", "Desarrollo"].map((tag) => (
                                    <span key={tag} className="px-[25.2px] py-[10.5px] border border-white/20 rounded-full text-[18.2px] font-medium text-white backdrop-blur-md bg-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="max-w-[489px] text-[25.2px] text-white/60 leading-[1.3] font-light font-['Haas_Grot_Disp_R_Trial',sans-serif]">
                                ModHotels, reconocido hotel de 4 estrellas en Mendoza, se renueva con un motor de reservas CRM para optimizar su gestión y fomentar las reservas directas, reflejando su sofisticación y servicios premium.
                            </p>
                        </div>

                        {/* Right Visual Image Column */}
                        <div className="absolute left-[1032px] top-[154px] w-[1010px] h-[755px]">
                            <div className="relative w-full h-full transform scale-110">
                                <img
                                    src={ASSETS.INTRO_LAPTOP}
                                    alt="MOD HOTELS Interface"
                                    className="w-full h-full object-contain pointer-events-none drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="absolute left-[-20px] top-[188px] w-[165px] h-[2px]">
                            <img src={ASSETS.LINE_DECOR} className="w-full h-full opacity-40" alt="" />
                        </div>
                    </div>
                );

            case 2: // Challenge
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-[60px]">
                        <div className="absolute inset-0 pointer-events-none opacity-5">
                            <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]" />
                        </div>

                        <div className="relative w-[921px] bg-white/[0.04] backdrop-blur-[31.5px] border-4 border-white/10 p-[120px] rounded-[40px] shadow-[15.75px_11.025px_31.5px_0px_rgba(0,0,0,0.08)]">
                            <div className="absolute left-[80px] top-[80px] flex items-center gap-[15px]">
                                <div className="w-[120px] h-px bg-white/40" />
                                <span className="text-[33px] italic font-light text-white/40">Challenge</span>
                            </div>

                            <div className="mt-20 space-y-12 text-[33px] font-medium leading-[1.4] text-white">
                                <p>El desafío de utilizar máquinas expendedoras con pagos mediante escaneo de códigos QR radica en la implementación de esta tecnología.</p>
                                <p className="text-white/40">Aunque representa una opción conveniente tanto para empleadores como para usuarios, la integración de IoT genera dudas sobre la aceptación de transacciones sin efectivo en diferentes sistemas automatizados.</p>
                                <p>Esto podría complicar no solo la experiencia de compra, sino también la administración de beneficios laborales.</p>
                            </div>

                            <div className="absolute -right-12 -top-12 w-32 h-32 opacity-20">
                                <NavbarIcons step={2} state="current" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                );

            case 3: // Product
                return (
                    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="space-y-6">
                                <span className="text-sm italic text-white/40">Lo que compro el cliente</span>
                                <h2 className="text-5xl font-light text-white leading-tight">Producto: MVP</h2>
                                <p className="text-xl text-white/60 font-light leading-relaxed max-w-lg">
                                    un sistema CRM a medida, con un inventario unificado, tarifas flexibles y una interfaz de usuario mejorada, elevando la gestión de reservas a la altura que correspondía del hotel.
                                </p>
                            </div>

                            <div className="bg-neutral-900/60 inline-flex items-center gap-6 p-6 rounded-3xl border border-white/10">
                                <div className="text-4xl font-bold text-white">4.500</div>
                                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full border-2 border-orange-400 border-dashed" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-16 animate-in fade-in slide-in-from-right-8 duration-700">
                            <div className="space-y-8">
                                <div className="flex justify-between items-center text-white/60 mb-2">
                                    <span className="text-2xl italic font-light">Proceso</span>
                                    <div className="h-px flex-1 mx-8 bg-white/10" />
                                </div>
                                <div className="flex gap-2 h-4">
                                    <div className="flex-1 bg-[#F39D4A] rounded-sm" />
                                    <div className="flex-1 bg-[#F39D4A] rounded-sm opacity-60" />
                                    <div className="flex-1 bg-[#835190] rounded-sm" />
                                    <div className="flex-1 bg-[#835190] rounded-sm opacity-60" />
                                    <div className="flex-1 bg-[#CF1A6B] rounded-sm" />
                                    <div className="flex-1 bg-[#CF1A6B] rounded-sm opacity-60" />
                                </div>
                                <div className="flex justify-between text-xs tracking-widest uppercase text-white/40">
                                    <span>Diseño</span>
                                    <span>Producto</span>
                                    <span>Desarrollo</span>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-4 text-white/40 italic">
                                    <div className="w-12 h-px bg-white/20" />
                                    <span>The team</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { name: "Fer Castro", role: "Diseñador", color: "bg-[#F39D4A]/20" },
                                        { name: "Facu Benito", role: "Product", color: "bg-[#835190]/20" },
                                        { name: "Seba Fuchi", role: "Dev", color: "bg-[#CF1A6B]/20" }
                                    ].map((member) => (
                                        <div key={member.name} className={`${member.color} p-4 rounded-2xl border border-white/5 space-y-2`}>
                                            <div className="font-semibold text-white text-sm">{member.name}</div>
                                            <div className="text-[10px] uppercase tracking-tighter text-white/40">{member.role}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 4: // Solution
                return (
                    <div className="h-full flex flex-col items-center justify-center gap-12 p-6 animate-in fade-in duration-1000">
                        <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-4xl group">
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105">
                                <source src="https://assets.mixkit.co/videos/preview/mixkit-hotel-lobby-with-clean-and-modern-design-41006-large.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />

                            <div className="absolute bottom-8 left-12 z-30 flex items-center gap-4">
                                <div className="w-8 h-px bg-white/60" />
                                <span className="text-sm italic font-light tracking-widest">VERSIÓN DESKTOP</span>
                            </div>

                            <div className="absolute top-12 left-12 z-30 flex items-center gap-4">
                                <div className="w-8 h-px bg-white/60" />
                                <span className="text-sm italic font-light tracking-widest">MOBILE ADAPTIVE</span>
                            </div>
                        </div>
                    </div>
                );

            case 5: // Impact
                return (
                    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="flex items-center gap-4 text-white/40">
                                <div className="w-12 h-px bg-white/20" />
                                <span className="text-sm uppercase tracking-widest italic font-light tracking-widest">Impacto</span>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { icon: "🚀", text: "La interfaz renovada ha mejorado la navegación, permitiendo a los usuarios navegar más rápidamente." },
                                    { icon: "📈", text: "La nueva funcionalidad de búsqueda avanzada permite filtrar productos por características específicas." },
                                    { icon: "🎨", text: "Un diseño más atractivo y moderno ha captado la atención de los usuarios, aumentando la retención." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                                        <p className="text-lg text-white/70 font-light leading-relaxed group-hover:text-white transition-colors">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-neutral-900/60 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl" />
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-sm italic text-white/40">Nuestro cliente</span>
                                    <div className="flex gap-1 text-orange-400 text-xs">★★★★★</div>
                                </div>
                                <blockquote className="text-xl italic font-light text-white/90 mb-8 leading-relaxed">
                                    "La mejor experiencia posible con el equipo de Lila. Son unos tremendos capos y deberíamos donarle todo nuestro dinero sin dudarlo."
                                </blockquote>
                                <div className="text-sm">
                                    <span className="text-white block font-medium">Juan Carlos Di Giorgio</span>
                                    <span className="text-white/40 italic">CEO de EmpresTalk</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-12 animate-in fade-in slide-in-from-right-8 duration-700">
                            <div className="relative w-full aspect-[3/4] max-w-md bg-neutral-900 rounded-[3rem] border border-white/10 p-12 flex flex-col items-center justify-center text-center space-y-12 shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-[3rem]" />
                                <h3 className="text-7xl font-light italic tracking-tighter text-white">Let's <br /> talk</h3>
                                <button className="px-10 py-5 bg-[#CF1A6B] hover:bg-[#CF1A6B]/80 text-white rounded-full transition-all duration-300 font-medium tracking-wide shadow-lg shadow-pink-600/20 active:scale-95 z-10 w-full max-w-xs">
                                    Quiero hablar con ustedes
                                </button>
                                <div className="flex gap-8 opacity-40 hover:opacity-100 transition-opacity">
                                    {["TW", "LN", "FB"].map(s => <span key={s} className="text-xs font-bold cursor-pointer hover:text-pink-500">{s}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            {renderContent()}
        </div>
    );
};
