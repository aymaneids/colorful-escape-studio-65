
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  rating: number;
  image?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  testimonial, 
  rating, 
  image, 
  delay = 0 
}) => {
  return (
    <div 
      className="reveal-fade-up bg-white p-6 rounded-xl shadow-md card-hover-effect"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        {image ? (
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
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
      <p className="text-muted-foreground italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
