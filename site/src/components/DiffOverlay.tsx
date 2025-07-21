'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

// Diff language is supported by default in newer versions

interface DiffOverlayProps {
  code: string;
  title?: string;
}

export function DiffOverlay({ code, title }: DiffOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-lg overflow-hidden shadow-2xl max-w-[960px] bg-[#1e1e1e] border border-[#333]"
    >
      {title && (
        <div className="px-4 py-2 bg-[#2d2d2d] border-b border-[#333]">
          <h3 className="text-white font-mono text-sm">{title}</h3>
        </div>
      )}
      <SyntaxHighlighter
        language="diff"
        style={tomorrow}
        customStyle={{ 
          background: 'transparent', 
          padding: '1rem',
          margin: 0,
          fontSize: '14px',
          lineHeight: '1.4',
          fontFamily: 'JetBrains Mono, monospace'
        }}
        wrapLines
        lineProps={(lineNumber: number) => {
          const lines = code.split('\n');
          const lineContent = lines[lineNumber - 1] || '';
          if (lineContent.startsWith('+')) {
            return { 
              className: 'diff-add',
              style: { 
                backgroundColor: '#093',
                color: '#C8FACC',
                padding: '2px 0'
              }
            };
          }
          if (lineContent.startsWith('-')) {
            return { 
              className: 'diff-del',
              style: { 
                backgroundColor: '#600',
                color: '#FECACA',
                padding: '2px 0'
              }
            };
          }
          return { 
            className: 'diff-ctx',
            style: { 
              backgroundColor: '#121212',
              color: '#a1a1aa',
              padding: '2px 0'
            }
          };
        }}
      >
        {code}
      </SyntaxHighlighter>
    </motion.div>
  );
} 