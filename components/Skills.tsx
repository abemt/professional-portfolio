import React, { useEffect, useRef, useState } from 'react';
import { SKILLS_DATA } from '../constants';
import type { SkillCategory, Skill } from '../types';

const Skills: React.FC = () => {
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
      id="skills" 
      ref={sectionRef} 
      className={`py-24 bg-slate-50/50 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-200/80 transition-all duration-300 hover:border-sky-500 hover:shadow-sky-500/10 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-sky-600 mb-6 text-center">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill: Skill) => (
                  <li key={skill.name} className="flex items-center text-lg">
                    <span className="text-sky-600 mr-4">{skill.icon}</span>
                    <span className="text-slate-700">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;