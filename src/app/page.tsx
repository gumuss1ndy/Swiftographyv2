import HeroSection from '@/components/ui/HeroSection';
import TSTeaser from '@/components/ui/TSTeaser';
import AboutSwiftography from '@/components/ui/AboutSwiftography';
import ContactSection from '@/components/ui/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TSTeaser />
      <AboutSwiftography />
      <ContactSection />
    </>
  );
}