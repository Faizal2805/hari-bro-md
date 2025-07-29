import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for smooth scroll
  const scrollToSection = (id) => {
    // Normalize id for sections like recentworks and testimonials
    let el = document.getElementById(id);
    if (!el) {
      // Try with hyphenated id (recent-works, testimonials-section)
      el = document.getElementById(id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());
    }
    if (!el) {
      // Try with plural/singular
      if (id === 'recentworks') el = document.getElementById('recent-works');
      if (id === 'testimonials') el = document.getElementById('testimonials-section');
    }
    if (!el) {
      el = document.querySelector(`[data-section="${id}"]`);
    }
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-gray-100' : 'bg-transparent border-transparent'}`}
      style={{ WebkitBackdropFilter: isScrolled ? 'blur(12px)' : undefined, backdropFilter: isScrolled ? 'blur(12px)' : undefined }}
    >
      <nav className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-pacifico text-blue-600 cursor-pointer" onClick={() => scrollToSection('home')}>
            logo
          </span>
          <div className="hidden md:flex items-center space-x-6">
            <span onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Home</span>
            <span onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Services</span>
            <span onClick={() => scrollToSection('recentworks')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Recent Works</span>
            <span onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Testimonials</span>
            <span onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">Contact</span>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap" onClick={() => scrollToSection('contact')}>Get Started</button>
          </div>
          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white/95 flex flex-col justify-center items-center space-y-8 transition-all duration-300">
            <span onClick={() => scrollToSection('home')} className="text-2xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-semibold">Home</span>
            <span onClick={() => scrollToSection('services')} className="text-2xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-semibold">Services</span>
            <span onClick={() => scrollToSection('recentworks')} className="text-2xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-semibold">Recent Works</span>
            <span onClick={() => scrollToSection('testimonials')} className="text-2xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-semibold">Testimonials</span>
            <span onClick={() => scrollToSection('contact')} className="text-2xl text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-semibold">Contact</span>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center text-xl whitespace-nowrap w-3/4" onClick={() => scrollToSection('contact')}>Get Started</button>
            <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-600 text-3xl" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">&times;</button>
          </div>
        )}
      </nav>
    </header>
  );
}
