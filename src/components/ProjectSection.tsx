"use client";

import React from "react";

interface ProjectSectionProps {
    step: number;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ step }) => {
    const renderContent = () => {
        switch (step) {
            case 1: // Intro
                return (
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto py-12 px-6">
                        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="space-y-2">
                                <div className="flex items-center gap-4 text-white/60 mb-4">
                                    <div className="w-12 h-px bg-white/40" />
                                    <span className="text-sm uppercase tracking-widest italic font-light">Intro</span>
                                </div>
                                <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-[0.9]">
                                    MOD <br /> HOTELS
                                </h1>
                                <p className="text-2xl md:text-3xl font-light italic text-white/80">
                                    Motor de reserva <span className="text-white/40">y página web.</span>
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {["Producto", "Diseño", "Desarrollo"].map((tag) => (
                                    <span key={tag} className="px-6 py-2 border border-white/20 rounded-full text-sm text-white/80 backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="max-w-xl text-lg text-white/60 leading-relaxed font-light">
                                ModHotels, reconocido hotel de 4 estrellas en Mendoza, se renueva con un motor de reservas CRM para optimizar su gestión y fomentar las reservas directas, reflejando su sofisticación y servicios premium.
                            </p>
                        </div>

                        <div className="flex-1 relative animate-in fade-in slide-in-from-right-8 duration-700">
                            <div className="relative z-10 scale-110">
                                {/* Laptop Mockup placeholder or visual */}
                                <div className="aspect-video bg-neutral-900 rounded-xl border-4 border-neutral-800 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600" alt="Hotel visualization" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                );

            case 2: // Challenge
                return (
                    <div className="relative min-h-[60vh] flex items-center justify-center px-6">
                        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                            <div className="grid grid-cols-12 gap-4 h-full w-full rotate-12 scale-150">
                                {Array.from({ length: 144 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-white rounded-full opacity-20" />
                                ))}
                            </div>
                        </div>

                        <div className="max-w-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-12 rounded-[2rem] shadow-3xl animate-in zoom-in duration-700">
                            <div className="flex items-center gap-4 text-white/60 mb-8">
                                <div className="w-12 h-px bg-white/40" />
                                <span className="text-sm uppercase tracking-widest italic font-light">Challenge</span>
                            </div>
                            <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-white/90">
                                <p>El desafío de utilizar máquinas expendedoras con pagos mediante escaneo de códigos QR radica en la implementación de esta tecnología.</p>
                                <p className="text-white/60">Aunque representa una opción conveniente tanto para empleadores como para usuarios, la integración de IoT genera dudas sobre la aceptación de transacciones sin efectivo en diferentes sistemas automatizados.</p>
                                <p>Esto podría complicar no solo la experiencia de compra, sino también la administración de beneficios laborales.</p>
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
                                    <div className="flex-1 bg-orange-400 rounded-sm" />
                                    <div className="flex-1 bg-orange-500 rounded-sm" />
                                    <div className="flex-1 bg-purple-500 rounded-sm" />
                                    <div className="flex-1 bg-purple-600 rounded-sm" />
                                    <div className="flex-1 bg-pink-500 rounded-sm" />
                                    <div className="flex-1 bg-pink-600 rounded-sm" />
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
                                        { name: "Fer Castro", role: "Diseñador", color: "bg-orange-500/20" },
                                        { name: "Facu Benito", role: "Product", color: "bg-purple-500/20" },
                                        { name: "Seba Fuchi", role: "Dev", color: "bg-pink-500/20" }
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
                            <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105">
                                <source src="https://assets.mixkit.co/videos/preview/mixkit-hotel-lobby-with-clean-and-modern-design-41006-large.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />

                            <div className="absolute bottom-8 left-12 z-30 flex items-center gap-4">
                                <div className="w-8 h-px bg-white/60" />
                                <span className="text-sm italic font-light tracking-widest">Versión desktop</span>
                            </div>

                            <div className="absolute top-12 left-12 z-30 flex items-center gap-4">
                                <div className="w-8 h-px bg-white/60" />
                                <span className="text-sm italic font-light tracking-widest">Versión mobile</span>
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
                                <button className="px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-all duration-300 font-medium tracking-wide shadow-lg shadow-pink-600/20 active:scale-95 z-10 w-full max-w-xs">
                                    Quiero hablar con ustedes
                                </button>
                                <div className="flex gap-6 opacity-40 group-hover:opacity-100 transition-opacity">
                                    {["FB", "LN", "TW"].map(s => <span key={s} className="text-xs font-bold">{s}</span>)}
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
