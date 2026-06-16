export interface Idea {
    id: string;
    name: string;
    sector: string;
    status: 'ideation' | 'brainstorming' | 'building' | 'live';
    problemStatement: string;
    solution: string;
    whyItMatters: string;
    howItWillWork: string;
    coreFeatures: string[];
    tags: string[];
    visual?: string;
    note: string;
}

export const ideas: Idea[] = [
    {
        id: 'parkshare',
        name: 'ParkShare',
        sector: 'MobilityTech',
        status: 'ideation',
        problemStatement: 'In cities, drivers waste time and fuel searching for parking, while thousands of private driveways, office lots, and residential spaces sit unused. There\'s no unified platform for people to rent out idle parking spaces or for drivers to book affordable parking on demand.',
        solution: 'ParkShare is a peer-to-peer parking marketplace that connects parking spot owners with drivers. Owners can list and monetize their unused spaces, while drivers can discover, book, and pay for parking through a live, map-based app — fast, secure, and convenient.',
        whyItMatters: 'Efficient parking saves time, fuel, and stress for drivers, reduces congestion in crowded areas, and creates a new source of passive income for individuals and businesses — contributing to smarter, more sustainable cities.',
        howItWillWork: 'List: Owners add their parking spot details, availability, and price. Discover: Drivers search nearby parking on a live map. Book & Pay: Drivers reserve the spot, pay securely, and navigate there. Earn & Review: Owners earn instantly; both sides rate the experience.',
        coreFeatures: ['Live GPS map search', 'Filter by duration, price, vehicle type', 'Instant booking & secure payments', 'Turn-by-turn navigation', 'Real-time availability management', 'Analytics dashboard for owners', 'Review & rating system', 'Commission-based revenue model'],
        tags: ['Mobility', 'SmartCity', 'SharingEconomy', 'PropTech', 'Sustainability', 'Marketplace'],
        visual: '/images/ideas/parkshare.jpg',
        note: 'ParkShare bridges the gap between unused urban spaces and daily parking demand, creating a win-win ecosystem for citizens and cities alike. It\'s not just a parking app — it\'s a movement toward smarter, shared urban living.'
    },
    {
        id: 'smart-urban-gardening',
        name: 'Smart Urban Gardening',
        sector: 'AgTech',
        status: 'ideation',
        problemStatement: 'Urban dwellers struggle to grow fresh produce in limited spaces with inconsistent results.',
        solution: 'AI-powered vertical gardening system with automated care and real-time guidance.',
        whyItMatters: 'Reduces food costs, improves nutrition, and promotes sustainable living in urban environments.',
        howItWillWork: 'Users set up vertical garden units with integrated sensors. The AI system monitors plant health, adjusts watering schedules, and provides personalized growing tips through a mobile app. Machine learning algorithms optimize growing conditions based on plant species and environmental factors.',
        coreFeatures: ['Automated watering & lighting', 'Plant health monitoring', 'Mobile app guidance', 'Space-efficient design'],
        tags: ['IoT', 'AI', 'Sustainability', 'Urban Living'],
        visual: '/images/ideas/smart-garden.jpg',
        note: 'This concept combines IoT sensors, machine learning, and user-friendly design to make urban gardening accessible to everyone, regardless of their gardening experience.'
    }
];

// Helper function to get idea by ID
export const getIdeaById = (id: string): Idea | undefined => {
    return ideas.find(idea => idea.id === id);
};

// Helper function to get all ideas
export const getAllIdeas = (): Idea[] => {
    return ideas;
};

// Helper function to add new idea (for future use)
export const addIdea = (newIdea: Idea): void => {
    ideas.push(newIdea);
};

// Helper function to get ideas by sector
export const getIdeasBySector = (sector: string): Idea[] => {
    return ideas.filter(idea => idea.sector === sector);
};

// Helper function to get ideas by tags
export const getIdeasByTag = (tag: string): Idea[] => {
    return ideas.filter(idea => idea.tags.includes(tag));
};
