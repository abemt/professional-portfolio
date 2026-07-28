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
        <h2 className="font-display text-4xl font-bold text-center text-slate-900 mb-16 tracking-tight">
          Technical Skills
          <span className="block w-12 h-1 bg-teal-700 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILLS_DATA.map((category: SkillCategory) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl border border-slate-200 transition-colors duration-200 hover:border-teal-700"
            >
              <h3 className="font-display text-lg font-bold text-slate-900 mb-5">
                {category.title}
              </h3>
              <ul className="space-y-3.5">
                {category.skills.map((skill: Skill) => (
                  <li key={skill.name} className="flex items-center">
                    <span className="text-teal-700 mr-3 [&>svg]:w-5 [&>svg]:h-5">{skill.icon}</span>
                    <span className="text-slate-700 text-sm font-medium">{skill.name}</span>
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