import React, { useEffect, useRef, useState } from 'react';
import abemImage from '../src/abem.png';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 relative overflow-hidden fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display text-4xl font-bold text-center text-slate-900 mb-16 tracking-tight">
          About Me
          <span className="block w-12 h-1 bg-teal-700 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 bg-white border border-slate-200 rounded-2xl p-8 md:p-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={abemImage}
                  alt="Abem Tadele"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I am a dedicated Full-Stack Developer specializing in crafting high-performance, decoupled web experiences. My technical journey began with a B.Sc. in Information Technology from Hawassa University, which laid a robust foundation for building advanced client solutions.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Today I work across two connected fronts. I engineer high-performance web platforms — headless WordPress, custom WooCommerce, and Laravel/Node.js backends — and I automate the business workflows around them: AI-powered lead intake, content pipelines and order operations built with n8n, Make and the OpenAI/Gemini APIs. Because I write real code, my automations don't stop where the no-code tools do.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 border-t border-slate-200/50 pt-6 text-left text-base">
              <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-slate-400 font-medium min-w-[90px]">Name:</span>
                <span className="text-slate-800 font-semibold">Abem Tadele</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-slate-400 font-medium min-w-[90px]">Location:</span>
                <span className="text-slate-800 font-semibold">Hawassa, Ethiopia</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-slate-400 font-medium min-w-[90px]">Email:</span>
                <a href="mailto:abemtadele@outlook.com" className="text-teal-700 hover:text-teal-800 hover:underline font-semibold break-all">
                  abemtadele@outlook.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-slate-400 font-medium min-w-[90px]">Phone:</span>
                <a href="tel:+251909162143" className="text-teal-700 hover:text-teal-800 hover:underline font-semibold">
                  +251 909 162 143
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-slate-400 font-medium min-w-[90px]">Upwork:</span>
                <a href="https://www.upwork.com/freelancers/~011c205e664a068bbf?mp_source=share" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800 hover:underline font-semibold">
                  View Upwork Profile
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1">
                <span className="text-slate-400 font-medium min-w-[90px]">Education:</span>
                <span className="text-slate-800 font-semibold">B.Sc. in Information Technology, Hawassa University</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;