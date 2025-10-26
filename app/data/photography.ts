export interface Photo {
    id: string;
    src: string;
    title: string;
    description: string;
    category?: string;
    tags?: string[];
    year?: number;
    location?: string;
    camera?: string;
    settings?: string;
}

export const photos: Photo[] = [
    {
        id: 'art-of-capturing',
        src: '/images/photography/IMG1.png',
        title: 'Art of Capturing',
        description: 'Hands raised in silent devotion to the digital record, eyes fixed on the fleeting spectacle; The true art of clicking is in freezing the pulse of a shared, vibrant now.',
        category: 'Portrait',
        tags: ['Portrait', 'Emotion', 'Moment'],
        year: 2024,
        location: 'Studio',
        camera: 'Canon EOS R5',
        settings: 'f/2.8, 1/125s, ISO 400'
    },
    {
        id: 'beauty-of-night',
        src: '/images/photography/IMG2.png',
        title: 'Beauty of night',
        description: 'The silent fortress of the Keylong mountains stands as a stark, black silhouette against the night. A low, powerful light source casts a dramatic, hazy glow across the atmosphere, illuminating the sky while the peaks remain in profound shadow. It is a moment where starlight and scattered radiance meet, dividing the world into layers of darkness and ethereal light.',
        category: 'Landscape',
        tags: ['Landscape', 'Night', 'Mountains', 'Dramatic'],
        year: 2023,
        location: 'Keylong, Himachal Pradesh',
        camera: 'Sony A7R IV',
        settings: 'f/4.0, 30s, ISO 1600'
    },
    {
        id: 'unmoving-witness',
        src: '/images/photography/IMG3.png',
        title: 'The Unmoving Witness',
        description: 'Perched on the edge, a wild sentinel quietly judges the human spectacle below; he is the timeless native watching the ritual flow of the sacred Ganges. The scene juxtaposes the ancient, stoic mountain range with the fleeting devotional chaos of the bustling ghats.',
        category: 'Wildlife',
        tags: ['Wildlife', 'Contemplation', 'Sacred', 'Nature'],
        year: 2023,
        location: 'Rishikesh, Uttarakhand',
        camera: 'Nikon D850',
        settings: 'f/5.6, 1/250s, ISO 800'
    },
    {
        id: 'neon-collision',
        src: '/images/photography/IMG4.png',
        title: 'Neon Collision',
        description: 'A visceral clash of color as intense, geometric blue laser beams collide with broad, warm orange spotlights. The atmosphere is a high-energy fusion of light and sound, creating a dense, electrified matrix that captures the sensory peak of the night.',
        category: 'Event',
        tags: ['Event', 'Neon', 'Light', 'Energy', 'Night'],
        year: 2024,
        location: 'Concert Venue, Delhi',
        camera: 'Canon EOS R6',
        settings: 'f/2.8, 1/60s, ISO 3200'
    },
    {
        id: 'million-quiet-stories',
        src: '/images/photography/IMG5.png',
        title: 'A Million Quiet Stories',
        description: 'From the elevation of Nahargarh Fort, the Jaipur night unfolds as an immense, glittering darkness. The dense grid of scattered lights is a canvas of human experience, where every single flickering bulb is a tiny, glowing vessel for a different, secret emotion under the vast, silent sky.',
        category: 'Cityscape',
        tags: ['Cityscape', 'Night', 'Urban', 'Stories', 'Emotion'],
        year: 2023,
        location: 'Nahargarh Fort, Jaipur',
        camera: 'Sony A7 III',
        settings: 'f/8.0, 20s, ISO 200'
    }
];

// Helper function to get all photos
export const getAllPhotos = (): Photo[] => {
    return photos;
};

// Helper function to get photo by ID
export const getPhotoById = (id: string): Photo | undefined => {
    return photos.find(photo => photo.id === id);
};

// Helper function to get photos by category
export const getPhotosByCategory = (category: string): Photo[] => {
    return photos.filter(photo => photo.category === category);
};

// Helper function to get photos by tag
export const getPhotosByTag = (tag: string): Photo[] => {
    return photos.filter(photo => photo.tags?.includes(tag));
};

// Helper function to get unique categories
export const getCategories = (): string[] => {
    const categories = photos.map(photo => photo.category).filter(Boolean) as string[];
    return [...new Set(categories)].sort();
};

// Helper function to get unique tags
export const getTags = (): string[] => {
    const allTags = photos.flatMap(photo => photo.tags || []);
    return [...new Set(allTags)].sort();
};

// Helper function to add new photo (for future use)
export const addPhoto = (newPhoto: Photo): void => {
    photos.push(newPhoto);
};

// Helper function to search photos
export const searchPhotos = (query: string): Photo[] => {
    const lowercaseQuery = query.toLowerCase();
    return photos.filter(photo =>
        photo.title.toLowerCase().includes(lowercaseQuery) ||
        photo.description.toLowerCase().includes(lowercaseQuery) ||
        photo.location?.toLowerCase().includes(lowercaseQuery) ||
        photo.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
};
