import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';
import SectionHeading from './common/SectionHeading';
import { GraduationCap, MapPin, Calendar } from './common/Icons';

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-soft flex flex-col gap-4">
              <p className="text-base sm:text-lg text-text leading-relaxed font-normal">
                {t('about.paragraph1')}
              </p>
              <p className="text-base sm:text-lg text-text leading-relaxed font-normal">
                {t('about.paragraph2')}
              </p>
            </div>

            {/* Core Values / Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-surface border border-border shadow-soft flex flex-col gap-1.5">
                <span className="text-primary font-bold text-lg">01. Quality</span>
                <span className="text-xs sm:text-sm text-text-muted">
                  {language === 'ar' ? 'كود نظيف ومعياري قابل للتوسيع والتطوير' : 'Clean, scalable, maintainable architectures'}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-border shadow-soft flex flex-col gap-1.5">
                <span className="text-primary font-bold text-lg">02. Access</span>
                <span className="text-xs sm:text-sm text-text-muted">
                  {language === 'ar' ? 'معايير WCAG AA وتوافق كامل مع الشاشات' : 'Full WCAG AA accessibility & responsive polish'}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-border shadow-soft flex flex-col gap-1.5">
                <span className="text-primary font-bold text-lg">03. Speed</span>
                <span className="text-xs sm:text-sm text-text-muted">
                  {language === 'ar' ? 'سرعة استجابة فائقة وتحميل لحظي' : 'Optimized bundle size & Lighthouse 90+ speeds'}
                </span>
              </div>
            </div>
          </div>

          {/* Education Card & Academic Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Student Profile Card with Photo */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border shadow-soft flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-primary/25 shadow-soft shrink-0 bg-surface">
                <img
                  src={profileData.photo}
                  alt={profileData.name[language]}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-lg font-bold text-text truncate">
                  {profileData.name[language]}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  {profileData.education.degree[language]}
                </span>
                <span className="text-xs text-text-muted mt-0.5 truncate">
                  {profileData.education.university[language]} • {profileData.education.graduationYear}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-soft flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">
                    {t('about.educationTitle')}
                  </h3>
                  <span className="text-xs text-text-muted">
                    {profileData.education.status[language]}
                  </span>
                </div>
              </div>

              {/* University Name & Degree */}
              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-0.5">
                    {language === 'ar' ? 'الجامعة' : 'Institution'}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-text">
                    {profileData.education.university[language]}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-0.5">
                    {language === 'ar' ? 'الكلية' : 'Faculty'}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-text">
                    {profileData.education.faculty[language]}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-0.5">
                    {language === 'ar' ? 'الدرجة العلمية' : 'Program'}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-text">
                    {profileData.education.degree[language]}
                  </span>
                </div>

                <div className="pt-4 border-t border-border flex flex-wrap gap-4 text-xs sm:text-sm text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>{t('about.classYear')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>{profileData.education.location[language]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Experience Summary Card */}
            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                  {language === 'ar' ? 'الخبرة الميدانية' : 'Freelance Status'}
                </span>
                <span className="text-sm font-semibold text-text">
                  {language === 'ar' ? 'منجز لخدمات الويب والبورتفوليو' : 'Active Web Developer on Khamsat, Mostaql & Fiverr'}
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                2024 - 2026
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
