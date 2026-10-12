import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';
import { ArrowRight, ArrowLeft, Sparkles, GraduationCap, Code, ExternalLink } from './common/Icons';

export default function Hero() {
  const { language, t, isRTL } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
      };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle decorative background glow in sage teal */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Active status pill */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-surface border border-border shadow-soft text-text">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>{t('hero.statusBadge')}</span>
            </span>
          </motion.div>

          {/* Profile Photo Avatar */}
          <motion.div variants={itemVariants} className="mb-6 relative">
            <div className="relative mx-auto group">
              {/* Soft ambient aura */}
              <div
                className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
              
              {/* Picture frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-surface shadow-soft-lg ring-2 ring-primary/20 bg-surface">
                <img
                  src={profileData.photo}
                  alt={profileData.name[language]}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Floating university indicator badge */}
              <div
                className="absolute bottom-1 right-1 rtl:right-auto rtl:left-1 w-9 h-9 rounded-full bg-surface border-2 border-border shadow-soft flex items-center justify-center text-primary"
                title={`${profileData.education.university[language]} — Class of 2027`}
                aria-label={profileData.education.university[language]}
              >
                <GraduationCap className="w-4.5 h-4.5" aria-hidden="true" />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-text tracking-tight leading-[1.15] mb-4"
          >
            <span className="block text-text-muted text-lg sm:text-2xl font-normal mb-1">
              {t('hero.greeting')}
            </span>
            <span className="text-primary">
              {profileData.name[language]}
            </span>
          </motion.h1>

          {/* Subheading / Role */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-semibold text-text/90 mb-4 tracking-tight"
          >
            {profileData.title[language]}
          </motion.p>

          {/* Value proposition */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mb-8"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 shadow-soft hover:bg-primary-hover hover:shadow-soft-lg transition-all active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span>{t('hero.viewProjects')}</span>
              <ArrowIcon className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-surface border border-border text-text font-semibold flex items-center justify-center gap-2 shadow-soft hover:border-primary/50 hover:bg-surface/80 transition-all active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span>{t('hero.contactMe')}</span>
            </button>
          </motion.div>

          {/* Freelance platform credentials banner */}
          <motion.div
            variants={itemVariants}
            className="w-full pt-8 border-t border-border flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-4">
              {t('hero.freelanceOn')}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              {profileData.freelancePlatforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface border border-border hover:border-primary/40 text-text transition-all shadow-soft min-h-[44px] text-xs sm:text-sm font-medium"
                >
                  <span className="font-semibold group-hover:text-primary transition-colors">
                    {platform.name[language]}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {platform.badge}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
