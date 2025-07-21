'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-primary-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/laika-bot.svg"
              alt="Laika Bot"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <h1 className="text-2xl font-display font-bold text-primary-900">
              Laika Media
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#episodes" 
              className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
            >
              Episodes
            </a>
            <a 
              href="#about" 
              className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="#subscribe" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-primary-700"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#episodes" 
                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Episodes
              </a>
              <a 
                href="#about" 
                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-primary-700 hover:text-primary-900 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#subscribe" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
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