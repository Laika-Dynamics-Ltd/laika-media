'use client';

import { useState } from 'react';
import { LowerThird } from '@/components/LowerThird';
import { DiffOverlay } from '@/components/DiffOverlay';

export default function VideoAssetsDemo() {
  const [showLowerThird, setShowLowerThird] = useState(false);
  const [showDiff, setShowDiff] = useState(false);

  const sampleDiff = `diff --git a/src/components/Header.tsx b/src/components/Header.tsx
index abc1234..def5678 100644
--- a/src/components/Header.tsx
+++ b/src/components/Header.tsx
@@ -15,6 +15,7 @@ export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
+  const [imageError, setImageError] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
@@ -25,6 +26,7 @@ export default function Header() {
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
+
   return (
     <header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
       isScrolled 
@@ -35,12 +37,25 @@ export default function Header() {
         <div className="flex items-center justify-between">
           {/* Enhanced Logo */}
           <div className="flex items-center space-x-3 group">
-            <Image
-              src="/laika-bot.png"
-              alt="Laika Bot"
-              width={48}
-              height={48}
-              className="w-12 h-12"
-            />
+            {!imageError ? (
+              <Image
+                src="/laika-bot.png"
+                alt="Laika Bot"
+                width={48}
+                height={48}
+                className="w-12 h-12"
+                onError={() => setImageError(true)}
+              />
+            ) : (
+              <img
+                src="/laika-bot.png"
+                alt="Laika Bot"
+                className="w-12 h-12"
+              />
+            )}
           </div>
         </div>
       </div>
     </header>
   );
 }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-8 text-center">
          Laika Media Video Assets
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lower Third Demo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-semibold">Lower Third</h2>
            <p className="text-gray-300">
              Animated lower third with Laika Bot icon and gradient border.
            </p>
            <button
              onClick={() => setShowLowerThird(!showLowerThird)}
              className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
            >
              {showLowerThird ? 'Hide' : 'Show'} Lower Third
            </button>
            
            {showLowerThird && (
              <div className="mt-4">
                <LowerThird 
                  title="Episode 1: Getting Started" 
                  subtitle="Introduction to Laika Media and our workflow"
                />
              </div>
            )}
          </div>

          {/* Diff Overlay Demo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-semibold">Code Diff Overlay</h2>
            <p className="text-gray-300">
              Syntax-highlighted code diff with custom styling.
            </p>
            <button
              onClick={() => setShowDiff(!showDiff)}
              className="bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-lg transition-colors"
            >
              {showDiff ? 'Hide' : 'Show'} Diff Overlay
            </button>
            
            {showDiff && (
              <div className="mt-4">
                <DiffOverlay 
                  code={sampleDiff}
                  title="Header.tsx - Add Error Handling"
                />
              </div>
            )}
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-display font-semibold mb-4">Usage Instructions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-primary-400 mb-2">Lower Third</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Import: <code className="bg-gray-700 px-1 rounded">import {`{ LowerThird }`} from &apos;@/components/LowerThird&apos;</code></li>
                <li>• Use: <code className="bg-gray-700 px-1 rounded">{`<LowerThird title="Title" subtitle="Subtitle" />`}</code></li>
                <li>• Animation: Slides in from left over 0.4s</li>
                <li>• Export: Use browser dev tools to capture</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-400 mb-2">Diff Overlay</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Import: <code className="bg-gray-700 px-1 rounded">import {`{ DiffOverlay }`} from &apos;@/components/DiffOverlay&apos;</code></li>
                <li>• Use: <code className="bg-gray-700 px-1 rounded">{`<DiffOverlay code={gitDiff} title="Optional Title" />`}</code></li>
                <li>• Animation: Fades in with slight upward motion</li>
                <li>• Colors: Green for additions, red for deletions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 