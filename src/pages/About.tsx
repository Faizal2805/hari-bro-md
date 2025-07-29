
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <AboutSection />
      </main>
    </div>
  );
};

export default About;
