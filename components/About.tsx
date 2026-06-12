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
        <h2 className="text-4xl font-extrabold text-center text-white mb-16 tracking-tight">
          About Me
          <span className="block w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 blur-md opacity-75 transition duration-500 group-hover:opacity-100 group-hover:blur-lg"></div>
                <div className="relative w-full h-full rounded-full bg-gray-900 p-1 flex items-center justify-center shadow-2xl">
                     <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                        <img 
                          src={abemImage} 
                          alt="Abem Tadele" 
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am a dedicated Full-Stack Developer specializing in crafting high-performance, decoupled web experiences. My technical journey began with a B.Sc. in Software Engineering from Hawassa University, which laid a robust foundation for building advanced client solutions.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Today, I specialize in combining **PHP** and **React.js** to build modern architectures, focusing heavily on **Headless WordPress**, **Custom WooCommerce engines**, and scalable backend services built with **Node.js/Express** and **Laravel**. I am passionate about writing maintainable, clean code, optimizing database performance, and delivering flawless digital storefronts that stand out visually and operationally.
            </p>
            <p className="text-lg text-gray-300 font-semibold flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sky-400 font-bold">Education:</span>
              <span className="text-gray-200">B.Sc. in Software Engineering, Hawassa University</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;