'use client';

import { useSyncExternalStore } from 'react';

export type Locale = 'ko' | 'en';

const translations: Record<Locale, Record<string, string>> = {
  ko: {
    'nav.home': '홈',
    'nav.services': '서비스',
    'nav.portfolio': '포트폴리오',
    'nav.process': '진행 방식',
    'nav.contact': '연락하기',
    'hero.cta': '서비스 보기',
    'services.title': '서비스',
    'portfolio.title': '포트폴리오',
    'portfolio.all': '전체',
    'testimonials.title': '고객 후기',
    'process.title': '진행 방식',
    'contact.title': '프로젝트 시작하기',
    'contact.desc': '새로운 프로젝트나 협업 제안은 언제든 환영합니다.',
    'contact.email': '이메일 보내기',
    'theme.light': '라이트 모드로 전환',
    'theme.dark': '다크 모드로 전환',
    'lang.switchLabel': 'Switch to English',
    'lang.toggle': 'EN',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'hero.cta': 'View Services',
    'services.title': 'Services',
    'portfolio.title': 'Portfolio',
    'portfolio.all': 'All',
    'testimonials.title': 'Testimonials',
    'process.title': 'How I Work',
    'contact.title': 'Start a Project',
    'contact.desc': 'Open to new projects and collaboration opportunities.',
    'contact.email': 'Send Email',
    'theme.light': 'Switch to light mode',
    'theme.dark': 'Switch to dark mode',
    'lang.switchLabel': '한국어로 전환',
    'lang.toggle': '한국어',
  },
};

let _locale: Locale = 'ko';
const _listeners = new Set<() => void>();
function subscribe(cb: () => void) { _listeners.add(cb); return () => { _listeners.delete(cb); }; }
function getSnapshot() { return _locale; }
function getServerSnapshot() { return 'ko' as Locale; }

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('locale');
  if (saved === 'ko' || saved === 'en') { _locale = saved; document.documentElement.lang = saved; }
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLocale = (l: Locale) => {
    _locale = l;
    localStorage.setItem('locale', l);
    document.documentElement.lang = l;
    _listeners.forEach((cb) => cb());
  };
  const t = (key: string) => translations[locale]?.[key] ?? key;
  return { locale, setLocale, t };
}
