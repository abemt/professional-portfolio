import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-750 backdrop-blur-md mb-6 animate-pulse">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="text-sm font-medium text-gray-300">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Decoupled & Full-Stack
          <span className="block bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 text-transparent bg-clip-text mt-2 pb-1">
            Web Architect
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Specializing in React.js & PHP integrations, Headless WordPress architectures, Custom WooCommerce stores, and performant Node.js/Express & Laravel backend engines.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold py-4 px-10 rounded-full hover:from-sky-600 hover:to-indigo-750 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-sky-500/20"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-gray-800/80 text-white font-bold py-4 px-10 rounded-full hover:bg-gray-750 border border-gray-700/80 transition-all duration-300 transform hover:scale-105 shadow-xl backdrop-blur-md"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;