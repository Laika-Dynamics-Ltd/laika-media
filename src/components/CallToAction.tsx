import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CallToAction = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Large gradient background - Lovable style */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-background/50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        {/* Modern badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-12">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          Ready to build?
        </div>

        <h2 className="text-5xl md:text-7xl font-bold font-space mb-10 leading-tight">
          Create something{' '}
          <span className="text-gradient-primary">amazing</span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto font-light leading-relaxed">
          Join thousands of creators and learners building the future of digital media
        </p>

        {/* Large input similar to Lovable's hero */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all group">
            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email to get started..."
                className="flex-1 bg-transparent text-lg placeholder:text-muted-foreground border-none outline-none"
              />
              <Button 
                size="lg"
                className="bg-gradient-primary hover:bg-primary-glow text-primary-foreground rounded-xl px-8 py-3 font-semibold hover:scale-105 transition-all"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 font-medium px-8 py-4 text-lg hover:scale-105 transition-all rounded-xl"
          >
            Watch Demo
          </Button>
          <Button 
            size="lg" 
            variant="ghost"
            className="text-muted-foreground hover:text-foreground font-medium px-8 py-4 text-lg hover:scale-105 transition-all"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;