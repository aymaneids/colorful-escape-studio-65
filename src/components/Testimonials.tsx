
import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  name: string;
  testimonial: string;
  rating: number;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: 'default' | 'outlined' | 'filled';
}

const Testimonials: React.FC<TestimonialsProps> = ({ 
  title = "What Our Customers Say",
  subtitle = "Don't just take our word for it - hear from our community of artists!",
  testimonials,
  variant = 'default'
}) => {
  return (
    <section className="py-16 bg-studio-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              image={testimonial.image}
              delay={index * 100}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
