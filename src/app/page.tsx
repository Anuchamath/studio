import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CategoryGridSection } from '@/components/sections/CategoryGridSection';
import { RulesInfoSection } from '@/components/sections/RulesInfoSection';
import { AiToolShowcaseSection } from '@/components/sections/AiToolShowcaseSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategoryGridSection />
        <RulesInfoSection />
        <AiToolShowcaseSection />
      </main>
      <Footer />
    </div>
  );
}
