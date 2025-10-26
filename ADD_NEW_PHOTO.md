# How to Add New Photos

## Quick Guide

To add a new photo to your portfolio, simply edit the `app/data/photography.ts` file and add a new photo object to the `photos` array.

## Step-by-Step Instructions

### 1. Open the Photography Data File
```bash
app/data/photography.ts
```

### 2. Add Your New Photo
Add a new object to the `photos` array with the following structure:

```typescript
{
  id: 'your-unique-id',                    // Unique identifier (lowercase, hyphens)
  src: '/images/photography/your-image.jpg', // Image path in public folder
  title: 'Your Photo Title',               // Display title
  description: 'Your photo description...', // Detailed description
  category: 'Category',                    // Optional: Portrait, Landscape, Wildlife, etc.
  tags: ['Tag1', 'Tag2', 'Tag3'],         // Optional: Array of tag strings
  year: 2024,                             // Optional: Year taken
  location: 'Location Name',               // Optional: Where photo was taken
  camera: 'Camera Model',                  // Optional: Camera used
  settings: 'f/2.8, 1/125s, ISO 400'      // Optional: Camera settings
}
```

### 3. Example: Adding a New Photo

```typescript
{
  id: 'sunset-over-mountains',
  src: '/images/photography/sunset-mountains.jpg',
  title: 'Sunset Over Mountains',
  description: 'A breathtaking sunset painting the mountain peaks in golden light, creating a dramatic silhouette against the evening sky.',
  category: 'Landscape',
  tags: ['Sunset', 'Mountains', 'Golden Hour', 'Nature'],
  year: 2024,
  location: 'Himalayas, India',
  camera: 'Canon EOS R5',
  settings: 'f/8.0, 1/60s, ISO 200'
}
```

### 4. Available Categories
Choose from these predefined categories:
- `Portrait` - People and portraits
- `Landscape` - Natural landscapes and scenery
- `Wildlife` - Animals and nature
- `Event` - Events, concerts, celebrations
- `Cityscape` - Urban photography
- `Street` - Street photography
- `Macro` - Close-up photography
- `Abstract` - Abstract and artistic shots

### 5. Image Requirements
- **Format**: JPG, PNG, or WebP
- **Location**: Place images in `/public/images/photography/` directory
- **Naming**: Use descriptive names (e.g., `sunset-mountains.jpg`)
- **Size**: Optimize for web (recommended max 2MB per image)

### 6. That's It!
Your new photo will automatically appear on the Photography page with search and filter functionality. No other files need to be modified.

## Tips

- **ID Format**: Use lowercase letters and hyphens (e.g., `sunset-over-mountains`)
- **Description**: Write engaging, descriptive text that tells the story
- **Tags**: Use 3-6 relevant tags for better categorization
- **Categories**: Choose the most appropriate category for filtering
- **Metadata**: Include technical details for photography enthusiasts

## Search & Filter Features

Your photos will automatically be searchable by:
- **Title** - Photo name
- **Description** - Detailed description text
- **Location** - Where the photo was taken
- **Tags** - All associated tags

Filter options include:
- **Category** - Filter by photo type
- **Tags** - Filter by specific tags
- **Combined** - Search + category + tag filters work together

## File Structure
```
app/
├── data/
│   └── photography.ts        # ← Edit this file
├── photography/
│   └── page.tsx              # Photography page
└── public/
    └── images/
        └── photography/      # ← Add images here
            ├── your-image.jpg
            └── another-photo.png
```

## Helper Functions Available

The data file includes these helper functions:
```typescript
getAllPhotos()              // Get all photos
getPhotoById(id)            // Get specific photo by ID
getPhotosByCategory(cat)    // Filter by category
getPhotosByTag(tag)         // Filter by tag
getCategories()             // Get all unique categories
getTags()                   // Get all unique tags
searchPhotos(query)         // Search photos by text
addPhoto(newPhoto)          // Add new photo (for future use)
```

## Example Workflow

1. **Add Image**: Upload `my-photo.jpg` to `/public/images/photography/`
2. **Edit Data**: Add photo object to `photos` array in `photography.ts`
3. **Test**: Visit `/photography` to see your new photo
4. **Search**: Use search to find your photo by title or description
5. **Filter**: Use category/tag filters to organize your photos

That's it! Your photography portfolio is now easily maintainable and extensible. 📸✨
