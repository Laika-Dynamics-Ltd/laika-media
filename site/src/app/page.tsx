'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import ColorTest from '@/components/ColorTest';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeatureGrid />
      
      {/* CTA Section with Video Modal */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of viewers who are already learning and growing with Laika Media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Watch Demo</span>
            </button>
            <a
              href="#subscribe"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="claude-code-100s-demo"
        title="Claude Code 100-s Demo"
        description="Experience the power of AI-assisted coding with our latest demonstration."
      />
      
      {/* Debug Color Test */}
      <ColorTest />
    </div>
  );
}
