import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import SectionHeading from './common/SectionHeading';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github, Users, ArrowRight, ArrowLeft } from './common/Icons';

export default function Projects() {
  const { language, t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const filterTabs = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'web', label: t('projects.filterWeb') },
    { id: 'ai', label: t('projects.filterAI') },
    { id: 'backend', label: t('projects.filterBackend') },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return (
      project.category === activeFilter ||
      (project.secondaryCategories && project.secondaryCategories.includes(activeFilter))
    );
  });

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="projects" className="py-16 md:py-24 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('projects.badge')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all min-h-[44px] ${
                  isActive
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-surface text-text-muted hover:text-text border border-border hover:border-primary/40'
                }`}
                aria-pressed={isActive}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout={!shouldReduceMotion}
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-soft hover:shadow-soft-lg hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                        {project.category.toUpperCase()}
                      </span>
                      {project.teamInfo?.isTeam && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/20 text-text border border-accent/40">
                          <Users className="w-3 h-3" aria-hidden="true" />
                          <span>{t('projects.teamProject')}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-text group-hover:text-primary transition-colors mb-1.5 leading-snug">
                    {project.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-text-muted mb-3.5">
                    {project.subtitle[language]}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-text/85 leading-relaxed mb-6 font-normal">
                    {project.shortDescription[language]}
                  </p>

                  {/* Tech stack preview pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-bg text-text-muted text-xs border border-border font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-bg text-text-muted text-xs border border-border">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions: View Details modal & links */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover min-h-[44px] group/btn focus-visible:outline-none"
                    aria-label={`${t('projects.viewDetails')}: ${project.title[language]}`}
                  >
                    <span>{t('projects.viewDetails')}</span>
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" aria-hidden="true" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl text-text-muted hover:text-text hover:bg-bg border border-transparent hover:border-border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label={`${t('projects.sourceCode')}: ${project.title[language]}`}
                        title={t('projects.sourceCode')}
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl text-text-muted hover:text-primary hover:bg-bg border border-transparent hover:border-border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label={`${t('projects.liveDemo')}: ${project.title[language]}`}
                        title={t('projects.liveDemo')}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
