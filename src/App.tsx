
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import Header from "./components/Header";
import RecentWorks from "./components/RecentWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Display Header at the top */}
        <Header />
        {/* Display sections in the specified order, no routing */}
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <RecentWorks />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
