
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const revealElements = document.querySelectorAll('.reveal, .reveal-fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-studio-cream -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1567225591450-06036b3392a6?q=80&w=2070')] bg-cover bg-center opacity-20 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fire Escape Art Studio</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover the heart and soul behind Oshkosh's favorite creative space
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-fade-up">
              <p className="text-lg mb-6">
                Fire Escape Art Studio was born from a passion for art and a desire to create a welcoming space where
                everyone in our community could explore their creativity without judgment or pressure.
              </p>
              <p className="text-lg mb-6">
                Since opening our doors, we've been dedicated to making art accessible to all ages and skill levels.
                Whether you're a seasoned artist or have never picked up a paintbrush before, our studio is designed
                to inspire and nurture your creative spirit.
              </p>
              <p className="text-lg mb-6">
                Our name "Fire Escape" represents both our location in a beautifully renovated historic building 
                and our belief that art provides an escape from the everyday - a place where you can relax, express
                yourself, and discover new talents.
              </p>
              <p className="text-lg font-medium text-studio-orange">
                We can't wait to see what you create!
              </p>
            </div>
            
            <div className="reveal">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1577490132119-02c30f616b43?q=80&w=2070"
                  alt="Studio Interior"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-studio-orange rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-studio-teal/30 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-teal/10 text-studio-teal text-sm font-medium mb-3">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl leading-relaxed">
              At Fire Escape Art Studio, our mission is to create a vibrant, welcoming space where art is accessible to all. 
              We strive to inspire creativity, build community connections, and provide opportunities for self-expression
              through high-quality art experiences that are fun, educational, and memorable.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-studio-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Fire Escape Art Studio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creativity For All",
                description: "We believe everyone has creative potential. Our studio welcomes artists of all ages, backgrounds, and skill levels.",
                color: "bg-studio-orange"
              },
              {
                title: "Community Connection",
                description: "Art brings people together. We foster a sense of belonging and connection through shared creative experiences.",
                color: "bg-studio-teal"
              },
              {
                title: "Quality Experience",
                description: "From our materials to our instruction, we're committed to providing the highest quality artistic experience possible.",
                color: "bg-studio-yellow"
              },
              {
                title: "Joyful Expression",
                description: "Creating should be fun! We emphasize the joy of making art over perfection or comparison.",
                color: "bg-studio-pink"
              },
              {
                title: "Supportive Environment",
                description: "Our studio is a judgment-free zone where everyone feels comfortable exploring and learning.",
                color: "bg-studio-orange"
              },
              {
                title: "Sustainable Practices",
                description: "We care about our environment and strive to use eco-friendly materials and processes whenever possible.",
                color: "bg-studio-teal"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="reveal-fade-up bg-white p-6 rounded-xl shadow-md card-hover-effect"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Artists</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people who make Fire Escape Art Studio a special place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Thompson",
                title: "Owner & Lead Instructor",
                bio: "Emma founded Fire Escape with a vision to create a welcoming space for artists of all levels. She specializes in pottery and painting.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
              },
              {
                name: "Michael Chen",
                title: "Ceramics Specialist",
                bio: "With over 15 years of experience in ceramics, Michael brings expert knowledge of wheel throwing and hand-building techniques.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974"
              },
              {
                name: "Sophia Garcia",
                title: "Paint & Canvas Instructor",
                bio: "Sophia's passion for color theory and composition makes her painting classes some of our most popular offerings.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976"
              },
            ].map((member, index) => (
              <div 
                key={index} 
                className="reveal-fade-up bg-white rounded-xl overflow-hidden shadow-md card-hover-effect"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-studio-orange font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-studio-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Come Create With Us!</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Now that you know a bit more about us, we'd love to welcome you to our studio.
            Whether you're looking for a fun activity, a new hobby, or a creative community,
            we can't wait to see what you'll create!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/classes" className="px-6 py-3 bg-white text-studio-orange rounded-lg shadow-md hover:bg-opacity-90 transition-all">
              View Our Classes
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
