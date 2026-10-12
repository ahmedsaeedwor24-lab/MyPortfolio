import React from 'react';

export default function SectionHeading({ badge, title, subtitle, center = true, id }) {
  return (
    <div
      className={`mb-12 md:mb-16 transition-all duration-300 ${
        center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'
      }`}
    >
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs md:text-sm font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          {badge}
        </span>
      )}
      <h2
        id={id}
        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text leading-tight mb-3"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
