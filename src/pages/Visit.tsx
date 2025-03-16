
import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Instagram } from 'lucide-react';

const Visit = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-studio-orange/10 text-studio-orange text-sm font-medium mb-3">
            Visit Us
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Plan Your Visit</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to welcome you to Fire Escape Art Studio! Find all the information 
            you need to visit us and begin your creative journey.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Location Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-studio-black">Our Location</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin className="w-6 h-6 text-studio-orange mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        927 Oregon Street<br />
                        Oshkosh, Wisconsin 54902
                      </p>
                      <a 
                        href="https://maps.google.com/?q=927+Oregon+Street,+Oshkosh,+Wisconsin+54902" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-studio-orange hover:underline mt-2 inline-block"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="w-6 h-6 text-studio-orange mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <a href="tel:9202312224" className="text-muted-foreground hover:text-studio-orange">
                        (920) 231-2224
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="w-6 h-6 text-studio-orange mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:info@fireescapeartstudio.com" className="text-muted-foreground hover:text-studio-orange">
                        info@fireescapeartstudio.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock className="w-6 h-6 text-studio-orange mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Hours</h3>
                      <div className="text-muted-foreground">
                        <div className="grid grid-cols-2 gap-x-2">
                          <span>Monday - Friday:</span>
                          <span>10:00 AM - 7:00 PM</span>
                          
                          <span>Saturday:</span>
                          <span>10:00 AM - 5:00 PM</span>
                          
                          <span>Sunday:</span>
                          <span>11:00 AM - 4:00 PM</span>
                        </div>
                        <p className="mt-2 text-sm italic">
                          Hours may vary on holidays. Please call ahead to confirm.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Instagram className="w-6 h-6 text-studio-orange mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Follow Us</h3>
                      <a 
                        href="https://www.instagram.com/fireescapeartstudio/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-studio-orange"
                      >
                        @fireescapeartstudio
                      </a>
                      <p className="text-sm mt-1">Follow us for inspiration, updates, and special offers!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="h-96 md:h-full">
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
        
        {/* What to Expect */}
        <div className="bg-studio-cream rounded-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">What to Expect When Visiting</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Here's everything you need to know for your visit to Fire Escape Art Studio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 reveal-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-studio-black">Walk-In Pottery Painting</h3>
              <p className="text-muted-foreground mb-4">
                No appointment necessary! Walk in during our open hours and select a pottery piece
                to paint. Our staff will provide all the necessary materials and instructions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-studio-orange rounded-full mt-2 mr-2"></span>
                  <span>Pottery pieces range from $12 - $80, with most items between $20 - $30</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-studio-orange rounded-full mt-2 mr-2"></span>
                  <span>Studio fee: $8 for adults, $6 for children (covers paints, glazing, and firing)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-studio-orange rounded-full mt-2 mr-2"></span>
                  <span>Items are ready for pickup in 7-10 days after glazing and firing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 reveal-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-studio-black">Parking Information</h3>
              <div className="flex mb-4">
                <Car className="w-5 h-5 text-studio-orange mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Free parking is available in our lot behind the building, 
                  accessible from Oregon Street. Additional street parking is also available.
                </p>
              </div>
              <h4 className="font-medium mb-2">Accessibility</h4>
              <p className="text-muted-foreground">
                Our studio is wheelchair accessible with a ramp at the rear entrance.
                Please call ahead if you need any special accommodations, and we'll be
                happy to assist you.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 reveal-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-studio-black">First-Time Visitors</h3>
              <p className="text-muted-foreground mb-4">
                Never been to a paint-your-own pottery studio before? No worries! 
                Our friendly staff will guide you through the process:
              </p>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Select your pottery piece from our shelves</li>
                <li>Choose your paint colors and gather supplies</li>
                <li>Let your creativity flow!</li>
                <li>Leave your piece with us for glazing and firing</li>
                <li>Pick up your finished masterpiece in 7-10 days</li>
              </ol>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 reveal-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-studio-black">Food & Beverages</h3>
              <p className="text-muted-foreground mb-4">
                Feel free to bring snacks or non-alcoholic beverages to enjoy while you create.
                For parties and events, you're welcome to bring in food and refreshments.
              </p>
              <p className="text-muted-foreground">
                We're also conveniently located near several restaurants if you'd like to
                grab a meal before or after your visit.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                Have a question or want more information? Send us a message and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-4" id="contact">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                  >
                    <option value="">Select a Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="classes">Classes & Workshops</option>
                    <option value="parties">Parties & Events</option>
                    <option value="pottery">Pottery Questions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-studio-orange"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-studio-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1548291616-bfccc8db730d?q=80&w=1887"
                  alt="Fire Escape Art Studio Pottery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
