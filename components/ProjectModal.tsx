import React, { useEffect } from 'react';
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

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors duration-300"
          aria-label="Close modal"
        >
          <svg
            className="w-8 h-8"
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
        <div className="pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{project.title}</h2>
            <p className="text-lg font-semibold text-sky-600 mb-6">
              Role: {project.role}
            </p>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg mb-8 shadow-lg"
            />
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-sky-600 mb-3 border-b-2 border-sky-600/30 pb-2">The Challenge</h3>
                <p>{project.caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sky-600 mb-3 border-b-2 border-sky-600/30 pb-2">My Solution</h3>
                <p>{project.caseStudy.solution}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sky-600 mb-3 border-b-2 border-sky-600/30 pb-2">The Outcome</h3>
                <p>{project.caseStudy.outcome}</p>
              </div>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;