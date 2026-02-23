'use client';

import { Star } from 'lucide-react';
import type { TestimonialItem } from '@/lib/config';
import { useLocale } from '@/lib/i18n';
import { AnimatedReveal } from './animated-reveal';

interface Props {
  testimonials: TestimonialItem[];
}

export function TestimonialsSection({ testimonials }: Props) {
  const { locale, t } = useLocale();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal>
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
        </AnimatedReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => {
            const author = locale === 'en' && item.authorEn ? item.authorEn : item.author;
            const role = locale === 'en' && item.roleEn ? item.roleEn : item.role;
            const company = locale === 'en' && item.companyEn ? item.companyEn : item.company;
            const content = locale === 'en' && item.contentEn ? item.contentEn : item.content;
            return (
              <AnimatedReveal key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed italic">
                    &ldquo;{content}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-gray-100 text-sm">{author}</p>
                    <p className="text-xs text-gray-500">{role}, {company}</p>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
