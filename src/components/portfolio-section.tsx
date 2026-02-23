'use client';

import { useState, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import type { PortfolioItem } from '@/lib/config';
import { useLocale } from '@/lib/i18n';
import { AnimatedReveal } from './animated-reveal';

interface Props {
  portfolio: PortfolioItem[];
}

export function PortfolioSection({ portfolio }: Props) {
  const { locale, t } = useLocale();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [lightboxItem, setLightboxItem] = useState<{ src: string; alt: string; desc: string } | null>(null);
  const categories = ['all', ...new Set(portfolio.map((p) => locale === 'en' && p.categoryEn ? p.categoryEn : p.category))];
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? portfolio
    : portfolio.filter((p) => {
        const cat = locale === 'en' && p.categoryEn ? p.categoryEn : p.category;
        return cat === activeCategory;
      });

  const openLightbox = useCallback((src: string, alt: string, desc: string) => {
    setLightboxItem({ src, alt, desc });
    dialogRef.current?.showModal();
  }, []);

  const closeLightbox = useCallback(() => {
    dialogRef.current?.close();
    setLightboxItem(null);
  }, []);

  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedReveal>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#5b13ec] to-[#06b6d4] bg-clip-text text-transparent">
            {t('portfolio.title')}
          </h2>
        </AnimatedReveal>

        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                activeCategory === cat
                  ? 'bg-[#5b13ec] text-white'
                  : 'text-gray-400 border border-white/10 hover:text-white'
              }`}
            >
              {cat === 'all' ? t('portfolio.all') : cat}
            </button>
          ))}
        </div>

        <div key={activeCategory} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
          {filtered.map((item, i) => {
            const title = locale === 'en' && item.titleEn ? item.titleEn : item.title;
            const desc = locale === 'en' && item.descEn ? item.descEn : item.desc;
            return (
              <AnimatedReveal key={i} delay={i * 50}>
                <div
                  className="group rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] cursor-pointer"
                  onClick={() => openLightbox(item.imageUrl, title, desc)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex gap-1.5 flex-wrap">
                        {item.tags.map((tag, j) => (
                          <span key={j} className="px-2 py-0.5 rounded-full text-xs bg-white/20 text-white backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-100 mb-1">{title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{desc}</p>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox dialog */}
      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={(e) => { if (e.target === dialogRef.current) closeLightbox(); }}
        onKeyDown={(e) => { if (e.key === 'Escape') closeLightbox(); }}
      >
        {lightboxItem && (
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              className="rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
              <h3 className="text-white font-semibold">{lightboxItem.alt}</h3>
              <p className="text-gray-300 text-sm mt-1">{lightboxItem.desc}</p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
