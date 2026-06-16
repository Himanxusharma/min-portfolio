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
    id: 'medium-1',
    platform: 'medium',
    title: 'Why/How a Vegetarian Could Technically Call Themselves “Non-Vegetarian”',
    description: 'The linguistic and philosophical flaw of defining ourselves by a restriction we never agreed to follow.',
    url: 'https://medium.com/@himanxusharma_86023/who-we-do-not-eat-non-veg-by-choice-are-free-to-say-or-identify-themselves-as-non-vegetarians-bdb8faa2691a',
    publishedDate: '2026-04-14',
    tags: ['Linguistics', 'Philosophy', 'Vegetarianism']
  },
  // {
  //   id: 'youtube-1',
  //   platform: 'youtube',
  //   title: 'Building a Portfolio Website',
  //   description: 'A walkthrough of creating a modern portfolio with Next.js',
  //   url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  //   embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // YouTube embed URL
  //   publishedDate: '2024-01-05',
  //   thumbnail: '/images/thoughts/youtube-thumb.jpg',
  //   tags: ['Tutorial', 'Next.js', 'Web Development']
  // },
  {
    id: 'linkedin-1',
    platform: 'linkedin',
    title: 'Honored to be the final-year major projects evaluator',
    description: 'Insights from my journey in tech and design',
    url: 'https://www.linkedin.com/posts/himanshusharma08_once-defending-projects-now-evaluating-activity-7462108060023595009-Zrgo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACoNW18B7s2DARdPDvSJGdVK0rrc6MhTPeM',
    publishedDate: '2026-06-17',
    tags: ['Career', 'Tech', 'Growth']
  },
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

