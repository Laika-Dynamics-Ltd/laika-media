**Meta-Prompt for Laika Media Next.js Prototype (Bolt.net / v0)**

**Project Name:** Laika Media

**Core Purpose:** To showcase high-quality video content, emphasize educational value, and foster a vibrant community around tech and media.

**Target Audience:** Developers, tech enthusiasts, content creators, and learners seeking engaging and informative video content.

**Design Philosophy & Aesthetic:**
Create a modern, minimalist, and high-performance web experience. The design should feel sophisticated, fast, and intuitive, prioritizing content clarity and user engagement.

*   **Overall Tone:** Clean, sharp, and slightly futuristic.
*   **Color Palette:** Predominantly dark theme (deep charcoals, subtle blacks, cool grays) as the base. Utilize vibrant, high-contrast accent colors (e.g., electric blues, neon greens, subtle purples/pinks) for interactive elements, highlights, and calls to action. Avoid overly bright or distracting colors.
*   **Typography:**
    *   **Headlines:** A bold, modern sans-serif display font (e.g., similar to Inter, Space Grotesk, or a clean geometric sans-serif).
    *   **Body Text:** A highly readable, clean sans-serif font for all body copy, ensuring excellent legibility on dark backgrounds.
    *   **Code Snippets (if applicable):** A clean, monospaced font.
*   **Layout & Structure:**
    *   Clean, spacious, and grid-based.
    *   Excellent responsiveness across all devices (mobile, tablet, desktop).
    *   Ample whitespace to reduce visual clutter and highlight key information.
*   **Animations & Interactivity:**
    *   Subtle, smooth, and performant animations (e.g., gentle fades, slides, hover effects, subtle glows).
    *   Interactive elements should provide clear visual feedback on hover and click.
    *   Consider subtle parallax scrolling for background elements if it enhances the sense of depth without hindering performance.
*   **Visual Elements:**
    *   Use gradients sparingly and strategically for depth or emphasis (e.g., button backgrounds, subtle background textures).
    *   Incorporate "glow" effects around key elements (e.g., logo, active buttons, feature cards on hover) to draw attention and add a modern touch.
    *   Icons should be clean, simple, and monochromatic, adapting to the dark theme.

**Inspiration Websites (Analyze and Extract Design Cues):**

1.  **`fireship.io`**:
    *   **Key Cues:** Fast loading, bold headlines, effective use of dark mode, clear content hierarchy, engaging micro-animations, concise explanations, strong branding.
    *   **Focus On:** The overall feeling of speed and directness, how content is presented cleanly, and the use of vibrant accents against a dark background.
2.  **`raycast.com`**:
    *   **Key Cues:** Extremely clean and minimalist UI, sophisticated dark theme, subtle gradients and shadows for depth, elegant typography, smooth transitions, focus on product screenshots/visuals.
    *   **Focus On:** The refined aesthetic, subtle interactive elements, and how information is presented without clutter.
3.  **`vercel.com`**:
    *   **Key Cues:** Professional, high-tech feel, excellent use of gradients and background patterns, clear calls to action, strong visual storytelling, responsive design.
    *   **Focus On:** The polished, enterprise-grade feel, effective use of background visuals, and clear user journeys.

**Key Components & Sections (Detailed Requirements):**

1.  **Global Header:**
    *   **Appearance:** Transparent initially, transitioning to a blurred, semi-transparent dark background on scroll.
    *   **Elements:** Clean Laika Media logo (use `laika-bot.png` as the primary image, ensure it integrates well with the dark theme), minimalist navigation links (Episodes, About, Contact, Subscribe), and a responsive mobile menu toggle.
    *   **Interactivity:** Smooth hover effects on navigation links.

2.  **Hero Section:**
    *   **Headline:** Prominent, concise, and impactful (e.g., "Next-Generation Media Content").
    *   **Sub-headline/Description:** A brief, engaging sentence or two.
    *   **Visual Element:** Central Laika Bot logo (`laika-bot.png`) with a subtle, pulsing glow effect.
    *   **Background:** Subtle, animated background elements (e.g., slow-moving particles, very subtle radial gradients, or abstract shapes) that add depth without distracting.
    *   **Call-to-Action Buttons:** Two prominent buttons (e.g., "Explore Episodes", "Subscribe Now") with distinct, vibrant accent colors, subtle gradients, and clear hover effects (e.g., slight lift, color change, glow).

3.  **Feature Grid/Cards Section:**
    *   **Layout:** A responsive grid (e.g., 3 columns on desktop, stacking on mobile).
    *   **Card Design:**
        *   Dark, semi-transparent background (e.g., `neutral-800/50`).
        *   Subtle border (e.g., `neutral-700`) that changes color or glows on hover (e.g., `primary-500/50`).
        *   Clean, simple icons (monochromatic, perhaps with an accent color).
        *   Concise title and description.
        *   **Interactivity:** On hover, the card should subtly lift, and its border/icon should glow or change color.

4.  **Call to Action (CTA) Section (Mid-page):**
    *   **Background:** A subtle, dark gradient or a solid dark color.
    *   **Headline:** Clear and action-oriented (e.g., "Ready to Get Started?").
    *   **Buttons:** Prominent buttons similar to the Hero section, encouraging "Watch Demo" (linking to a video modal) and "Subscribe Now."

5.  **Global Footer:**
    *   **Design:** Simplified, minimalist, dark background.
    *   **Elements:** Copyright information, essential links (Privacy Policy, Terms of Service, Contact).
    *   **Branding:** Small Laika Bot logo (`laika-bot.png`) and "Laika Media" text.

**Technical Considerations (for the AI tool):**
*   Generate a Next.js project structure.
*   Utilize Tailwind CSS for styling.
*   Ensure all images are optimized for performance.
*   Prioritize semantic HTML and accessibility.

**Expected Output from Bolt.net / v0:**
A high-fidelity, interactive Next.js prototype that embodies the described design philosophy and includes the specified components, ready for further development.
