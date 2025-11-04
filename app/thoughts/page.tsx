'use client'

import { useEffect, useState, useMemo } from 'react'
import Navigation from '../components/Navigation'
import { getAllThoughts, getAvailablePlatforms, getAllTags, type MediaType, type Thought } from '../data/thoughts'
import { Twitter, Youtube, BookOpen, Linkedin, FileText, Search, X, ExternalLink } from 'lucide-react'
import MediumEmbed from '../components/MediumEmbed'
import MinimalPreview from '../components/MinimalPreview'

export default function Thoughts() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedPlatform, setSelectedPlatform] = useState<MediaType | 'all'>('all')
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedThought, setSelectedThought] = useState<Thought | null>(null)
  const [tiltStyles, setTiltStyles] = useState<{[key: string]: {x: number, y: number}}>({})

  // Generate particle positions once to prevent re-rendering jumps
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 3
    })),
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Load Twitter widget script
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="platform.twitter.com"]')) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }
  }, [])

  const allThoughts = getAllThoughts()
  const platforms = getAvailablePlatforms()
  const allTags = getAllTags()

  // Filter thoughts
  const filteredThoughts = allThoughts.filter(thought => {
    const matchesPlatform = selectedPlatform === 'all' || thought.platform === selectedPlatform
    const matchesTag = !selectedTag || thought.tags?.includes(selectedTag)
    const matchesSearch = !searchQuery || 
      thought.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thought.description?.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesPlatform && matchesTag && matchesSearch
  })

  // Get platform icon
  const getPlatformIcon = (platform: MediaType) => {
    switch (platform) {
      case 'twitter':
        return <Twitter size={20} />
      case 'youtube':
        return <Youtube size={20} />
      case 'medium':
        return <BookOpen size={20} />
      case 'linkedin':
        return <Linkedin size={20} />
      case 'substack':
        return <FileText size={20} />
      default:
        return <ExternalLink size={20} />
    }
  }

  // Get platform color
  const getPlatformColor = (platform: MediaType) => {
    switch (platform) {
      case 'twitter':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20'
      case 'youtube':
        return 'text-red-400 bg-red-500/10 border-red-500/20'
      case 'medium':
        return 'text-green-400 bg-green-500/10 border-green-500/20'
      case 'linkedin':
        return 'text-blue-600 bg-blue-600/10 border-blue-600/20'
      case 'substack':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/20'
      default:
        return 'text-primary bg-primary/10 border-primary/20'
    }
  }

  // Render embed based on platform
  const renderEmbed = (thought: Thought, embedTiltStyles: {x: number, y: number}) => {
    switch (thought.platform) {
      case 'twitter':
        return (
          <div 
            className="w-full transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${embedTiltStyles.x}deg) rotateY(${embedTiltStyles.y}deg) translateZ(10px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <blockquote 
              className="twitter-tweet"
              data-theme={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
            >
              <a href={thought.url}></a>
            </blockquote>
          </div>
        )
      case 'youtube':
        return (
          <div 
            className="relative w-full transition-transform duration-300 ease-out" 
            style={{ 
              paddingBottom: '56.25%',
              transform: `perspective(1000px) rotateX(${embedTiltStyles.x}deg) rotateY(${embedTiltStyles.y}deg) translateZ(10px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={thought.embedUrl || thought.url.replace('watch?v=', 'embed/')}
              title={thought.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )
      case 'medium':
        return (
          <div
            className="transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${embedTiltStyles.x}deg) rotateY(${embedTiltStyles.y}deg) translateZ(10px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <MediumEmbed
              url={thought.url}
              title={thought.title}
              description={thought.description}
              thumbnail={thought.thumbnail}
            />
          </div>
        )
      case 'linkedin':
      case 'substack':
        return (
          <div
            className="transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${embedTiltStyles.x}deg) rotateY(${embedTiltStyles.y}deg) translateZ(10px)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <MinimalPreview
              platform={thought.platform}
              title={thought.title}
              description={thought.description}
              url={thought.url}
              publishedDate={thought.publishedDate}
            />
          </div>
        )
      default:
        return (
          <div className="w-full p-8 text-center text-muted-foreground">
            <ExternalLink size={48} className="mx-auto mb-4 opacity-50" />
            <p>Click to view on {thought.platform}</p>
          </div>
        )
    }
  }

  // 3D tilt handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, thoughtId: string) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    
    setTiltStyles(prev => ({
      ...prev,
      [thoughtId]: { x: rotateX, y: rotateY }
    }))
  }

  const handleMouseLeave = (thoughtId: string) => {
    setTiltStyles(prev => ({
      ...prev,
      [thoughtId]: { x: 0, y: 0 }
    }))
  }

  const clearFilters = () => {
    setSelectedPlatform('all')
    setSelectedTag('')
    setSearchQuery('')
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      <Navigation />
      
      <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 relative">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3 sm:mb-4 md:mb-6 relative"
              style={{
                transform: `translateY(${-scrollY * 0.08}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative inline-block">
                Thoughts
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-1000" 
                     style={{ width: `${Math.min(scrollY * 0.5, 100)}%` }} />
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Reflections on design, technology, and the creative process
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 sm:mb-12 space-y-4">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search thoughts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 sm:py-3 bg-background/60 backdrop-blur-md border border-border/40 rounded-full text-sm sm:text-base focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Platform and Tag Filters */}
            <div className="flex flex-wrap gap-3 justify-center items-center">
              {/* Platform Filter */}
              <div className="relative">
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value as MediaType | 'all')}
                  className="appearance-none bg-background/60 backdrop-blur-md border border-border/40 rounded-full px-4 py-2 pr-8 text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="all">All Platforms</option>
                  {platforms.map(platform => (
                    <option key={platform} value={platform}>
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Tag Filter */}
              {allTags.length > 0 && (
                <div className="relative">
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="appearance-none bg-background/60 backdrop-blur-md border border-border/40 rounded-full px-4 py-2 pr-8 text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="">All Tags</option>
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Clear Filters */}
              {(selectedPlatform !== 'all' || selectedTag || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm bg-background/60 backdrop-blur-md border border-border/40 rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-center text-sm text-muted-foreground">
              Showing {filteredThoughts.length} of {allThoughts.length} thoughts
            </div>
          </div>

          {/* Thoughts Grid */}
          {filteredThoughts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">No thoughts found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all duration-300"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredThoughts.map((thought) => (
                <div
                  key={thought.id}
                  className="group relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl lg:hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
                  onMouseMove={(e) => handleMouseMove(e, thought.id)}
                  onMouseLeave={() => handleMouseLeave(thought.id)}
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltStyles[thought.id]?.x || 0}deg) rotateY(${tiltStyles[thought.id]?.y || 0}deg) translateZ(0) scale(1.02)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Platform badge */}
                  <div className={`relative z-10 inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border ${getPlatformColor(thought.platform)} mb-4`}>
                    {getPlatformIcon(thought.platform)}
                    <span className="text-xs font-medium capitalize">{thought.platform}</span>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg sm:text-xl font-light text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {thought.title}
                  </h3>

                  {/* Description */}
                  {thought.description && (
                    <p className="relative z-10 text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                      {thought.description}
                    </p>
                  )}

                  {/* Tags */}
                  {thought.tags && thought.tags.length > 0 && (
                    <div className="relative z-10 flex flex-wrap gap-2 mb-4">
                      {thought.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-background/40 border border-border/30 rounded-full text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Embed Preview */}
                  <div className="relative z-10 mt-4 mb-4">
                    {renderEmbed(thought, tiltStyles[thought.id] || { x: 0, y: 0 })}
                  </div>

                  {/* View Link */}
                  <a
                    href={thought.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center space-x-2 text-sm text-primary hover:text-accent transition-colors duration-300 group/link"
                  >
                    <span>View on {thought.platform.charAt(0).toUpperCase() + thought.platform.slice(1)}</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>

                  {/* Published Date */}
                  {thought.publishedDate && (
                    <div className="relative z-10 mt-4 text-xs text-muted-foreground">
                      {new Date(thought.publishedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
