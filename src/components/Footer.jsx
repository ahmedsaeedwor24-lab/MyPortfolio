import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Github, Linkedin, Mail } from './common/Icons';

export default function Footer() {
  const { language, t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border pt-12 pb-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-border">
          
          {/* Brand Info */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-base shadow-sm">
                <span>{isRTL ? 'أ' : 'AS'}</span>
              </div>
              <span className="font-bold text-lg text-text">
                {language === 'ar' ? 'أحمد سعيد' : 'Ahmed Saeed'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs sm:text-sm text-text-muted hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-bg hover:bg-surface text-text text-xs sm:text-sm font-semibold transition-colors min-h-[44px] shadow-soft"
              aria-label={t('footer.backToTop')}
            >
              <span>{t('footer.backToTop')}</span>
              <ArrowUp className="w-4 h-4 text-primary" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} Ahmed Saeed. {t('footer.rights')}
          </p>
          <p className="text-center sm:text-end">
            {t('footer.designedWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
