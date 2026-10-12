import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('ahmed_portfolio_lang');
    if (saved === 'ar' || saved === 'en') return saved;
    // Default to 'en' or detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang && browserLang.startsWith('ar') ? 'ar' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('ahmed_portfolio_lang', language);
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
    if (language === 'ar') {
      html.classList.add('font-cairo');
      html.classList.remove('font-inter');
    } else {
      html.classList.add('font-inter');
      html.classList.remove('font-cairo');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  // Helper function to resolve nested keys like "hero.title"
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if missing
        let fallback = translations.en;
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
