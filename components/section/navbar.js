import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const lastScrollY = useRef(0);

  // Simple scroll handler - hide on scroll down, show on scroll up
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY.current) {
      setShowNavbar(true);
    }
    
    setScrollY(currentScrollY);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback((e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isInHeroSection = scrollY < 100;
  
  const navbarStyles = `fixed top-4 z-50 px-8 py-4 rounded-full transition-all duration-300 ease-in-out ${
    showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  } ${
    isInHeroSection ? 'bg-transparent' : 'bg-white/30 backdrop-blur-md border border-white/20 shadow-lg'
  }`;

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav 
        className={`${navbarStyles} left-1/2 transform -translate-x-1/2 hidden md:block`}
      >
        <div className="flex items-center justify-between min-w-[600px] sm:min-w-[850px] lg:min-w-[1300px] max-w-6xl">
          {/* Logo/Project */}
          <div className="text-3xl font-bold text-white">
            <Link href='#'>
              <h1>Abhishek..</h1>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-8 lg:space-x-12 text-lg">
            <Link 
              href="#services" 
              className="text-white hover:text-white/80 transition-colors duration-300 hover:scale-105 transform"
            >
              Services
            </Link>
            <Link
              href="#projects" 
              className="text-white hover:text-white/80 transition-colors duration-300 hover:scale-105 transform"
            >
              Projects
            </Link>
            <Link 
              href="#pricing" 
              className="text-white hover:text-white/80 transition-colors duration-300 hover:scale-105 transform"
            >
              Pricing
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-2 rounded-full font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all duration-300 hover:scale-105 transform"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav 
        className={`${navbarStyles} left-4 right-4 md:hidden`}
      >
        <div className="flex items-center justify-between">
          {/* Logo/Project */}
          <div className="text-2xl font-bold text-white">
            <Link href='/'>
              <h1>Abhishek..</h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-100 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />
          
          {/* Sidebar */}
          <div 
            className={`mobile-menu absolute top-0 right-0 h-full w-65 bg-white/90 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <div className="text-xl font-bold text-gray-800 text-center">Abhishek</div>
              <button 
                onClick={closeMobileMenu}
                className="p-2 rounded-lg text-gray-800 hover:bg-gray-100/50 transition-colors"
                aria-label="Close menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col p-6 space-y-6">
              <Link 
                href="#services" 
                onClick={closeMobileMenu}
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-200 py-2"
              >
                Services
              </Link>
              <Link 
                href="#projects" 
                onClick={closeMobileMenu}
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-200 py-2"
              >
                Projects
              </Link>
              <Link 
                href="#pricing" 
                onClick={closeMobileMenu}
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-200 py-2"
              >
                Pricing
              </Link>
              <Link 
                href="#contact" 
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}