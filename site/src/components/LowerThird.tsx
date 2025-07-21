'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LowerThirdProps {
  title: string;
  subtitle: string;
}

export function LowerThird({ title, subtitle }: LowerThirdProps) {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="flex items-center gap-4 bg-[#121212]/90 backdrop-blur-sm rounded-lg pl-2 pr-6 py-2 shadow-lg border-l-4 border-gradient-to-b from-[#00E7FF] to-[#FF2D95]"
      style={{
        background: 'linear-gradient(90deg, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.8) 100%)',
        borderImage: 'linear-gradient(45deg, #00E7FF, #FF2D95) 1',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Laika Bot Icon */}
      <div className="w-12 h-12 flex-shrink-0">
        <Image 
          src="/laika-bot-logo.svg" 
          alt="Laika Bot" 
          width={48} 
          height={48} 
          priority 
          className="w-full h-full"
        />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="font-display text-lg font-semibold text-white leading-tight">
          {title}
        </h3>
        <p className="text-[#a1a1aa] text-sm leading-tight">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
} 