import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';
import SectionHeading from './common/SectionHeading';
import { Mail, Send, Github, Linkedin, ExternalLink, CheckCircle2 } from './common/Icons';

export default function Contact() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = t('contact.validation.nameRequired');
    }
    if (!formData.email.trim()) {
      errs.email = t('contact.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = t('contact.validation.emailInvalid');
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = t('contact.validation.messageRequired');
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    const generatedMailto = `mailto:ahmed.saeed.dev@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    setMailtoUrl(generatedMailto);
    setSubmitted(true);

    // Trigger email client
    window.location.href = generatedMailto;
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-soft">
            {submitted ? (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-text">
                  {language === 'ar' ? 'تم إعداد الرسالة بنجاح' : 'Message Prepared!'}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {t('contact.successMsg')}
                </p>
                {mailtoUrl && (
                  <div className="pt-2">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-soft hover:bg-primary-hover min-h-[44px]"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>{t('contact.openMailto')}</span>
                    </a>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="text-xs text-text-muted hover:text-text underline mt-3 block mx-auto min-h-[44px] flex items-center justify-center"
                >
                  {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-semibold text-text mb-1.5">
                    {t('contact.nameLabel')} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-bg border text-text placeholder-text-muted/60 text-sm sm:text-base focus:bg-surface transition-colors min-h-[44px] ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs sm:text-sm font-semibold text-text mb-1.5">
                    {t('contact.emailLabel')} <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-bg border text-text placeholder-text-muted/60 text-sm sm:text-base focus:bg-surface transition-colors min-h-[44px] ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs sm:text-sm font-semibold text-text mb-1.5">
                    {t('contact.subjectLabel')}
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.subjectPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder-text-muted/60 text-sm sm:text-base focus:bg-surface focus:border-primary transition-colors min-h-[44px]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs sm:text-sm font-semibold text-text mb-1.5">
                    {t('contact.messageLabel')} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-bg border text-text placeholder-text-muted/60 text-sm sm:text-base focus:bg-surface transition-colors resize-y ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-500 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base shadow-soft hover:bg-primary-hover transition-all flex items-center justify-center gap-2 min-h-[48px] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{t('contact.submitBtn')}</span>
                </button>
              </form>
            )}
          </div>

          {/* Social and Freelance Platform Connections */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-surface border border-border shadow-soft">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text">
                    {language === 'ar' ? 'البريد الإلكتروني المباشر' : 'Direct Email'}
                  </h3>
                  <a
                    href="mailto:ahmed.saeed.dev@gmail.com"
                    className="text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    ahmed.saeed.dev@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {t('contact.fallbackDesc')}
              </p>
            </div>

            {/* Freelance Profiles */}
            <div className="p-6 rounded-2xl bg-surface border border-border shadow-soft">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">
                {language === 'ar' ? 'منصات العمل الحر' : 'Freelance Platforms'}
              </h3>
              <div className="space-y-3">
                {profileData.freelancePlatforms.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-bg hover:bg-surface border border-border hover:border-primary/40 transition-colors min-h-[44px] group"
                  >
                    <div>
                      <span className="text-sm font-bold text-text group-hover:text-primary transition-colors block">
                        {platform.name[language]}
                      </span>
                      <span className="text-xs text-text-muted">
                        {platform.description[language]}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors shrink-0 rtl:mr-2 ltr:ml-2" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* GitHub & LinkedIn Profiles */}
            <div className="p-6 rounded-2xl bg-surface border border-border shadow-soft">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-4">
                {language === 'ar' ? 'الشبكات المهنية' : 'Developer Networks'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/ahmedsaeed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-bg hover:bg-surface border border-border hover:border-primary/40 transition-colors text-text min-h-[44px]"
                >
                  <Github className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ahmed-saeed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-bg hover:bg-surface border border-border hover:border-primary/40 transition-colors text-text min-h-[44px]"
                >
                  <Linkedin className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
