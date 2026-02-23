import { siteConfig } from '@/lib/config';
import { NavHeader } from '@/components/nav-header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ProcessSection } from '@/components/process-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroSection config={siteConfig} />
        <ServicesSection services={siteConfig.services} />
        <PortfolioSection portfolio={siteConfig.portfolio} />
        {siteConfig.testimonials.length > 0 && (
          <TestimonialsSection testimonials={siteConfig.testimonials} />
        )}
        <ProcessSection process={siteConfig.process} />
        <ContactSection config={siteConfig} />
      </main>
      <Footer />
    </>
  );
}
