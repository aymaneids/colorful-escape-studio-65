
import React from 'react';
import { Calendar, Clock, DollarSign, User } from 'lucide-react';

interface ClassCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  price: number;
  instructor: string;
  image: string;
  category: string;
  delay?: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ 
  title, 
  description, 
  date, 
  time, 
  price, 
  instructor, 
  image,
  category,
  delay = 0 
}) => {
  return (
    <div 
      className="reveal-fade-up bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="py-1 px-3 rounded-full text-xs font-medium bg-studio-orange/90 text-white">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-studio-orange" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-studio-orange" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <User className="w-4 h-4 mr-2 text-studio-orange" />
            <span>{instructor}</span>
          </div>
          <div className="flex items-center text-sm">
            <DollarSign className="w-4 h-4 mr-2 text-studio-orange" />
            <span>${price}</span>
          </div>
        </div>
        
        <button className="w-full py-2 bg-studio-teal text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
