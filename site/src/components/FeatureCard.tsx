import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant: 'primary' | 'secondary' | 'accent';
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant,
  delay = 0
}: FeatureCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return {
          gradient: 'bg-gradient-to-br from-primary-50 to-primary-100',
          border: 'border-primary-200',
          iconBg: 'bg-primary-600',
          iconColor: 'text-white',
          titleColor: 'text-primary-900',
          descriptionColor: 'text-primary-700'
        };
      case 'secondary':
        return {
          gradient: 'bg-gradient-to-br from-secondary-50 to-secondary-100',
          border: 'border-secondary-200',
          iconBg: 'bg-secondary-600',
          iconColor: 'text-white',
          titleColor: 'text-secondary-900',
          descriptionColor: 'text-secondary-700'
        };
      case 'accent':
        return {
          gradient: 'bg-gradient-to-br from-accent-50 to-accent-100',
          border: 'border-accent-200',
          iconBg: 'bg-accent-600',
          iconColor: 'text-white',
          titleColor: 'text-accent-900',
          descriptionColor: 'text-accent-700'
        };
    }
  };

  const classes = getVariantClasses();

  return (
    <div 
      className={`text-center p-8 ${classes.gradient} rounded-2xl border ${classes.border} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-20 h-20 ${classes.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className={`w-10 h-10 ${classes.iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className={`text-2xl font-display font-semibold mb-4 ${classes.titleColor} group-hover:text-gray-800 transition-colors duration-300`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${classes.descriptionColor} group-hover:text-gray-700 transition-colors duration-300`}>
        {description}
      </p>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
} 