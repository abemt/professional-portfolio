import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-start justify-center p-4 sm:p-6 md:py-12">
        <div
          className="bg-white border border-slate-200 rounded-xl shadow-2xl w-full max-w-3xl animate-fade-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky header: title always visible, close always reachable */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 rounded-t-xl px-6 sm:px-8 py-4 flex items-start justify-between gap-4 z-10">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">{project.title}</h2>
              <p className="text-sm font-semibold text-teal-700 mt-1">{project.role}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-6 sm:px-8 py-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-56 object-cover rounded-lg mb-6 border border-slate-200"
            />
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-7 text-slate-600 text-base leading-relaxed">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-teal-700 rounded-full"></span>
                  The Challenge
                </h3>
                <p>{project.caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-teal-700 rounded-full"></span>
                  My Solution
                </h3>
                <p>{project.caseStudy.solution}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-teal-700 rounded-full"></span>
                  The Outcome
                </h3>
                <p>{project.caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(16px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ProjectModal;