
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Calendar, Gift, Users, Image, Info, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

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

  // If mobile menu is open, prevent scrolling
  useEffect(() => {
    if (isMobile) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  const navLinks = [
    { label: 'Home', path: '/', icon: <Home size={18} /> },
    { label: 'About', path: '/about', icon: <Info size={18} /> },
    { label: 'Events', path: '/events', icon: <Users size={18} /> },
    { label: 'Classes', path: '/classes', icon: <Calendar size={18} /> },
    { label: 'Gallery', path: '/gallery', icon: <Image size={18} /> },
    { label: 'Gift Certificates', path: '/gift-certificates', icon: <Gift size={18} /> },
  ];

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 z-50">
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
          <Link 
            to="/visit#contact" 
            className="px-4 py-2 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-studio-black focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        'fixed inset-0 bg-white z-40 pt-24 pb-6 px-6 flex flex-col transition-transform duration-300 ease-in-out md:hidden overflow-y-auto',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                'flex items-center py-3 border-b border-gray-100 text-base font-medium transition-colors',
                location.pathname === link.path ? 'text-studio-orange' : 'text-studio-black'
              )}
            >
              <span className="mr-3">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Quick Info for Mobile */}
        <div className="mt-8 space-y-6">
          <h3 className="text-lg font-semibold mb-3">Contact & Visit</h3>
          
          <Link 
            to="/visit" 
            className="flex items-center text-studio-black hover:text-studio-orange"
          >
            <MapPin className="mr-3" size={18} />
            <div>
              <p className="font-medium">Our Location</p>
              <p className="text-sm text-muted-foreground">927 Oregon St, Oshkosh, WI</p>
            </div>
          </Link>
          
          <a 
            href="tel:9202312224" 
            className="flex items-center text-studio-black hover:text-studio-orange"
          >
            <Phone className="mr-3" size={18} />
            <div>
              <p className="font-medium">Call Us</p>
              <p className="text-sm text-muted-foreground">(920) 231-2224</p>
            </div>
          </a>
          
          <Link 
            to="/visit#contact" 
            className="w-full py-3 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all text-center mt-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
