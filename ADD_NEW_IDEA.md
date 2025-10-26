# How to Add New Ideas

## Quick Guide

To add a new idea to your portfolio, simply edit the `app/data/ideas.ts` file and add a new idea object to the `ideas` array.

## Step-by-Step Instructions

### 1. Open the Ideas Data File
```bash
app/data/ideas.ts
```

### 2. Add Your New Idea
Add a new object to the `ideas` array with the following structure:

```typescript
{
  id: 'your-unique-id',                    // Unique identifier (lowercase, hyphens)
  name: 'Your Idea Name',                  // Display name
  sector: 'TechSector',                    // Industry sector
  problemStatement: 'Describe the problem...',
  solution: 'Describe your solution...',
  whyItMatters: 'Explain the impact...',
  howItWillWork: 'Describe the implementation...',
  coreFeatures: [                          // Array of feature strings
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  tags: ['Tag1', 'Tag2', 'Tag3'],         // Array of tag strings
  visual: '/images/ideas/your-image.jpg', // Optional image path
  note: 'Additional notes or context...'
}
```

### 3. Example: Adding a New Idea

```typescript
{
  id: 'smart-home-energy',
  name: 'Smart Home Energy Optimizer',
  sector: 'CleanTech',
  problemStatement: 'Homeowners waste energy and money due to inefficient heating, cooling, and appliance usage without real-time insights.',
  solution: 'AI-powered home energy management system that optimizes energy consumption and reduces costs through smart automation.',
  whyItMatters: 'Reduces energy bills by 20-30%, decreases carbon footprint, and makes homes more sustainable and cost-effective.',
  howItWillWork: 'Sensors monitor energy usage patterns. AI learns household routines and automatically adjusts HVAC, lighting, and appliances. Mobile app provides real-time insights and manual controls.',
  coreFeatures: [
    'Real-time energy monitoring',
    'AI-powered automation',
    'Cost savings analytics',
    'Mobile app control',
    'Integration with smart devices'
  ],
  tags: ['AI', 'IoT', 'Sustainability', 'Smart Home', 'Energy'],
  visual: '/images/ideas/smart-energy.jpg',
  note: 'This solution makes energy efficiency accessible to all homeowners, regardless of technical expertise.'
}
```

### 4. Available Sectors
Choose from these predefined sectors:
- `AgTech` - Agriculture Technology
- `HealthTech` - Healthcare Technology  
- `FashionTech` - Fashion Technology
- `EdTech` - Education Technology
- `CleanTech` - Clean Technology
- `MobilityTech` - Transportation Technology
- `FinTech` - Financial Technology
- `PropTech` - Property Technology

### 5. That's It!
Your new idea will automatically appear on both the main Ideas page and have its own detailed page. No other files need to be modified.

## Tips

- **ID Format**: Use lowercase letters and hyphens (e.g., `smart-home-energy`)
- **Image**: Place images in `/public/images/ideas/` directory
- **Tags**: Use 3-6 relevant tags for better categorization
- **Content**: Keep descriptions concise but informative
- **Order**: New ideas appear at the top of the list by default

## File Structure
```
app/
├── data/
│   └── ideas.ts          # ← Edit this file
├── ideas/
│   ├── page.tsx          # Main ideas page
│   └── [id]/
│       └── page.tsx      # Individual idea pages
└── public/
    └── images/
        └── ideas/        # ← Add images here
```
