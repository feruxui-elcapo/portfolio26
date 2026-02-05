import React from 'react';

interface ProjectShowcaseProps {
  title: React.ReactNode;
  description: string;
  tags: string[];
  videoUrl: string;
  className?: string;
}

const ProjectShowcase = ({ title, description, tags, videoUrl, className = '' }: ProjectShowcaseProps) => {
  return (
    <section className={`flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 lg:p-20 text-white gap-10 ${className}`}>
      {/* Video Container */}
      <div className="relative w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <div key={tag} className="border border-[#2f2f2f] px-6 py-2 rounded-full text-[#cdcdcd] text-sm lg:text-base">
              {tag}
            </div>
          ))}
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-light leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ProjectShowcase;
