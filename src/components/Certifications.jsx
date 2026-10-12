import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';
import SectionHeading from './common/SectionHeading';
import { Award, ExternalLink, Calendar } from './common/Icons';

export default function Certifications() {
  const { language, t } = useLanguage();

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('certifications.badge')}
          title={t('certifications.title')}
          subtitle={t('certifications.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-soft hover:shadow-soft-lg hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Award className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/20 text-text border border-accent/40">
                    {cert.badgeText}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-text mb-2 leading-snug">
                  {cert.title[language]}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-primary mb-3">
                  {cert.issuer[language]}
                </p>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                  {cert.description[language]}
                </p>

                {cert.skillsLearned && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-bg text-[11px] font-medium text-text-muted border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-text-muted">
                  <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span>{cert.date[language]}</span>
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-hover min-h-[44px]"
                  aria-label={`${t('certifications.credentialUrl')}: ${cert.title[language]}`}
                >
                  <span>{t('certifications.credentialUrl')}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
