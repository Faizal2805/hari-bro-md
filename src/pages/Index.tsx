
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
