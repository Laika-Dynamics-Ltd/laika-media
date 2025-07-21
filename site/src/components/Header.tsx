'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              {!imageError ? (
                <Image
                  src="/laika-bot-logo.svg"
                  alt="Laika Bot"
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  priority
                  onError={() => {
                    console.error('Failed to load laika-bot-logo.svg');
                    setImageError(true);
                  }}
                  onLoad={() => {
                    console.log('Successfully loaded laika-bot-logo.svg');
                  }}
                />
              ) : (
                <img
                  src="/laika-bot-logo.svg"
                  alt="Laika Bot"
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  onError={() => console.error('Fallback img also failed to load')}
                  onLoad={() => console.log('Fallback img loaded successfully')}
                />
              )}
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-12 h-12 bg-primary-400 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <h1 className={`text-2xl font-display font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-white drop-shadow-lg'
            }`}>
              Laika Media
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#episodes" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-primary-700 hover:text-primary-900' 
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              Episodes
            </a>
            <a 
              href="#about" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-primary-700 hover:text-primary-900' 
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-primary-700 hover:text-primary-900' 
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              Contact
            </a>
            <a 
              href="#subscribe" 
              className={`font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              Subscribe
            </a>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'hover:bg-primary-50 text-primary-700' 
                : 'hover:bg-white/20 text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-100/20 bg-white/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              <a 
                href="#episodes" 
                className={`font-medium transition-all duration-300 hover:scale-105 py-2 px-4 rounded-lg ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-900 hover:bg-primary-50' 
                    : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Episodes
              </a>
              <a 
                href="#about" 
                className={`font-medium transition-all duration-300 hover:scale-105 py-2 px-4 rounded-lg ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-900 hover:bg-primary-50' 
                    : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className={`font-medium transition-all duration-300 hover:scale-105 py-2 px-4 rounded-lg ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-900 hover:bg-primary-50' 
                    : 'text-primary-700 hover:text-primary-900 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#subscribe" 
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 