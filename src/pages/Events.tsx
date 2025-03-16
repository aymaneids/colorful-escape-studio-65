
import React from 'react';
import { Cake, Users, Heart, Briefcase, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const eventTypes = [
    {
      title: 'Birthday Parties',
      description: 'Celebrate your special day with a fun and creative party at Fire Escape! Perfect for all ages.',
      icon: <Cake size={32} className="text-studio-orange" />,
      image: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=2070',
      features: [
        'Private party room for 2 hours',
        'Paint-your-own pottery for all guests',
        'Dedicated party host',
        'Setup and cleanup included',
        'Bring your own cake and refreshments'
      ],
      pricing: 'Starting at $22 per person (minimum 8 guests)'
    },
    {
      title: 'Group Events',
      description: 'Looking for a fun and engaging activity for your group? Book a private event at Fire Escape!',
      icon: <Users size={32} className="text-studio-teal" />,
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070',
      features: [
        'Flexible scheduling options',
        'Customizable experience for your group',
        'Multiple activity options available',
        'Perfect for clubs, youth groups, and teams',
        'Accommodations for groups of all sizes'
      ],
      pricing: 'Custom pricing based on group size and activities'
    },
    {
      title: 'Bridal Showers',
      description: 'Give the bride-to-be a unique and memorable shower with a creative twist!',
      icon: <Heart size={32} className="text-studio-pink" />,
      image: 'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?q=80&w=2070',
      features: [
        'Private studio space',
        'Special bride gift',
        'Custom pottery options',
        'Photo opportunities',
        'Bring your own food and beverages'
      ],
      pricing: 'Starting at $28 per person'
    },
    {
      title: 'Corporate Team Building',
      description: 'Build team spirit and foster creativity with a corporate event at Fire Escape.',
      icon: <Briefcase size={32} className="text-studio-yellow" />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
      features: [
        'Guided team building activities',
        'Customizable to meet your goals',
        'Private studio rental',
        'Catering options available',
        'Flexible scheduling for work hours'
      ],
      pricing: 'Custom quotes based on group size and activity options'
    }
  ];

  const testimonials = [
    {
      name: "Melissa R.",
      testimonial: "We had my daughter's 10th birthday at Fire Escape and it was amazing! The staff was so helpful and patient with all the kids. Everyone had a blast and created beautiful keepsakes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922"
    },
    {
      name: "James T.",
      testimonial: "Our team building event at Fire Escape was a huge success! It was such a refreshing change from our usual corporate activities. Our team is still talking about it months later!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974"
    },
    {
      name: "Emily S.",
      testimonial: "I hosted my sister's bridal shower at Fire Escape, and it was perfect! Everyone enjoyed the creative activity, and my sister loved having unique keepsakes from her special day.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587377838666-cc876a7c5290?q=80&w=2070')] bg-cover bg-center bg-no-repeat opacity-20"></div>
          <div className="relative z-10 py-20 px-6 md:px-12 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Private Events
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Book a Party or Event</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Create memorable experiences with friends, family, or colleagues at Fire Escape Art Studio.
              Our private events are perfect for birthdays, team building, bridal showers, and more!
            </p>
            <Button size="lg" className="bg-studio-orange hover:bg-studio-orange/90">
              Request Booking Information
            </Button>
          </div>
        </div>

        {/* Event Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <div key={index} className="reveal-fade-up bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-full">
                  {event.icon}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <h3 className="text-lg font-medium mb-2">What's Included:</h3>
                <ul className="space-y-2 mb-4">
                  {event.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-studio-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-studio-cream/50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Pricing: {event.pricing}</p>
                </div>
                
                <Button className="w-full bg-studio-orange hover:bg-studio-orange/90">
                  Book Your {event.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
                Get Started
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Request Event Information</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form to receive detailed information about our event options, 
                pricing, and availability. Our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    placeholder="(920) 555-1234"
                  />
                </div>
                
                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                  >
                    <option value="">Select Event Type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="bridal">Bridal Shower</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="group">Group Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    placeholder="Please share any details about your event, preferred dates, number of guests, etc."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-studio-orange hover:bg-studio-orange/90">
                  Submit Request
                </Button>
              </form>
            </div>
            
            <div className="bg-studio-cream hidden lg:block">
              <div className="h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1581579438747-104c53d7bdfb?q=80&w=2070"
                  alt="People enjoying an event at Fire Escape Art Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-studio-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-studio-offwhite rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our Guests Say</h2>
            <p className="text-gray-600">Read about the experiences of others who have hosted events with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md reveal-fade-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
