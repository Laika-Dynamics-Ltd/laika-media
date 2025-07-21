'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

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
        ? 'bg-neutral-900/80 backdrop-blur-md border-b border-neutral-700' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/laika-bot.png"
                alt="Laika Bot"
                width={40}
                height={40}
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                priority
              />
            </div>
            <h1 className="text-2xl font-display font-bold text-white">
              Laika Media
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#episodes" className="font-medium text-neutral-300 hover:text-white transition-colors duration-300">
              Episodes
            </a>
            <a href="#about" className="font-medium text-neutral-300 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="font-medium text-neutral-300 hover:text-white transition-colors duration-300">
              Contact
            </a>
            <a href="#subscribe" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-neutral-900/90 backdrop-blur-md rounded-lg border border-neutral-700">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#episodes" className="font-medium text-neutral-300 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-neutral-800" onClick={() => setIsMenuOpen(false)}>
                Episodes
              </a>
              <a href="#about" className="font-medium text-neutral-300 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-neutral-800" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#contact" className="font-medium text-neutral-300 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-neutral-800" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <a href="#subscribe" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
                Subscribe
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}