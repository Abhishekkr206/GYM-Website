import React from 'react';

const ContactForm = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-15 px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Decorative Elements (CSS only) */}
      <div className="absolute text-lime-400 opacity-10 w-24 h-24 top-10 left-10 rotate-12 border-4 border-lime-400 rounded-lg"></div>
      <div className="absolute text-lime-400 opacity-10 w-28 h-28 bottom-20 right-20 -rotate-6">
        <div className="w-full h-full border-4 border-lime-400 rounded-full"></div>
      </div>
      <div className="absolute text-lime-400 opacity-10 w-20 h-20 top-1/2 left-1/4 -translate-y-1/2 rotate-45 bg-lime-400"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-lime-400 mb-4 leading-tight">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Get in touch with our fitness experts today.
        </p>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8">
          <form>
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-white font-medium text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-white font-medium text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label className="block text-white font-medium text-lg mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-200 resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-lg bg-lime-400 text-black font-bold text-lg hover:bg-lime-300 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom accent */}
        <div className="mt-8 text-center">
          <div className="w-24 h-0.5 bg-lime-400 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
