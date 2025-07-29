'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20CEO%20executive%20portrait%20smiling%20confident%20corporate%20headshot%20professional%20attire%20modern%20office%20background&width=150&height=150&seq=testimonial-001&orientation=squarish',
      content: 'Working with this team transformed our entire business strategy. Their expertise in digital transformation helped us increase our revenue by 300% within just 18 months. Absolutely incredible results!'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, GrowthCorp',
      image: 'https://readdy.ai/api/search-image?query=professional%20businessman%20founder%20executive%20portrait%20confident%20smile%20corporate%20headshot%20business%20suit%20modern%20office%20setting&width=150&height=150&seq=testimonial-002&orientation=squarish',
      content: 'The strategic guidance provided was exceptional. They not only helped us optimize our operations but also identified new market opportunities that we had never considered. Highly recommend their services.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Director, InnovateCo',
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20operations%20director%20executive%20portrait%20professional%20smile%20corporate%20headshot%20business%20attire%20office%20environment&width=150&height=150&seq=testimonial-003&orientation=squarish',
      content: 'Their risk management strategies saved our company during the market downturn. The team is incredibly knowledgeable and always delivers results that exceed expectations. A true partnership!'
    }
  ];

  return (
    <section className="py-20 bg-white fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services and results.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 scale-up">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bounce-in">
              <img 
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed slide-in-left">
              "{testimonials[activeTestimonial].content}"
            </blockquote>
            <div className="text-lg font-semibold text-gray-900 slide-in-right">
              {testimonials[activeTestimonial].name}
            </div>
            <div className="text-blue-600 slide-in-right" style={{animationDelay: '0.1s'}}>
              {testimonials[activeTestimonial].position}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 ${
                  activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}