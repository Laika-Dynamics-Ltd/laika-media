export interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  tags: string[];
  videoUrl: string;
  imageUrl: string;
}

export const episodes: Episode[] = [
  {
    id: '1',
    title: 'Building AI Agents with Claude',
    description: 'Learn how to create intelligent agents using Anthropic\'s Claude API for complex workflows.',
    duration: '24 min',
    tags: ['Claude', 'AI', 'Python'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube URL
    imageUrl: '/placeholder-ai.jpg',
  },
  {
    id: '2',
    title: 'Next.js 15 Deep Dive',
    description: 'Explore the latest features in Next.js 15 including the new App Router improvements.',
    duration: '32 min',
    tags: ['Next.js', 'React', 'TypeScript'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube URL
    imageUrl: '/placeholder-nextjs.jpg',
  },
  {
    id: '3',
    title: 'CLI Tools with Go',
    description: 'Build powerful command-line interfaces using Go\'s robust standard library.',
    duration: '28 min',
    tags: ['Go', 'CLI', 'DevTools'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube URL
    imageUrl: '/placeholder-go.jpg',
  },
  {
    id: '4',
    title: 'Advanced Docker for Developers',
    description: 'Master Docker containerization for efficient development and deployment workflows.',
    duration: '45 min',
    tags: ['Docker', 'DevOps', 'Containers'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube URL
    imageUrl: '/placeholder-docker.jpg',
  },
  {
    id: '5',
    title: 'Introduction to WebAssembly',
    description: 'Discover the power of WebAssembly for high-performance web applications.',
    duration: '30 min',
    tags: ['WebAssembly', 'Frontend', 'Performance'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube URL
    imageUrl: '/placeholder-wasm.jpg',
  },
];