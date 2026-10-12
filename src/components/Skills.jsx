import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skills';
import SectionHeading from './common/SectionHeading';
import { Code, Cpu, Layout, Wrench, Sparkles } from './common/Icons';

export default function Skills() {
  const { language, t } = useLanguage();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend':
        return <Layout className="w-5 h-5 text-primary" aria-hidden="true" />;
      case 'backend':
        return <Code className="w-5 h-5 text-primary" aria-hidden="true" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-primary" aria-hidden="true" />;
      case 'tools':
      default:
        return <Wrench className="w-5 h-5 text-primary" aria-hidden="true" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('skills.badge')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((cat) => (
            <div
              key={cat.category}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-soft hover:shadow-soft-lg hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 flex items-center justify-center">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text">
                    {cat.title[language]}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                  {cat.description[language]}
                </p>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all ${
                        skill.highlight
                          ? 'bg-primary/10 text-primary border border-primary/25 font-semibold'
                          : 'bg-bg text-text border border-border font-medium hover:border-primary/30'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.badge && (
                        <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded-md ${
                          skill.highlight
                            ? 'bg-primary text-white font-bold'
                            : 'bg-surface text-text-muted border border-border'
                        }`}>
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
                <span>{cat.skills.length} {language === 'ar' ? 'مهارات وأدوات' : 'technologies'}</span>
                <span className="flex items-center gap-1 text-primary">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{language === 'ar' ? 'تطبيق عملي' : 'Production-ready'}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
