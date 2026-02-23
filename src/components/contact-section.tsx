'use client';

import { Mail } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';
import { AnimatedReveal } from './animated-reveal';

interface Props {
  config: SiteConfig;
}

export function ContactSection({ config }: Props) {
  const { t } = useLocale();

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedReveal>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={100}>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            {t('contact.desc')}
          </p>
        </AnimatedReveal>

        {config.email && (
          <AnimatedReveal delay={200}>
            <a
              href={`mailto:${config.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              {t('contact.email')}
            </a>
          </AnimatedReveal>
        )}

        {config.socials.length > 0 && (
          <AnimatedReveal delay={300}>
            <div className="flex items-center justify-center gap-4 mt-6">
              {config.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors capitalize"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </AnimatedReveal>
        )}
      </div>
    </section>
  );
}
