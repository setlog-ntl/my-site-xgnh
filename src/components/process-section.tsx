'use client';

import type { ProcessStep } from '@/lib/config';
import { useLocale } from '@/lib/i18n';
import { AnimatedReveal } from './animated-reveal';

interface Props {
  process: ProcessStep[];
}

export function ProcessSection({ process }: Props) {
  const { locale, t } = useLocale();

  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedReveal>
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] bg-clip-text text-transparent">
            {t('process.title')}
          </h2>
        </AnimatedReveal>

        {/* Desktop: horizontal stepper */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Connector line */}
            <div className="absolute top-6 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] opacity-30" />

            {process.map((step, i) => {
              const title = locale === 'en' && step.titleEn ? step.titleEn : step.title;
              const desc = locale === 'en' && step.descEn ? step.descEn : step.desc;
              return (
                <AnimatedReveal key={i} delay={i * 150}>
                  <div className="relative flex flex-col items-center text-center flex-1 px-4">
                    {/* Step circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#5b13ec] to-[#06b6d4] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#5b13ec]/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-base font-semibold text-gray-100 mb-2">{title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">{desc}</p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile + Tablet: vertical stepper */}
        <div className="lg:hidden">
          <div className="relative pl-8 sm:pl-12">
            {/* Vertical connector line */}
            <div className="absolute left-[15px] sm:left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-[#5b13ec] to-[#06b6d4] opacity-30" />

            <div className="space-y-10">
              {process.map((step, i) => {
                const title = locale === 'en' && step.titleEn ? step.titleEn : step.title;
                const desc = locale === 'en' && step.descEn ? step.descEn : step.desc;
                return (
                  <AnimatedReveal key={i} delay={i * 100}>
                    <div className="relative flex items-start gap-4 sm:gap-6">
                      {/* Step circle (positioned on the line) */}
                      <div className="absolute -left-8 sm:-left-12 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#5b13ec] to-[#06b6d4] flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg shadow-[#5b13ec]/20 flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="pt-0.5">
                        <h3 className="text-lg font-semibold text-gray-100 mb-1">{title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </AnimatedReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
