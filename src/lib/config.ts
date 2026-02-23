export interface ServiceItem {
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
  price: string;
  priceEn?: string;
  icon: string;
}

export interface PortfolioItem {
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  desc: string;
  descEn?: string;
  imageUrl: string;
  tags: string[];
}

export interface TestimonialItem {
  author: string;
  authorEn?: string;
  role: string;
  roleEn?: string;
  company: string;
  companyEn?: string;
  content: string;
  contentEn?: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

const DEMO_SERVICES: ServiceItem[] = [
  {
    title: '\uBE0C\uB79C\uB4DC \uC544\uC774\uB374\uD2F0\uD2F0',
    titleEn: 'Brand Identity',
    desc: '\uB85C\uACE0\uBD80\uD130 \uCEEC\uB7EC \uD314\uB808\uD2B8, \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uAE4C\uC9C0 \u2014 \uBE0C\uB79C\uB4DC\uC758 \uCCAB\uC778\uC0C1\uC744 \uC644\uC131\uD569\uB2C8\uB2E4.',
    descEn: "From logo to color palette and typography \u2014 creating your brand's first impression.",
    price: '\u20A9350\uB9CC ~',
    priceEn: 'From $2,600',
    icon: 'palette',
  },
  {
    title: '\uD328\uD0A4\uC9C0 \uB514\uC790\uC778',
    titleEn: 'Packaging Design',
    desc: '\uC18C\uBE44\uC790\uC758 \uC190\uC5D0 \uB2FF\uB294 \uC21C\uAC04 \uBE0C\uB79C\uB4DC\uB97C \uB290\uAF3C\uAC8C \uB9CC\uB4DC\uB294 \uD328\uD0A4\uC9C0 \uB514\uC790\uC778.',
    descEn: 'Packaging that makes consumers feel the brand the moment they touch it.',
    price: '\u20A9180\uB9CC ~',
    priceEn: 'From $1,300',
    icon: 'package',
  },
  {
    title: '\uC18C\uC15C \uBBF8\uB514\uC5B4 \uD0A4\uD2B8',
    titleEn: 'Social Media Kit',
    desc: '\uC778\uC2A4\uD0C0, \uC720\uD29C\uBE0C, \uB9C1\uD06C\uB4DC\uC778\uC5D0 \uBC14\uB85C \uC4F8 \uC218 \uC788\uB294 \uC77C\uAD00\uB41C \uBE44\uC8FC\uC5BC \uD0A4\uD2B8.',
    descEn: 'Consistent visual kit ready to use on Instagram, YouTube, and LinkedIn.',
    price: '\u20A980\uB9CC ~',
    priceEn: 'From $600',
    icon: 'image',
  },
];

const DEMO_PORTFOLIO: PortfolioItem[] = [
  {
    title: '\uD558\uB8E8\uB9C8 \uCEE4\uD53C \uB9AC\uBE0C\uB79C\uB529',
    titleEn: 'Haruma Coffee Rebranding',
    category: '\uBE0C\uB79C\uB4DC \uC544\uC774\uB374\uD2F0\uD2F0',
    categoryEn: 'Brand Identity',
    desc: '\uC131\uC218 \uC2A4\uD398\uC15C\uD2F0 \uCE74\uD398\uC758 \uBE0C\uB79C\uB4DC \uC804\uBA74 \uAC1C\uD3B8.',
    descEn: 'Complete brand overhaul for a Seongsu specialty cafe.',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600',
    tags: ['\uB85C\uACE0', '\uD328\uD0A4\uC9C0', '\uBE0C\uB79C\uB529'],
  },
  {
    title: 'NILE \uC2A4\uD0A8\uCF00\uC5B4 \uD328\uD0A4\uC9C0',
    titleEn: 'NILE Skincare Packaging',
    category: '\uD328\uD0A4\uC9C0 \uB514\uC790\uC778',
    categoryEn: 'Packaging Design',
    desc: '\uBBF8\uB2C8\uBA40 \uB7ED\uC154\uB9AC \uCEE8\uC149\uC758 \uC2A4\uD0A8\uCF00\uC5B4 \uB77C\uC778 \uD328\uD0A4\uC9C0 \uB514\uC790\uC778.',
    descEn: 'Minimal-luxury skincare packaging that secured retail placement post-launch.',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600',
    tags: ['\uD328\uD0A4\uC9C0', '\uB7ED\uC154\uB9AC', '\uBDF0\uD2F0'],
  },
  {
    title: '\uADF8\uB9B0\uC6E8\uC774 \uBE44\uC601\uB9AC \uC18C\uC15C \uD0A4\uD2B8',
    titleEn: 'Greenway NGO Social Kit',
    category: '\uC18C\uC15C \uBBF8\uB514\uC5B4 \uD0A4\uD2B8',
    categoryEn: 'Social Media Kit',
    desc: '\uD658\uACBD \uBE44\uC601\uB9AC \uB2E8\uCCB4\uC758 \uCEA0\uD398\uC778 \uBE44\uC8FC\uC5BC \uC81C\uC791.',
    descEn: 'Campaign visuals for an environmental NGO.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    tags: ['\uC18C\uC15C', 'NGO', '\uD658\uACBD'],
  },
];

const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    author: '\uAC15\uBBFC\uC900',
    authorEn: 'Minjun Kang',
    role: '\uB300\uD45C',
    roleEn: 'CEO',
    company: '\uD558\uB8E8\uB9C8 \uCEE4\uD53C',
    companyEn: 'Haruma Coffee',
    content: '\uBE0C\uB79C\uB4DC \uBC29\uD5A5\uC744 \uC81C\uB300\uB85C \uC7A1\uC544\uC8FC\uC168\uC5B4\uC694. \uCC98\uC74C \uBBF8\uD305\uBD80\uD130 \uCD5C\uC885 \uC2DC\uC548\uAE4C\uC9C0 \uAD70\uB354\uB354\uAE30 \uC5C6\uC774 \uB531 \uC6D0\uD558\uB294 \uAC78 \uBF51\uC544\uC8FC\uC154\uC11C \uC815\uB9D0 \uB9CC\uC871\uD569\uB2C8\uB2E4.',
    contentEn: 'She nailed our brand direction exactly. From the first meeting to the final mockup, she delivered precisely what we wanted.',
    rating: 5,
  },
  {
    author: '\uC774\uC218\uC9C4',
    authorEn: 'Sujin Lee',
    role: '\uB9C8\uCF00\uD305 \uB9E4\uB2C8\uC800',
    roleEn: 'Marketing Manager',
    company: 'NILE \uC2A4\uD0A8\uCF00\uC5B4',
    companyEn: 'NILE Skincare',
    content: '\uD328\uD0A4\uC9C0 \uD558\uB098\uB85C \uBE0C\uB79C\uB4DC \uAC00\uCE58\uAC00 \uB2EC\uB77C\uC9C0\uB294 \uAC78 \uC9C1\uC811 \uACBD\uD5D8\uD588\uC5B4\uC694.',
    contentEn: "We literally saw our brand perception change with one packaging redesign.",
    rating: 5,
  },
];

