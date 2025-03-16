
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  rating: number;
  image?: string;
  delay?: number;
  variant?: 'default' | 'outlined' | 'filled';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  testimonial, 
  rating, 
  image, 
  delay = 0,
  variant = 'default'
}) => {
  return (
    <div 
      className={cn(
        "reveal-fade-up p-6 rounded-xl shadow-md transition-all duration-300 card-hover-effect",
        {
          'bg-white': variant === 'default',
          'bg-white border-2 border-studio-orange/20': variant === 'outlined',
          'bg-studio-cream': variant === 'filled',
        }
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-studio-orange/20 w-8 h-8" />
        <p className="text-muted-foreground italic mb-6 pt-4 px-2">"{testimonial}"</p>
      </div>
      
      <div className="flex items-center mt-4">
        {image ? (
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-studio-orange/20">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="h-12 w-12 rounded-full bg-studio-orange/20 flex items-center justify-center mr-4">
            <span className="text-studio-orange font-medium text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < rating ? "text-studio-yellow fill-studio-yellow" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
