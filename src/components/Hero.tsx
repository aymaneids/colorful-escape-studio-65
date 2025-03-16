
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603513617702-a40a9021dce7?q=80&w=2069')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-studio-black/50 to-studio-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10" ref={heroRef}>
        <div className="max-w-3xl reveal-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/20 text-studio-orange text-sm font-medium mb-4 animate-pulse-soft">
            Welcome to Oshkosh's Premier Art Studio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Fire Escape Art Studio
            <span className="block text-studio-orange mt-2">Unleash Your Creativity!</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Paint-Your-Own Pottery, Classes, Events, and More in Oshkosh, WI.
            Join us for a creative escape where art comes to life!
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/classes')}
              className="px-6 py-3 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all flex items-center group"
            >
              View Class Calendar
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button 
              onClick={() => navigate('/events')}
              className="px-6 py-3 bg-white text-studio-black rounded-lg shadow-md hover:bg-opacity-90 transition-all"
            >
              Book a Party
            </button>
            <button 
              onClick={() => navigate('/visit')}
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-all"
            >
              Visit Us
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-studio-offwhite to-transparent z-10"></div>
      <div className="absolute -bottom-5 right-10 w-20 h-20 rounded-full bg-studio-teal opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-studio-yellow opacity-20 animate-float"></div>
    </div>
  );
};

export default Hero;
