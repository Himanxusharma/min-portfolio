export type MediaType = 'twitter' | 'medium' | 'youtube' | 'linkedin' | 'substack';

export interface Thought {
  id: string;
  platform: MediaType;
  title: string;
  description?: string;
  url: string;
  embedUrl?: string; // For platforms that need custom embed URLs
  publishedDate?: string;
  thumbnail?: string;
  author?: string;
  tags?: string[];
}

export const thoughts: Thought[] = [
  {
    id: 'twitter-1',
    platform: 'twitter',
    title: 'Design thinking in everyday life',
    description: 'How design principles can be applied beyond the screen',
    url: 'https://twitter.com/yourhandle/status/1234567890',
    embedUrl: 'https://twitter.com/yourhandle/status/1234567890', // Twitter embed URL
    publishedDate: '2024-01-15',
    tags: ['Design', 'UX', 'Philosophy']
  },
  {
    id: 'medium-1',
    platform: 'medium',
    title: 'The Art of Minimalism in Web Design',
    description: 'Exploring how less can be more in modern web interfaces',
    url: 'https://medium.com/@yourhandle/the-art-of-minimalism',
    publishedDate: '2024-01-10',
    tags: ['Design', 'Web Development', 'Minimalism']
  },
  {
    id: 'youtube-1',
    platform: 'youtube',
    title: 'Building a Portfolio Website',
    description: 'A walkthrough of creating a modern portfolio with Next.js',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // YouTube embed URL
    publishedDate: '2024-01-05',
    thumbnail: '/images/thoughts/youtube-thumb.jpg',
    tags: ['Tutorial', 'Next.js', 'Web Development']
  },
  {
    id: 'linkedin-1',
    platform: 'linkedin',
    title: 'Career Reflections: Lessons Learned',
    description: 'Insights from my journey in tech and design',
    url: 'https://www.linkedin.com/posts/himanshusharma08_career-tech-design-activity-1234567890',
    publishedDate: '2024-01-01',
    tags: ['Career', 'Tech', 'Growth']
  },
  {
    id: 'substack-1',
    platform: 'substack',
    title: 'Weekly Thoughts on Technology',
    description: 'My weekly newsletter on tech trends and innovations',
    url: 'https://yourhandle.substack.com/p/weekly-thoughts',
    publishedDate: '2024-01-20',
    tags: ['Newsletter', 'Technology', 'Trends']
  }
];

// Helper function to get all thoughts
export const getAllThoughts = (): Thought[] => {
  return thoughts;
};

// Helper function to get thought by ID
export const getThoughtById = (id: string): Thought | undefined => {
  return thoughts.find(thought => thought.id === id);
};

// Helper function to get thoughts by platform
export const getThoughtsByPlatform = (platform: MediaType): Thought[] => {
  return thoughts.filter(thought => thought.platform === platform);
};

// Helper function to get all available platforms
export const getAvailablePlatforms = (): MediaType[] => {
  return Array.from(new Set(thoughts.map(thought => thought.platform))) as MediaType[];
};

// Helper function to get thoughts by tag
export const getThoughtsByTag = (tag: string): Thought[] => {
  return thoughts.filter(thought => thought.tags?.includes(tag));
};

// Helper function to get all unique tags
export const getAllTags = (): string[] => {
  const allTags = thoughts.flatMap(thought => thought.tags || []);
  return Array.from(new Set(allTags)).sort();
};

