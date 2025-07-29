import { Link } from 'react-router-dom';
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-gray-100' : 'bg-transparent border-transparent'}`}
      style={{ WebkitBackdropFilter: isScrolled ? 'blur(12px)' : undefined, backdropFilter: isScrolled ? 'blur(12px)' : undefined }}
    >
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-pacifico text-blue-600">
            logo
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Solutions
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Team
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Get Started
            </button>
          </div>
          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link to="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Solutions
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Team
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-left whitespace-nowrap">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}