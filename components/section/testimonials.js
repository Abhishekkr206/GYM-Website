import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Fitness Enthusiast",
      photo: "testimonials1.jpg",
      text: "Training with these experts transformed my fitness journey. The personalized approach and constant motivation helped me achieve goals I never thought possible.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Smith", 
      role: "Professional Athlete",
      photo: "testimonials2.jpg",
      text: "Their coaching methodology is outstanding. I've broken multiple personal records and improved my overall performance dramatically.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Yoga Practitioner",
      photo: "testimonials3.jpg",
      text: "The supportive environment and expert guidance improved not just my flexibility, but my mental well-being. Truly life-changing experience.",
      rating: 5
    }
  ];

  return (
    <section>
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl">
        <h1 className="inline text-5xl md:text-7xl font-bold text-white leading-tight">
            What Our 
            <span className="ml-4 text-5xl md:text-7xl font-bold text-lime-400 mb-4 leading-tight">
                 Clients Say
            </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Real stories from real people who achieved extraordinary results with our expert trainers.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl w-full">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            {/* Testimonial Card */}
            <div className="rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 space-y-6 hover:border-gray-700 transition-colors duration-200">
              
              {/* Quote Icon */}
              <div className="flex justify-end opacity-20">
                <Quote className="w-12 h-12 text-lime-400" />
              </div>
              
              {/* Stars Rating */}
              <div className="flex space-x-1 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-lime-400 text-lime-400" 
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-gray-300 text-center leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              {/* Profile Section */}
              <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-800">
                {/* Profile Photo */}
                <img 
                  src={testimonial.photo}
                  alt={testimonial.name}
                  loading='lazy'
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                />
                
                {/* Name and Role */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-lg mb-6">
          Ready to start your transformation?
        </p>
        <div className="w-24 h-0.5 bg-lime-400 mx-auto"></div>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
