'use client';

import { Video, BookOpen, Users } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: Video,
      title: 'High Quality Content',
      description: 'Professional-grade video production with cutting-edge technology and creative storytelling that captivates audiences and delivers exceptional viewing experiences.',
      gradient: 'bg-gradient-primary',
      glowClass: 'glow-primary'
    },
    {
      icon: BookOpen,
      title: 'Educational Value',
      description: 'Content designed to educate and inspire, covering topics that matter to our community and drive meaningful conversations that spark learning and growth.',
      gradient: 'bg-gradient-secondary',
      glowClass: 'glow-secondary'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a vibrant community around shared interests and meaningful conversations that bring people together and foster lasting connections.',
      gradient: 'bg-gradient-accent',
      glowClass: 'glow-accent'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background section separator */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with modern spacing */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            From the Community
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-space mb-8 leading-tight">
            Why Choose{' '}
            <span className="text-gradient-primary">Laika Media</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Experience the next evolution of digital content with cutting-edge technology and community-driven innovation
          </p>
        </div>

        {/* Feature cards with Lovable-inspired layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-10 hover:border-primary/30 hover:bg-card/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-xl ${feature.gradient} flex items-center justify-center group-hover:${feature.glowClass} transition-all duration-300 group-hover:scale-110 transform`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-space mb-6 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;