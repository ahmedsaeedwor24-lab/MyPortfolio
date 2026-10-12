import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, Github, Users, CheckCircle2, Layers } from './common/Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { language, t, isRTL } = useLanguage();
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Focus trap & Escape listener
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      // Focus first focusable element inside modal
      const timer = setTimeout(() => {
        if (modalRef.current) {
          const focusable = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            focusable[0].focus();
          }
        }
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        } else if (e.key === 'Tab' && modalRef.current) {
          const focusable = Array.from(
            modalRef.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          ).filter(el => !el.disabled && el.offsetParent !== null);

          if (focusable.length === 0) return;

          const firstEl = focusable[0];
          const lastEl = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="presentation"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          aria-describedby="modal-project-desc"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-dark-soft-lg z-10 max-h-[90vh] flex flex-col overflow-hidden my-auto"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-6 sm:p-7 border-b border-border bg-surface">
            <div className="pr-6 rtl:pr-0 rtl:pl-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  {project.category.toUpperCase()}
                </span>
                {project.teamInfo?.isTeam && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-text border border-accent/40">
                    <Users className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t('projects.teamProject')}</span>
                  </span>
                )}
              </div>
              <h2
                id="modal-project-title"
                className="text-xl sm:text-2xl font-bold text-text leading-tight"
              >
                {project.title[language]}
              </h2>
              <p className="text-xs sm:text-sm text-text-muted mt-1 font-medium">
                {project.subtitle[language]}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label={t('projects.closeModal')}
              className="p-2 -mr-2 -mt-2 sm:mr-0 sm:mt-0 rounded-xl text-text-muted hover:text-text hover:bg-bg border border-transparent hover:border-border transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
            
            {/* Full Detailed Description */}
            <div>
              <p
                id="modal-project-desc"
                className="text-sm sm:text-base text-text leading-relaxed font-normal"
              >
                {project.fullDescription[language]}
              </p>
            </div>

            {/* Role & Contribution if available */}
            {project.teamInfo?.role && (
              <div className="p-4 rounded-xl bg-bg border border-border">
                <span className="text-xs uppercase tracking-wider font-bold text-text-muted block mb-1">
                  {t('projects.role')}
                </span>
                <span className="text-sm font-semibold text-primary">
                  {project.teamInfo.role[language]}
                </span>
              </div>
            )}

            {/* Key Features & Architecture */}
            {project.features && project.features[language] && (
              <div>
                <h3 className="text-sm font-bold text-text uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>{t('projects.keyHighlights')}</span>
                </h3>
                <ul className="space-y-2.5">
                  {project.features[language].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack List */}
            <div>
              <h3 className="text-sm font-bold text-text uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>{t('projects.techUsed')}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-bg border border-border text-xs sm:text-sm font-medium text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / Actions */}
          <div className="p-4 sm:p-6 border-t border-border bg-bg/50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-text font-semibold text-xs sm:text-sm hover:border-primary/50 transition-colors shadow-soft min-h-[44px]"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>{t('projects.sourceCode')}</span>
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary-hover transition-colors shadow-soft min-h-[44px]"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>{t('projects.liveDemo')}</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-surface border border-border text-text-muted hover:text-text font-medium text-xs sm:text-sm transition-colors min-h-[44px]"
            >
              {t('projects.closeModal')}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
