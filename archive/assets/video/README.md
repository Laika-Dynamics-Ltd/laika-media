# Laika Media Video Assets

Professional video production assets for Laika Media episodes, including lower-thirds, code diff overlays, and intro stings.

## 📁 File Structure

```
assets/video/
├── lower-third.svg          # Lower third design (1200×180)
├── lower-third.png          # Lower third export (PNG)
├── sting.png               # 3-frame glitch sting (3×1920×1080)
├── code-diff-preset.json   # Syntax highlighting theme
├── sting-description.md    # Sting animation specifications
└── README.md              # This file
```

## 🎬 Components

### 1. Lower Third (`LowerThird.tsx`)

**Specifications:**
- **Size**: 1200 × 180 px
- **Animation**: Slide-in from left (x: -100% → 0) over 0.4s
- **Easing**: Cubic bezier [0.33, 1, 0.68, 1]
- **Background**: Surface-1 (#121212) with 40% opacity drop shadow
- **Border**: 4px gradient (45° from #00E7FF to #FF2D95)

**Usage:**
```tsx
import { LowerThird } from '@/components/LowerThird';

<LowerThird 
  title="Episode Title" 
  subtitle="Episode Subtitle" 
/>
```

**Export for Video:**
1. Navigate to `/video-assets` demo page
2. Trigger the lower third animation
3. Use browser dev tools to capture the element
4. Export as PNG with transparent background

### 2. Code Diff Overlay (`DiffOverlay.tsx`)

**Specifications:**
- **Font**: JetBrains Mono 500, 14px
- **Width**: 960px (fits 1440p with margins)
- **Line Height**: 1.4
- **Colors**: 
  - Additions: `#093` background, `#C8FACC` text
  - Deletions: `#600` background, `#FECACA` text
  - Context: `#121212` background, `#a1a1aa` text

**Usage:**
```tsx
import { DiffOverlay } from '@/components/DiffOverlay';

<DiffOverlay 
  code={gitDiffOutput} 
  title="Optional Title" 
/>
```

**Export for Video:**
1. Use the demo page to test with sample diff
2. Capture the rendered component
3. Export as PNG with dark background

### 3. Glitch Sting (`sting.png`)

**Specifications:**
- **Format**: 3-frame sprite sheet (3 × 1920 × 1080)
- **Frame Duration**: 33ms each (30fps)
- **Effects**: 
  - Frame 1: Cyan channel offset +2px right
  - Frame 2: Magenta channel offset -2px left
  - Frame 3: Normal display

**After Effects Usage:**
1. Import as sprite sheet
2. Apply CC Force Motion Blur
3. Set frame rate to 30fps
4. Each frame displays for 1 frame (33ms)

## 🎨 Brand Colors

All assets use the Laika Media brand color palette:

```css
/* Primary Colors */
--primary-500: #0ea5e9;    /* Blue */
--secondary-500: #d946ef;  /* Purple */
--accent-500: #f97316;     /* Orange */

/* Video Asset Colors */
--surface-1: #121212;      /* Dark background */
--text-primary: #ffffff;   /* White text */
--text-muted: #a1a1aa;     /* Muted text */

/* Gradient Colors */
--gradient-start: #00E7FF; /* Cyan */
--gradient-end: #FF2D95;   /* Pink */
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn
- React 18+
- Framer Motion
- React Syntax Highlighter

### Installation
```bash
npm install framer-motion react-syntax-highlighter
npm install --save-dev @types/react-syntax-highlighter
```

### Demo Page
Visit `/video-assets` to see all components in action with interactive demos.

## 📹 Video Production Workflow

1. **Design Phase**: Use the demo page to test components
2. **Export Phase**: Capture components using browser dev tools
3. **Integration**: Import PNG exports into Premiere Pro or DaVinci Resolve
4. **Animation**: Use After Effects for the sting animation
5. **Final Render**: Export at 1440p (2× base resolution)

## 🔧 Customization

### Lower Third
- Modify colors in `tailwind.config.ts`
- Adjust animation timing in `LowerThird.tsx`
- Change fonts in the component

### Diff Overlay
- Update syntax highlighting in `code-diff-preset.json`
- Modify colors in the component's `lineProps`
- Adjust font size and spacing

### Sting Animation
- Edit frame specifications in `sting-description.md`
- Modify colors and timing
- Update text content and positioning

## 📋 Export Checklist

- [ ] Lower third exported as PNG with transparency
- [ ] Code diff overlay captured at 960px width
- [ ] Sting animation rendered as 3-frame sprite
- [ ] All assets tested in video editing software
- [ ] Colors match brand guidelines
- [ ] Animations are smooth and professional

## 🚀 Next Steps

1. Create additional lower third variations
2. Add more code syntax highlighting themes
3. Develop transition effects between components
4. Build automated export pipeline
5. Create After Effects templates

---

**Laika Media** - Professional video production and media content that inspires, educates, and entertains. 