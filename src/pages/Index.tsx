
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import TestimonialCard from '../components/TestimonialCard';
import { MapPin } from 'lucide-react';

const Index = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      testimonial: "My daughter's birthday party at Fire Escape was amazing! The staff was so helpful and the kids had a blast making their own pottery pieces.",
      rating: 5
    },
    {
      name: "David Miller",
      testimonial: "I had never tried pottery before, but the wheel throwing class was so well taught that I created something I'm actually proud of! Can't wait to go back.",
      rating: 5
    },
    {
      name: "Michelle Clark",
      testimonial: "Our company team building event was perfect. Creative, fun, and everyone loved their personalized mugs. Highly recommend for groups!",
      rating: 4
    }
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* About Section */}
      <section className="section-padding bg-studio-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="reveal-fade-up">
                <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Fire Escape Art Studio</h2>
                <p className="text-muted-foreground mb-4">
                  At Fire Escape Art Studio, we believe that everyone has creative potential just waiting to be
                  discovered. Our studio provides a welcoming environment where people of all ages and skill levels
                  can explore their artistic side through pottery, painting, and various art forms.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for a fun family activity, a unique date night, or a creative outlet to
                  call your own, we have something for everyone. Our experienced staff is always ready to guide
                  you through your creative journey.
                </p>
                <button className="px-6 py-3 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                  Learn More About Us
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=2070"
                  alt="Fire Escape Art Studio Interior"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-studio-teal rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-studio-yellow rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedSection />
      
      {/* Testimonials Section */}
      <section className="section-padding bg-studio-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the many happy artists who have created memories at our studio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're conveniently located in the heart of Oshkosh. Stop by and unleash your creativity!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-fade-up">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-studio-orange mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Fire Escape Art Studio</h3>
                    <p className="text-muted-foreground">
                      927 Oregon Street<br />
                      Oshkosh, Wisconsin 54902
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center">
                    <span className="font-medium w-24">Phone:</span>
                    <a href="tel:9202312224" className="text-studio-orange hover:underline">(920) 231-2224</a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">Email:</span>
                    <a href="mailto:info@fireescapeartstudio.com" className="text-studio-orange hover:underline">info@fireescapeartstudio.com</a>
                  </p>
                  <div className="flex items-start">
                    <span className="font-medium w-24">Hours:</span>
                    <div>
                      <p>Monday - Friday: 10am - 7pm</p>
                      <p>Saturday: 10am - 5pm</p>
                      <p>Sunday: 11am - 4pm</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=927+Oregon+Street,+Oshkosh,+Wisconsin+54902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-studio-orange text-center text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="rounded-xl overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.0259323868!2d-88.5496391!3d44.024835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803eb5d2fa9984f%3A0x78e3343723b51963!2s927%20Oregon%20St%2C%20Oshkosh%2C%20WI%2054902!5e0!3m2!1sen!2sus!4v1624456789012!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Fire Escape Art Studio Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-studio-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Unleash Your Creativity?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join us at Fire Escape Art Studio for a fun and creative experience that you'll never forget.
            No experience necessary - just bring your imagination!
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

export default Index;
