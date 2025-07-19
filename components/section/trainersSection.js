import React from 'react';
import { Instagram } from 'lucide-react';

const FitnessTrainers = () => {
  const trainers = [
    {
      name: "Marcus Steele",
      image: "trainer1.png",
      specialty: "Strength Training & Powerlifting",
      experience: "8+ Years"
    },
    {
      name: "Jaxon Ryder", 
      image: "trainer2.png",
      specialty: "CrossFit & Functional Training",
      experience: "6+ Years"
    },
    {
      name: "Luna Rivers",
      image: "trainer3.png",
      specialty: "Yoga & Flexibility",
      experience: "10+ Years"
    }
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Your Fitness
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-lime-400 mb-4 leading-tight">
          Goals, Their Expertise
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Our team of certified trainers brings unparalleled expertise to help you achieve your fitness goals.
        </p>
      </div>

      {/* Simple 3D Cards Grid with experience badge */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl w-full">
        {trainers.map((trainer, index) => (
          <div key={index} className="group">
            {/* Card with subtle 3D tilt */}
            <div className="relative rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 overflow-hidden transition-all duration-300 ease-out group-hover:transform group-hover:rotate-y-6 group-hover:shadow-2xl group-hover:shadow-lime-400/20 group-hover:-translate-y-2"
                 style={{
                   transform: 'perspective(1000px)',
                   transformStyle: 'preserve-3d'
                 }}>
              
              {/* Image Container */}
              <div className="relative h-96 md:h-90 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Experience badge */}
                <div className="absolute top-4 left-4 bg-lime-400/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {trainer.experience}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-lime-400">
                      {trainer.name}
                    </h3>
                  </div>
                  <Instagram className="w-6 h-6 text-gray-500 transition-all duration-300 group-hover:text-lime-400 group-hover:scale-110" />
                </div>
                
                <p className="text-gray-400 text-sm mb-3 transition-all duration-300 group-hover:text-gray-300">
                  {trainer.specialty}
                </p>
                
                <div className="w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-16"></div>
              </div>
              
              {/* Subtle 3D glow */}
              <div className="absolute inset-0 rounded-2xl bg-lime-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessTrainers;
