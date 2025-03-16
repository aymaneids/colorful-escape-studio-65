
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Filter, Search } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ClassCard from '@/components/ClassCard';
import { format } from 'date-fns';

const Classes = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sample class data - in a real app, this would come from an API
  const classes = [
    {
      id: 1,
      title: 'Wheel Throwing for Beginners',
      description: 'Learn the basics of working with the pottery wheel and create your first piece!',
      date: 'June 15, 2023',
      time: '6:00 PM - 8:30 PM',
      price: 65,
      instructor: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1603513617702-a40a9021dce7?q=80&w=2069',
      category: 'Pottery',
    },
    {
      id: 2,
      title: 'Fluid Art Workshop',
      description: 'Explore the exciting world of fluid art and create beautiful, abstract pieces using acrylic pouring techniques.',
      date: 'June 18, 2023',
      time: '2:00 PM - 4:00 PM',
      price: 45,
      instructor: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1579541591970-e5cf2c978389?q=80&w=2069',
      category: 'Painting',
    },
    {
      id: 3,
      title: 'Kids Clay Adventure',
      description: 'A fun class for kids ages 7-12 to explore clay handbuilding techniques and create a special keepsake.',
      date: 'June 20, 2023',
      time: '10:00 AM - 12:00 PM',
      price: 35,
      instructor: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1632276542571-68c0e9f48226?q=80&w=2069',
      category: 'Kids',
    },
    {
      id: 4,
      title: 'Ceramic Mug Workshop',
      description: 'Design and create your own ceramic mug using handbuilding techniques. Perfect for beginners!',
      date: 'June 22, 2023',
      time: '6:30 PM - 9:00 PM',
      price: 55,
      instructor: 'David Miller',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070',
      category: 'Pottery',
    },
    {
      id: 5,
      title: 'Watercolor Basics',
      description: 'Learn fundamental watercolor techniques and create a beautiful landscape painting.',
      date: 'June 25, 2023',
      time: '1:00 PM - 3:30 PM',
      price: 50,
      instructor: 'Lisa Wong',
      image: 'https://images.unsplash.com/photo-1576053139778-7e32f2f3e9a2?q=80&w=2070',
      category: 'Painting',
    },
    {
      id: 6,
      title: 'Family Clay Day',
      description: 'A special workshop for families to create pottery together. Suitable for all ages!',
      date: 'June 27, 2023',
      time: '11:00 AM - 1:30 PM',
      price: 40,
      instructor: 'James Thompson',
      image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=2074',
      category: 'Family',
    },
  ];

  // Filter classes based on search term, selected date, and category
  const filteredClasses = classes.filter(cls => {
    const matchesSearch = cls.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cls.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? cls.category === selectedCategory : true;
    
    // If a date is selected, filter by date (simplified for demo - would need proper date comparison in real app)
    const matchesDate = date ? cls.date.includes(format(date, 'MMMM d, yyyy')) : true;
    
    return matchesSearch && matchesCategory && matchesDate;
  });

  const categories = ['Pottery', 'Painting', 'Kids', 'Family'];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
            Classes & Workshops
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Class Calendar</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover and book our diverse range of creative classes and workshops. 
            Perfect for all ages and skill levels!
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search classes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Date Picker */}
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Category Filter */}
            <div className="space-y-2">
              <div className="flex items-center justify-start mb-3">
                <Filter size={18} className="mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by Category</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className={cn(
                    "px-3 py-1 text-sm rounded-full border border-gray-200 hover:bg-studio-orange/10 transition-colors",
                    selectedCategory === null ? "bg-studio-orange text-white border-studio-orange" : ""
                  )}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={cn(
                      "px-3 py-1 text-sm rounded-full border border-gray-200 hover:bg-studio-orange/10 transition-colors",
                      selectedCategory === category ? "bg-studio-orange text-white border-studio-orange" : ""
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Clear Filters Button */}
          {(date || searchTerm || selectedCategory) && (
            <div className="mt-4 flex justify-end">
              <button
                className="text-sm text-studio-orange hover:underline"
                onClick={() => {
                  setDate(undefined);
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Classes Grid */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls, index) => (
              <ClassCard
                key={cls.id}
                title={cls.title}
                description={cls.description}
                date={cls.date}
                time={cls.time}
                price={cls.price}
                instructor={cls.instructor}
                image={cls.image}
                category={cls.category}
                delay={index * 50}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No classes found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms.</p>
            <Button onClick={() => {
              setDate(undefined);
              setSearchTerm('');
              setSelectedCategory(null);
            }}>
              View All Classes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classes;
