
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
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
  
  const galleryCategories = [
    {
      id: 'all',
      label: 'All Works',
    },
    {
      id: 'pottery',
      label: 'Pottery',
    },
    {
      id: 'paintings',
      label: 'Paintings',
    },
    {
      id: 'studio',
      label: 'Studio Life',
    }
  ];
  
  const galleryItems = [
    // Pottery
    {
      id: 1,
      title: 'Colorful Mugs',
      category: 'pottery',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2670',
      description: 'Handpainted ceramic mugs created in our studio by local artists.'
    },
    {
      id: 2,
      title: 'Decorated Bowls',
      category: 'pottery',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=2670',
      description: 'A collection of hand-painted bowls from our community pottery class.'
    },
    {
      id: 3,
      title: 'Ceramic Planters',
      category: 'pottery',
      image: 'https://images.unsplash.com/photo-1582902281043-63e741b12c16?q=80&w=2670',
      description: 'Custom planters designed during our weekend workshops.'
    },
    // Paintings
    {
      id: 4,
      title: 'Abstract Fluid Art',
      category: 'paintings',
      image: 'https://images.unsplash.com/photo-1576773689115-5cd2b0223523?q=80&w=2670',
      description: 'Beautiful abstract paintings created in our fluid art workshop.'
    },
    {
      id: 5,
      title: 'Canvas Paintings',
      category: 'paintings',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2670',
      description: 'Original canvas works from our painting night events.'
    },
    {
      id: 6,
      title: 'Watercolor Landscapes',
      category: 'paintings',
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2670',
      description: 'Serene landscapes created in our watercolor techniques class.'
    },
    // Studio Life
    {
      id: 7,
      title: 'Weekend Workshop',
      category: 'studio',
      image: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=2613',
      description: 'Students enjoying our weekend pottery workshop.'
    },
    {
      id: 8,
      title: 'Studio Space',
      category: 'studio',
      image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2670',
      description: 'Our bright and inviting studio space ready for creativity.'
    },
    {
      id: 9,
      title: 'Kids Art Class',
      category: 'studio',
      image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2670',
      description: 'Young artists exploring their creativity in our children\'s program.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-studio-cream">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620212797439-d7405b061dce?q=80&w=2676')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center reveal-fade-up">
              <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
                Our Gallery
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Creativity on Display</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore the amazing work created by our community of artists at Fire Escape Art Studio
              </p>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-studio-cream/50">
                  {galleryCategories.map(category => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="px-6 data-[state=active]:bg-studio-orange data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {galleryCategories.map(category => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems
                      .filter(item => category.id === 'all' || item.category === category.id)
                      .map((item, index) => (
                        <div 
                          key={item.id} 
                          className="reveal-fade-up bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-studio-orange">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Own Art?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Join us at Fire Escape Art Studio and add your masterpiece to our gallery!
              We offer classes, workshops, and open studio sessions for artists of all levels.
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
