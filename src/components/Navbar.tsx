
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Classes', path: '/classes' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Gift Certificates', path: '/gift-certificates' },
    { label: 'Community', path: '/community' },
    { label: 'Info', path: '/info' },
  ];

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-studio-orange">Fire Escape</span>
          <span className="text-xl font-medium text-studio-black">Art Studio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-studio-orange relative',
                location.pathname === link.path ? 'text-studio-orange' : 'text-studio-black',
                'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-studio-orange after:transition-all after:duration-300',
                location.pathname === link.path ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-studio-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        'fixed inset-0 bg-white z-40 pt-24 pb-6 px-4 flex flex-col transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                'text-base font-medium transition-colors',
                location.pathname === link.path ? 'text-studio-orange' : 'text-studio-black'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-3 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all w-full text-center mt-4"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
