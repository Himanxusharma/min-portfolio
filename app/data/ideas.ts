export interface IdeaLinks {
    website?: string;
    chromeExtension?: string;
    android?: string;
    ios?: string;
}

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
    links?: IdeaLinks;
}

export const ideas: Idea[] = [
    {
        id: 'prooompthub',
        name: 'prooompthub',
        sector: 'AI / Productivity',
        status: 'live',
        problemStatement: 'Most people know what they want from AI but struggle to phrase it well. Vague prompts waste tokens, produce weak answers, and force endless rewrites — especially when switching between ChatGPT, Claude, Cursor, Gemini, and other tools that each expect different prompt styles.',
        solution: 'prooompthub turns a rough goal into a polished, destination-ready prompt in one step. A smart web app and Chrome side panel let you describe what you need, pick domain, tone, and detail level, then generate an engineered prompt optimized for where you\'ll use it — ChatGPT, Claude, Midjourney, Cursor, Gemini, or any modern LLM.',
        whyItMatters: 'Better prompts mean better AI output with less trial-and-error. For creators, developers, and knowledge workers, that saves hours every week, cuts token spend, and makes AI feel like a reliable collaborator instead of a guessing game.',
        howItWillWork: 'Describe your goal in plain language on the web app or Chrome side panel (⌘/Ctrl+Shift+P). Choose what you\'re creating, domain, tone, and how detailed the result should be. Pick the destination tool so the prompt is shaped for that surface — not which model runs on our servers. A 4-LLM fallback router engineers the final prompt using best-practice patterns. Copy the result, open it in your AI tool, or refine selected text via right-click in the extension. One account syncs history and templates across web, Chrome, and Android.',
        coreFeatures: [
            'One-input prompt engineering for ChatGPT, Claude, Cursor, Gemini, Midjourney & more',
            '4-LLM fallback router with domain-aware meta-prompts (marketing, code, design, research, business)',
            'Destination-aware output — prompts tuned for where you\'ll paste them',
            'Chrome extension side panel + keyboard shortcut (⌘/Ctrl+Shift+P)',
            'Right-click selected text to refine in the side panel',
            'Domain, tone, detail level & optional audience/context controls',
            'Free tier: 1 try/day without sign-up; 3/day with account — Pro for history, templates, chains & token saver',
            'Cross-platform: web app, Chrome extension (live), Android (launching soon), iOS (coming soon)',
            'Unified account — limits, history, and paid features follow you everywhere',
        ],
        tags: ['AI', 'Prompt Engineering', 'SaaS', 'Chrome Extension', 'Productivity', 'LLM'],
        note: 'Live at prooompthub.com — built for prompt nerds who want smarter input and sharper output without leaving the tools they already use.',
        links: {
            website: 'https://www.prooompthub.com/',
            chromeExtension: 'https://chromewebstore.google.com/detail/prooompthub-%E2%80%94-prompt-smar/eagijcndpobanejcpgmmgnalfgeckkpm',
        },
    },
    {
        id: 'easy-chrome',
        name: 'Easy Chrome',
        sector: 'Developer Tools',
        status: 'live',
        problemStatement: 'Developers juggle dozens of tabs, repeated hard refreshes, scattered notes, and daily URLs across tools that feel bloated or privacy-invasive. There is no lightweight toolbar that brings tab management, browser automation, and note-taking into one clean, local-first Chrome experience.',
        solution: 'Easy Chrome is a minimalist Chrome extension — a browser automation toolbar built for developers. It packs tab management, note-taking, URL organization, and everyday browser utilities into one unobtrusive interface. Hard refresh, auto-refresh, screenshots, picture-in-picture, and smart tab archiving are always one click away.',
        whyItMatters: 'Developers spend hours inside the browser. A focused, privacy-respecting toolbar cuts context-switching, speeds up repetitive workflows, and keeps essential tools visible without cluttering the screen or sending data to the cloud.',
        howItWillWork: 'Install from the Chrome Web Store and open the toolbar from the extension icon. Manage tabs, capture notes, and organize daily URLs from a single panel. Use hard refresh with cache clearing, schedule auto-refresh, take screenshots, enable picture-in-picture, or archive tabs intelligently — all from the same minimal UI. Everything stays on your device; no account required.',
        coreFeatures: [
            'Minimalist developer toolbar — tab management, notes & URL organization in one place',
            'Hard refresh with cache clearing',
            'Auto-refresh scheduling',
            'Daily URL management',
            'Screenshot capture',
            'Picture-in-picture mode',
            'Smart tab archiving',
            'Browser automation utilities for common dev workflows',
            '100% local storage — privacy-first, no data collection',
        ],
        tags: ['Chrome Extension', 'Developer Tools', 'Productivity', 'Tab Management', 'Privacy', 'Automation'],
        note: 'Live on the Chrome Web Store — a clean, minimalist extension by OOTM Lab that delivers robust browser utilities without the bloat.',
        links: {
            chromeExtension: 'https://chromewebstore.google.com/detail/easy-chrome/bieoielklphenjfjaedidhjeolddfgci',
        },
    },
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
