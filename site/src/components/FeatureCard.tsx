import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  borderColor,
  iconBgColor,
  iconColor,
  delay = 0
}: FeatureCardProps) {
  return (
    <div 
      className={`text-center p-8 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} rounded-2xl border border-${borderColor} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-20 h-20 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className={`w-10 h-10 ${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-gray-800 transition-colors duration-300">
        {title}
      </h3>
      <p className="leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
} 