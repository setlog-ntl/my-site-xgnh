'use client';

import { ArrowDown } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function HeroSection({ config }: Props) {
  const { locale, t } = useLocale();
  const name = locale === 'en' && config.nameEn ? config.nameEn : config.name;
  const title = locale === 'en' && config.titleEn ? config.titleEn : config.title;
  const tagline = locale === 'en' && config.taglineEn ? config.taglineEn : config.tagline;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b13ec]/10 via-transparent to-[#06b6d4]/10" />

      <div className="relative z-10 text-center max-w-3xl animate-fade-up">
        {config.avatarUrl && (
          <img
            src={config.avatarUrl}
            alt={name}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-6 ring-2 ring-[#5b13ec]/50"
          />
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] bg-clip-text text-transparent animate-fade-up-d1">
          {name}
        </h1>
        {title && (
          <p className="text-lg text-[#06b6d4] mb-4 font-medium animate-fade-up-d1">{title}</p>
        )}
        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto animate-fade-up-d2">
          {tagline}
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] text-white font-medium hover:opacity-90 transition-opacity animate-fade-up-d2"
        >
          {t('hero.cta')}
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