const DEMO_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: '\uD0A5\uC624\uD504 \uBBF8\uD305',
    titleEn: 'Kickoff Meeting',
    desc: '\uBE0C\uB9AC\uD504 \uACF5\uC720, \uB808\uD37C\uB7F0\uC2A4 \uC218\uC9D1, \uBC29\uD5A5\uC131 \uD569\uC758.',
    descEn: 'Share brief, gather references, align on direction.',
  },
  {
    number: '02',
    title: '\uCF58\uC149\uD2B8 \uC81C\uC548',
    titleEn: 'Concept Proposal',
    desc: '3\uAC00\uC9C0 \uBC29\uD5A5\uC758 \uBB34\uB4DC\uBCF4\uB4DC\uC640 \uCD08\uC548 \uC81C\uC2DC.',
    descEn: '3 moodboard directions + first draft.',
  },
  {
    number: '03',
    title: '\uC2DC\uC548 \uD655\uC815',
    titleEn: 'Design Finalization',
    desc: '\uC120\uD0DD\uB41C \uBC29\uD5A5\uC73C\uB85C \uC644\uC131\uB3C4\uB97C \uB192\uC785\uB2C8\uB2E4.',
    descEn: 'Polish the chosen direction. Unlimited minor revisions.',
  },
  {
    number: '04',
    title: '\uCD5C\uC885 \uB0A9\uD488',
    titleEn: 'Final Delivery',
    desc: 'AI, PNG, PDF \uB4F1 \uD544\uC694\uD55C \uBAA8\uB4E0 \uD3EC\uB9F7\uC73C\uB85C \uB0A9\uD488.',
    descEn: 'Delivery in all needed formats + brand guideline document.',
  },
];

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '\uC815\uD558\uC740',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Haeun Jung',
  title: process.env.NEXT_PUBLIC_TITLE || '\uADF8\uB798\uD53D \uB514\uC790\uC774\uB108',
  titleEn: process.env.NEXT_PUBLIC_TITLE_EN || 'Graphic Designer',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || '\uBE0C\uB79C\uB4DC\uC758 \uC774\uC57C\uAE30\uB97C \uC2DC\uAC01\uC73C\uB85C \uD480\uC5B4\uB0B4\uB294 \uADF8\uB798\uD53D \uB514\uC790\uC774\uB108',
  taglineEn: process.env.NEXT_PUBLIC_TAGLINE_EN || 'Graphic designer who tells brand stories through visuals',
  avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL || null,
  services: parseJSON<ServiceItem[]>(process.env.NEXT_PUBLIC_SERVICES, DEMO_SERVICES),
  portfolio: parseJSON<PortfolioItem[]>(process.env.NEXT_PUBLIC_PORTFOLIO, DEMO_PORTFOLIO),
  testimonials: parseJSON<TestimonialItem[]>(process.env.NEXT_PUBLIC_TESTIMONIALS, DEMO_TESTIMONIALS),
  process: parseJSON<ProcessStep[]>(process.env.NEXT_PUBLIC_PROCESS, DEMO_PROCESS),
  email: process.env.NEXT_PUBLIC_EMAIL || 'haeun@jung-design.kr',
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, [
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
  ]),
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
