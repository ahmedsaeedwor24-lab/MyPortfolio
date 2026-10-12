import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import SectionHeading from './common/SectionHeading';
import { Layout, Code, CheckCircle2, ExternalLink, ArrowRight, ArrowLeft } from './common/Icons';

export default function Services() {
  const { language, t, isRTL } = useLanguage();

  const getServiceIcon = (iconName) => {
    if (iconName === 'Layout') {
      return <Layout className="w-6 h-6 text-primary" aria-hidden="true" />;
    }
    return <Code className="w-6 h-6 text-primary" aria-hidden="true" />;
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 76;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-2xl bg-surface border border-border shadow-soft hover:shadow-soft-lg hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text">
                      {service.title[language]}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-text/80 leading-relaxed mb-6 font-normal">
                  {service.shortDesc[language]}
                </p>

                {/* Deliverables List */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3.5">
                    {t('services.featuresHeading')}
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables[language].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Order via platforms & Direct quote */}
              <div className="pt-6 border-t border-border flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-text-muted">
                    {t('services.orderOn')}:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.platforms.map((plat) => (
                      <a
                        key={plat.name}
                        href={plat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg border border-border hover:border-primary/50 text-xs font-medium text-text transition-colors min-h-[44px]"
                      >
                        <span>{plat.name}</span>
                        <ExternalLink className="w-3 h-3 text-text-muted" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-primary/10 hover:bg-primary hover:text-white text-primary font-semibold text-xs sm:text-sm transition-all border border-primary/20 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>{t('services.requestQuote')}</span>
                  <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
