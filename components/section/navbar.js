import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const SCROLL_THRESHOLD = 100;
const MOBILE_MENU_WIDTH = '280px'; // More standard mobile menu width

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY.current) {
      setShowNavbar(true);
    }
    
    setScrollY(currentScrollY);
    lastScrollY.current = currentScrollY;
  }, []);

  // Throttled scroll handler for better performance
  const throttledHandleScroll = useCallback(() => {
    requestAnimationFrame(handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [throttledHandleScroll]);

  // Handle body scroll lock and cleanup
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback((e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isInHeroSection = scrollY < SCROLL_THRESHOLD;
  
  // Navigation items for DRY principle
  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#trainers", label: "Trainers" },
    { href: "#pricing", label: "Pricing" },
  ];

  // Base navbar styles
  const getNavbarStyles = (isMobile = false) => {
    const baseStyles = `fixed top-4 z-50 py-4 rounded-full transition-all duration-300 ease-in-out ${
      showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    } ${
      isInHeroSection ? 'bg-transparent' : 'bg-white/30 backdrop-blur-md border border-white/20 shadow-lg'
    }`;

    return isMobile 
      ? `${baseStyles} left-4 right-4 px-6 md:hidden`
      : `${baseStyles} left-1/2 transform -translate-x-1/2 px-8 hidden md:block`;
  };

  // Menu button component
  const MenuButton = ({ isOpen, onClick, className = "" }) => (
    <button 
      onClick={onClick}
      className={`p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );

  // Logo component
  const Logo = ({ className = "", size = "text-3xl" }) => (
    <div className={`${size} font-bold text-white ${className}`}>
      <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
        <h1>FitZone</h1>
      </Link>
    </div>
  );

  // Navigation link component
  const NavLink = ({ href, children, isCTA = false, onClick, className = "" }) => {
    const baseStyles = isCTA
      ? "px-6 py-2 rounded-full font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-purple-300"
      : "text-white hover:text-white/80 transition-colors duration-300 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-white/50 rounded";

    return (
      <Link 
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className={getNavbarStyles(false)} role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between min-w-[600px] sm:min-w-[850px] lg:min-w-[1300px] max-w-6xl">
          <Logo />

          {/* Desktop Menu Items */}
          <div className="flex items-center space-x-8 lg:space-x-12 text-lg" role="menubar">
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.href} role="menuitem">
                {item.label}
              </NavLink>
            ))}
            <NavLink href="#contact" isCTA role="menuitem">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={getNavbarStyles(true)} role="navigation" aria-label="Mobile navigation">
        <div className="flex items-center justify-between">
          <Logo size="text-2xl" />
          <MenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Sidebar */}
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className={`absolute top-0 right-0 h-full bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ width: MOBILE_MENU_WIDTH }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <div id="mobile-menu-title" className="text-xl font-bold text-gray-800">
                FitZone
              </div>
              <MenuButton 
                isOpen={true} 
                onClick={closeMobileMenu} 
                className="text-gray-800 hover:bg-gray-100/50 focus:ring-gray-300" 
              />
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col p-6 space-y-4" role="menu">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-purple-50/50 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg mt-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
                role="menuitem"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
