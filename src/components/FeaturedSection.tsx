
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paintbrush, Users, CalendarClock, ArrowRight } from 'lucide-react';

const FeaturedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
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

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const features = [
    {
      title: "Paint-Your-Own Pottery",
      description: "Choose from our wide selection of bisque pottery pieces and unleash your creativity with our vibrant glazes.",
      icon: <Paintbrush className="w-8 h-8 text-studio-orange" />,
      action: () => navigate('/info'),
      image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=2070"
    },
    {
      title: "Classes & Workshops",
      description: "From wheel throwing to fluid art, our expert-led classes cater to all ages and skill levels.",
      icon: <CalendarClock className="w-8 h-8 text-studio-teal" />,
      action: () => navigate('/classes'),
      image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=2069"
    },
    {
      title: "Private Parties & Events",
      description: "Celebrate birthdays, team building, or special occasions with a personalized creative experience.",
      icon: <Users className="w-8 h-8 text-studio-yellow" />,
      action: () => navigate('/events'),
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070"
    }
  ];

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Activities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of creative experiences designed for artists of all ages and abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card reveal-fade-up bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-studio-cream">{feature.icon}</div>
                  <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <button 
                  onClick={feature.action}
                  className="inline-flex items-center text-studio-orange hover:text-studio-teal font-medium group"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
