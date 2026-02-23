'use client';

import { Palette, Package, Image, Layout, Zap, Component, type LucideIcon } from 'lucide-react';
import type { ServiceItem } from '@/lib/config';
import { useLocale } from '@/lib/i18n';
import { AnimatedReveal } from './animated-reveal';

const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  package: Package,
  image: Image,
  layout: Layout,
  zap: Zap,
  component: Component,
};

interface Props {
  services: ServiceItem[];
}

export function ServicesSection({ services }: Props) {
  const { locale, t } = useLocale();

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedReveal>
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
        </AnimatedReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Palette;
            const title = locale === 'en' && service.titleEn ? service.titleEn : service.title;
            const desc = locale === 'en' && service.descEn ? service.descEn : service.desc;
            const price = locale === 'en' && service.priceEn ? service.priceEn : service.price;
            return (
              <AnimatedReveal key={i} delay={i * 100}>
                <div
                  className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm group overflow-hidden"
                  style={{ transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(91,19,236,0.4)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(91,19,236,0.1), inset 0 0 20px rgba(6,182,212,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5b13ec]/20 to-[#06b6d4]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[#5b13ec]" />
                    </div>
                    <span className="text-sm font-semibold text-[#06b6d4]">{price}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
