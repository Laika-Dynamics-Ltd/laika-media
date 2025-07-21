import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant: 'primary' | 'secondary' | 'accent';
  delay?: number;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative text-center p-8 bg-neutral-800/50 rounded-2xl border border-neutral-700 hover:border-primary-500/50 transition-all duration-300 group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-neutral-700 group-hover:border-primary-500 transition-colors duration-300">
          <div className="w-8 h-8 text-primary-500">{icon}</div>
        </div>
        <h3 className="text-2xl font-display font-semibold mb-4 text-white">{title}</h3>
        <p className="leading-relaxed text-neutral-300">{description}</p>
      </div>
    </div>
  );
} 