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
    },
    {
        id: 'mental-health-companion',
        name: 'Mental Health Companion',
        sector: 'HealthTech',
        status: 'ideation',
        problemStatement: 'Many people struggle with mental health in isolation, lacking accessible and personalized support.',
        solution: 'AI-powered mental health companion that provides 24/7 emotional support and personalized wellness guidance.',
        whyItMatters: 'Improves mental health accessibility, reduces stigma, and provides immediate support when needed most.',
        howItWillWork: 'Users interact with an AI companion through natural conversation. The system uses sentiment analysis, mood tracking, and personalized interventions to provide support, resources, and professional referrals when needed.',
        coreFeatures: ['24/7 AI conversation', 'Mood tracking & analytics', 'Personalized interventions', 'Professional referrals', 'Privacy-first design'],
        tags: ['AI', 'Mental Health', 'Wellness', 'Accessibility'],
        visual: '/images/ideas/mental-health.jpg',
        note: 'This platform prioritizes user privacy and provides a safe space for mental health support, complementing rather than replacing professional care.'
    },
    {
        id: 'sustainable-fashion-platform',
        name: 'Sustainable Fashion Platform',
        sector: 'FashionTech',
        status: 'ideation',
        problemStatement: 'Fast fashion creates massive waste and environmental damage, while consumers want sustainable options but struggle to find them.',
        solution: 'A marketplace connecting consumers with verified sustainable fashion brands and providing transparency in supply chains.',
        whyItMatters: 'Reduces fashion waste, supports ethical brands, and educates consumers about sustainable choices.',
        howItWillWork: 'Brands undergo sustainability verification. Consumers can filter by environmental impact, ethical practices, and materials. The platform provides detailed supply chain transparency and carbon footprint data for each product.',
        coreFeatures: ['Sustainability verification', 'Supply chain transparency', 'Carbon footprint tracking', 'Ethical brand directory', 'Consumer education'],
        tags: ['Sustainability', 'Fashion', 'Transparency', 'E-commerce'],
        visual: '/images/ideas/sustainable-fashion.jpg',
        note: 'This platform aims to make sustainable fashion the default choice by making it easy to discover, understand, and purchase ethical clothing.'
    },
    {
        id: 'remote-learning-optimizer',
        name: 'Remote Learning Optimizer',
        sector: 'EdTech',
        status: 'ideation',
        problemStatement: 'Students struggle with focus and engagement in remote learning environments, leading to decreased academic performance.',
        solution: 'AI-powered learning platform that adapts to individual learning styles and optimizes the remote learning experience.',
        whyItMatters: 'Improves learning outcomes, increases engagement, and makes education more accessible and personalized.',
        howItWillWork: 'The platform analyzes learning patterns, attention spans, and preferences to create personalized study schedules, break reminders, and interactive content. It uses gamification and adaptive learning techniques to maintain engagement.',
        coreFeatures: ['Personalized learning paths', 'Attention monitoring', 'Adaptive content delivery', 'Gamification elements', 'Progress analytics'],
        tags: ['Education', 'AI', 'Personalization', 'Remote Learning'],
        visual: '/images/ideas/remote-learning.jpg',
        note: 'This solution addresses the unique challenges of remote learning while maintaining the flexibility and accessibility that makes it valuable.'
    },
    {
        id: 'community-waste-reduction',
        name: 'Community Waste Reduction',
        sector: 'CleanTech',
        status: 'live',
        problemStatement: 'Communities generate excessive waste with limited recycling and reuse opportunities, leading to environmental degradation.',
        solution: 'Community-driven platform that connects neighbors for waste sharing, recycling, and upcycling initiatives.',
        whyItMatters: 'Reduces landfill waste, builds community connections, and promotes circular economy principles at the local level.',
        howItWillWork: 'Residents can list items they want to give away, request items they need, or organize community recycling events. The platform includes gamification elements like community waste reduction challenges and rewards.',
        coreFeatures: ['Item sharing marketplace', 'Community challenges', 'Recycling event coordination', 'Waste tracking', 'Local business partnerships'],
        tags: ['Community', 'Sustainability', 'Circular Economy', 'Local Impact'],
        visual: '/images/ideas/community-waste.jpg',
        note: 'This platform leverages community engagement and gamification to create a collective impact on waste reduction while building stronger neighborhood connections.'
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
