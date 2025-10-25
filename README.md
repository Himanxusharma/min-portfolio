# Himanshu Sharma - Minimal Portfolio

A minimal, aesthetic portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Minimal Design**: Clean, focused layout with plenty of whitespace
- **Responsive**: Optimized for all screen sizes
- **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Performance**: Fast loading with optimized images and code splitting
- **Accessibility**: Semantic HTML and keyboard navigation
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
min-portfolio/
├── app/
│   ├── components/
│   │   └── Navigation.tsx
│   ├── ideas/
│   │   └── page.tsx
│   ├── thoughts/
│   │   └── page.tsx
│   ├── photography/
│   │   └── page.tsx
│   ├── journey/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design Philosophy

- **Minimalism**: Less is more approach with clean typography
- **Typography**: Geist font family for modern, readable text
- **Color**: Subtle color palette with light/dark mode support
- **Spacing**: Generous whitespace for breathing room
- **Animations**: Subtle transitions and hover effects

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

1. **Home** (`/`) - Main landing page with headline "This is how I think"
2. **Ideas** (`/ideas`) - Creative concepts and design explorations
3. **Thoughts** (`/thoughts`) - Blog posts and reflections
4. **Photography** (`/photography`) - Visual portfolio
5. **Journey** (`/journey`) - Career timeline and milestones
6. **Contact** (`/contact`) - Get in touch form and social links

## 🎯 Customization

### Colors
Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 20%;
  /* ... other colors */
}
```

### Typography
Update font imports in `app/layout.tsx` and `tailwind.config.js`

### Content
- Update personal information in `app/layout.tsx`
- Modify page content in respective page files
- Add your own images to the `public/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Connect GitHub repository
- **DigitalOcean**: Use App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Himanshu Sharma
