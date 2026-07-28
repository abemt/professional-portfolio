import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className={`py-24 bg-slate-100/40 fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-center text-slate-900 mb-16 tracking-tight">
          Selected Works
          <span className="block w-12 h-1 bg-teal-700 mx-auto mt-4 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden transition-colors duration-200 flex flex-col border border-slate-200 hover:border-teal-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-teal-700 mb-3">
                  {project.role}
                </p>
                <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-auto pt-4 border-t border-slate-100 gap-4">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-white text-slate-900 font-semibold py-2 px-4 rounded-lg border border-slate-300 hover:border-slate-900 transition-colors duration-200 text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 text-center bg-slate-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors duration-200 text-sm"
                  >
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;