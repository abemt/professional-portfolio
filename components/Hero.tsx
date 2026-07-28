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
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 bg-white">
      {/* Subtle dot grid, fades toward edges */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_55%_50%_at_50%_45%,#000_60%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 z-10 relative max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            <span className="text-sm font-medium text-teal-800">Available for new projects</span>
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-teal-700 mb-5">
            PHP &middot; React.js &middot; WordPress &middot; n8n / Make
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] mb-8 tracking-tight">
            Software engineering for the web — and the workflows behind it.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            I build custom WordPress &amp; WooCommerce platforms, Laravel REST APIs, and AI-powered
            workflow automations with n8n, Make and the OpenAI/Gemini APIs — engineered for performance,
            built to be maintained.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="bg-slate-900 text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              View projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-white text-slate-900 font-semibold py-3.5 px-8 rounded-lg border border-slate-300 hover:border-slate-900 transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;