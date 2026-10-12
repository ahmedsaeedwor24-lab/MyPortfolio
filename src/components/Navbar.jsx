import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profile';
import { Sun, Moon, Globe, Menu, X } from './common/Icons';

export default function Navbar() {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
  ];

  // Scroll listener for sticky shadow and scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll-spy: find section currently in view
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'services', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md shadow-soft border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left rtl:text-right group p-1 -m-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Ahmed Saeed - Home"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-border bg-surface shadow-sm shrink-0 group-hover:ring-2 group-hover:ring-primary/40 transition-all">
              <img
                src={profileData.photo}
                alt={profileData.name[language]}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-text tracking-tight group-hover:text-primary transition-colors">
                {isRTL ? 'أحمد سعيد' : 'Ahmed Saeed'}
              </span>
              <span className="text-xs text-text-muted hidden sm:block">
                {isRTL ? 'طالب حاسبات • مطور ويب' : 'CS Student • Web Dev'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors relative min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-primary font-semibold bg-primary/10'
                      : 'text-text-muted hover:text-text hover:bg-surface'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 inset-x-3 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Controls: Language Toggle & Theme Toggle */}
          <div className="flex items-center gap-2">
            
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border border-border bg-surface text-text hover:border-primary/40 transition-colors min-h-[44px] min-w-[44px] justify-center shadow-sm"
              title={language === 'en' ? 'العربية' : 'English'}
            >
              <Globe className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="font-semibold">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Dark/Light Theme Switch Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 rounded-xl border border-border bg-surface text-text hover:border-primary/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4.5 h-4.5 text-accent" aria-hidden="true" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t('nav.close') : t('nav.menu')}
              className="lg:hidden p-2.5 rounded-xl border border-border bg-surface text-text hover:border-primary/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-text" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-text" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.menu')}
          className="fixed inset-0 top-18 sm:top-20 z-50 lg:hidden bg-bg shadow-2xl border-t border-border overflow-y-auto p-6 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-start px-4 py-3 text-base font-medium rounded-xl transition-colors min-h-[48px] flex items-center justify-between ${
                    isActive
                      ? 'bg-primary text-white font-semibold shadow-sm'
                      : 'text-text hover:bg-surface'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border mt-6 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3.5 px-4 rounded-xl bg-primary text-white font-semibold text-center min-h-[48px] shadow-sm hover:opacity-90"
            >
              {t('hero.contactMe')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
