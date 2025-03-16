
import React, { useEffect } from 'react';
import { Calendar, Users, Clock, DollarSign, Sparkles, Cake, Building2, GlassWater } from 'lucide-react';

const Events = () => {
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

  const eventTypes = [
    {
      title: "Birthday Parties",
      description: "Make your birthday celebration uniquely creative and memorable with a pottery painting party! Perfect for kids and adults alike.",
      icon: <Cake className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070"
    },
    {
      title: "Corporate Events",
      description: "Build team spirit and boost creativity with a hands-on art experience. Great for team building, client appreciation, or holiday parties.",
      icon: <Building2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074"
    },
    {
      title: "Bridal Showers",
      description: "Give the bride-to-be a unique pre-wedding celebration where guests can create personalized gifts or keepsakes.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070"
    },
    {
      title: "Ladies Night Out",
      description: "Gather your friends for an evening of creativity, conversation, and relaxation. BYOB welcome for adult events!",
      icon: <GlassWater className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2075"
    }
  ];

  const packages = [
    {
      title: "Basic Party Package",
      price: 20,
      perPerson: true,
      minPeople: 8,
      features: [
        "2-hour studio reservation",
        "Pottery piece (up to $16 value)",
        "All painting supplies",
        "Instruction and assistance",
        "Glazing and firing",
        "Optional add-ons available"
      ]
    },
    {
      title: "Premium Party Package",
      price: 30,
      perPerson: true,
      minPeople: 8,
      features: [
        "3-hour studio reservation",
        "Pottery piece (up to $24 value)",
        "All painting supplies",
        "Dedicated party host",
        "Glazing and firing",
        "Personalized party banner",
        "Digital invitations",
        "Paper goods (plates, cups, napkins)"
      ]
    },
    {
      title: "Private Studio Rental",
      price: 250,
      perPerson: false,
      duration: "3 hours",
      features: [
        "Exclusive use of entire studio",
        "Up to 20 guests",
        "Pottery pieces priced separately",
        "All painting supplies",
        "Glazing and firing",
        "Setup and cleanup",
        "Bring your own refreshments",
        "Additional time available"
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533228705496-072ca298b122?q=80&w=2070')] bg-cover bg-center bg-no-repeat -z-10"></div>
        <div className="absolute inset-0 bg-studio-black/50 -z-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange text-white text-sm font-medium mb-3">
              Host Your Event With Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Party & Events at Fire Escape
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Create unforgettable memories with a unique creative experience for birthdays,
              bridal showers, corporate events, and more. Our art studio provides the perfect setting
              for parties of all kinds!
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#packages" 
                className="px-6 py-3 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all"
              >
                View Packages
              </a>
              <a 
                href="#booking" 
                className="px-6 py-3 bg-white text-studio-black rounded-lg shadow-md hover:bg-opacity-90 transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Types */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Perfect For Any Occasion
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Types</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From birthdays to team building, our studio can be customized for any type of gathering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div 
                key={index} 
                className="reveal-fade-up bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-studio-orange/10 text-studio-orange mr-3">
                      {event.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <a href="#booking" className="text-studio-orange font-medium hover:text-studio-teal transition-colors">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Packages */}
      <section id="packages" className="py-24 bg-studio-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Our Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your event, or contact us for a custom experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className="reveal-fade-up bg-white rounded-xl shadow-md overflow-hidden card-hover-effect"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <div className="flex items-end mb-2">
                    <span className="text-3xl font-bold text-studio-orange">${pkg.price}</span>
                    {pkg.perPerson ? (
                      <span className="text-muted-foreground ml-1">per person</span>
                    ) : (
                      <span className="text-muted-foreground ml-1">flat rate</span>
                    )}
                  </div>
                  {pkg.perPerson && pkg.minPeople && (
                    <p className="text-sm text-muted-foreground">
                      Minimum {pkg.minPeople} people
                    </p>
                  )}
                  {pkg.duration && (
                    <p className="text-sm text-muted-foreground">
                      Duration: {pkg.duration}
                    </p>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-studio-orange mr-2">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#booking" 
                    className="block w-full py-2 bg-studio-orange text-center text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all"
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center reveal-fade-up">
            <p className="text-muted-foreground mb-4">
              Looking for something specific? We can create custom packages tailored to your needs.
            </p>
            <a 
              href="#booking" 
              className="inline-block px-6 py-3 bg-studio-teal text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all"
            >
              Contact Us for Custom Options
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about hosting your event at Fire Escape Art Studio
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How far in advance should I book my event?",
                answer: "We recommend booking at least 2-3 weeks in advance to ensure availability, especially for weekend dates. For larger events or peak seasons (holidays, summer), 4-6 weeks notice is ideal."
              },
              {
                question: "Can I bring my own food and drinks?",
                answer: "Yes! You're welcome to bring your own food and non-alcoholic beverages. For adult events, you may bring wine or beer (BYOB) with proper ID. We have a small kitchenette area for serving."
              },
              {
                question: "How long do events typically last?",
                answer: "Most events run 2-3 hours depending on the package you choose. This allows plenty of time for creative work plus socializing. Additional time can be added for an extra fee if available."
              },
              {
                question: "When will our pottery be ready to take home?",
                answer: "After painting, we'll glaze and fire your creations in our kiln. This process typically takes 1-2 weeks. We'll contact you when everything is ready for pickup."
              },
              {
                question: "Is a deposit required to book an event?",
                answer: "Yes, we require a 50% non-refundable deposit to secure your date and time. The remaining balance is due on the day of your event based on final headcount."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="reveal-fade-up mb-6 bg-white p-6 rounded-xl shadow-md"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Form */}
      <section id="booking" className="py-24 bg-studio-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
              Ready to Book
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Your Event</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24-48 hours to discuss your event
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 reveal-fade-up">
              <form className="bg-white p-8 rounded-xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium mb-1">Event Type</label>
                    <select 
                      id="eventType" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    >
                      <option value="">Select event type</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="bridal">Bridal Shower</option>
                      <option value="ladiesNight">Ladies Night Out</option>
                      <option value="other">Other (please specify)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-1">Preferred Time</label>
                    <select 
                      id="time" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (10am - 12pm)</option>
                      <option value="afternoon">Afternoon (1pm - 4pm)</option>
                      <option value="evening">Evening (5pm - 8pm)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-1">Number of Guests</label>
                    <input 
                      type="number" 
                      id="guests" 
                      min="1"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                      placeholder="Enter number of guests"
                    />
                  </div>
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium mb-1">Preferred Package</label>
                    <select 
                      id="package" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    >
                      <option value="">Select package</option>
                      <option value="basic">Basic Party Package</option>
                      <option value="premium">Premium Party Package</option>
                      <option value="rental">Private Studio Rental</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Comments</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    placeholder="Tell us any special requirements or questions"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all font-medium"
                >
                  Submit Request
                </button>
              </form>
            </div>
            
            <div className="lg:col-span-2 reveal">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="text-xl font-semibold mb-6">Event Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-studio-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Availability</h4>
                      <p className="text-sm text-muted-foreground">
                        Events can be scheduled during or after regular business hours, subject to availability.
                        Weekend events book quickly!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-studio-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Group Size</h4>
                      <p className="text-sm text-muted-foreground">
                        We can accommodate groups from 8 to 40 people depending on the type of event.
                        Larger groups may require booking the entire studio.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-studio-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Duration</h4>
                      <p className="text-sm text-muted-foreground">
                        Standard events run 2-3 hours. Plan for adequate time - pottery painting
                        typically takes 1-2 hours plus time for food and socializing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-studio-orange mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Pricing & Deposit</h4>
                      <p className="text-sm text-muted-foreground">
                        A 50% non-refundable deposit is required to secure your booking.
                        Final payment is due on the day of the event based on attendance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-center text-muted-foreground mb-4">
                    Need immediate assistance? Contact us directly:
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="tel:9202312224" 
                      className="px-4 py-2 bg-studio-black text-white rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      Call Us
                    </a>
                    <a 
                      href="mailto:info@fireescapeartstudio.com" 
                      className="px-4 py-2 bg-studio-teal text-white rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
