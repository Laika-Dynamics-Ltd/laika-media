'use client';

import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Large gradient background inspired by Lovable.dev */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10"></div>
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary/30 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent/25 rounded-full animate-float-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        {/* Large, centered headline - Lovable.dev style */}
        <h1 className="text-6xl md:text-8xl font-bold font-space mb-8 leading-tight">
          Build something{' '}
          <span className="text-gradient-primary">Laika</span>
        </h1>

        {/* Clean subtitle */}
        <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto font-light">
          Create cutting-edge media content by exploring the future of technology and creativity
        </p>

        {/* Large search-like input inspired by Lovable */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <input
                type="text"
                placeholder="Ask Laika to create content for you..."
                className="flex-1 bg-transparent text-lg placeholder:text-muted-foreground border-none outline-none"
              />
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-lg px-6"
              >
                Create
              </Button>
            </div>
          </div>
        </div>

        {/* Logo with subtle glow */}
        <div className="mb-12 flex justify-center">
          <Image 
            src="/laika-bot.png" 
            alt="Laika Bot"
            width={96}
            height={96}
            className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;