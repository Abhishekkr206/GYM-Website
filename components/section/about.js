import React from 'react';
import { Play } from 'lucide-react';

export default function AboutUs() {
  const primaryGreen = '#9BCD00';
  const lightGreen = '#F5FFC8';
  
  return (
    <section id='about'>
    <div className="min-h-screen bg-gradient-to-br from-black/98 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-lime-600/20"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="text-start mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: primaryGreen }}>
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            YOUR <span style={{ color: primaryGreen }}>FITNESS</span> JOURNEY STARTS HERE
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            At FFL Gym, we are dedicated to helping you unlock your full fitness potential. With 
            top-tier equipment, expert trainers, and a welcoming community, we provide the 
            perfect environment to push your limits and achieve your goals.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:opacity-80 transition-all duration-300" style={{ color: lightGreen }}>
              12<span style={{ color: primaryGreen }}>+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">Years of Excellence</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:opacity-80 transition-all duration-300" style={{ color: lightGreen }}>
              27K<span style={{ color: primaryGreen }}>+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">Members</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:opacity-80 transition-all duration-300" style={{ color: lightGreen }}>
              60<span style={{ color: primaryGreen }}>+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">Weekly Classes</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:opacity-80 transition-all duration-300" style={{ color: lightGreen }}>
              117<span style={{ color: primaryGreen }}>+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">Expert Trainers</p>
          </div>
        </div>

        {/* Video section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video thumbnail/placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
                <img src='gym-pic.png' className='h-full w-full object-cover' loading="lazy" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full p-6 group hover:scale-110 transform">
                  <Play className="w-8 h-8 ml-1 group-hover:opacity-80 transition-all duration-300" style={{ color: lightGreen }} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9BCD00]/5 to-[#F5FFC8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#9BCD00]/5 to-[#F5FFC8]/5 rounded-full blur-3xl"></div>
    </div>
    </section>
  );
}