import React from 'react';

const ProjectShowcase = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#0a0a0a] p-8 lg:p-20 text-white gap-10">
      {/* Video Container */}
      <div className="relative w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/siconm-40cbd.firebasestorage.app/o/project-e892b18a-e553-4463-aacf-c809152b0d02.mp4?alt=media&token=e0aa0b16-f3d9-44bc-9aa5-912d41809e12" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {['Producto', 'Diseño', 'Desarrollo'].map((tag) => (
            <div key={tag} className="border border-[#2f2f2f] px-6 py-2 rounded-full text-[#cdcdcd] text-sm lg:text-base">
              {tag}
            </div>
          ))}
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-light leading-tight">
          Motor de reserva <br />
          <span className="italic font-thin text-gray-400">y página web.</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
          ModHotels, reconocido hotel de 4 estrellas en Mendoza, se renueva con un motor de reservas CRM para optimizar su gestión y fomentar las reservas directas, reflejando su sofisticación y servicios premium.
        </p>
      </div>
    </section>
  );
};

export default ProjectShowcase;
