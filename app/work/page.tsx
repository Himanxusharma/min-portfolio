'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../components/Navigation'
import { getAllIdeas } from '../data/ideas'

export default function Work() {
  const [scrollY, setScrollY] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSector, setSelectedSector] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [tiltStyles, setTiltStyles] = useState<{[key: string]: {x: number, y: number}}>({})
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const allIdeas = getAllIdeas()
  
  // Get unique sectors and tags for filters
  const sectors = Array.from(new Set(allIdeas.map(idea => idea.sector))).sort()
  const allTags = allIdeas.flatMap(idea => idea.tags)
  const uniqueTags = Array.from(new Set(allTags)).sort()

  // Filter ideas based on search query, sector, tag, and status
  const filteredIdeas = allIdeas.filter(idea => {
    const matchesSearch = idea.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         idea.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         idea.solution.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesSector = !selectedSector || idea.sector === selectedSector
    const matchesTag = !selectedTag || idea.tags.includes(selectedTag)
    const matchesStatus = !selectedStatus || idea.status === selectedStatus
    
    return matchesSearch && matchesSector && matchesTag && matchesStatus
  })

  // Helper function to get status colors and text
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'ideation':
        return { color: 'gray', text: 'Ideation', bgColor: 'bg-gray-500' }
      case 'brainstorming':
        return { color: 'yellow', text: 'Brainstorming', bgColor: 'bg-yellow-500' }
      case 'building':
        return { color: 'green', text: 'Building', bgColor: 'bg-green-500' }
      case 'live':
        return { color: 'red', text: 'Live', bgColor: 'bg-red-500' }
      default:
        return { color: 'gray', text: 'Ideation', bgColor: 'bg-gray-500' }
    }
  }

  // 3D tilt handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, ideaId: string) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10 // Adjust tilt intensity
    const rotateY = (centerX - x) / 10
    
    setTiltStyles(prev => ({
      ...prev,
      [ideaId]: { x: rotateX, y: rotateY }
    }))
  }

  const handleMouseLeave = (ideaId: string) => {
    setTiltStyles(prev => ({
      ...prev,
      [ideaId]: { x: 0, y: 0 }
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 relative">
            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>


            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3 sm:mb-4 md:mb-6 relative"
              style={{
                transform: `translateY(${-scrollY * 0.08}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative inline-block">
                Work
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-1000 group-hover:w-full" 
                     style={{ width: `${Math.min(scrollY * 0.5, 100)}%` }} />
              </span>
            </h1>
            
            <p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 relative mb-6 sm:mb-8"
              style={{
                transform: `translateY(${-scrollY * 0.12}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              What I build — live products, extensions, and tools shipped into the world.
            </p>
            
            <p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 relative"
              style={{
                transform: `translateY(${-scrollY * 0.06}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              From AI prompt engineering to developer browser utilities
            </p>

            {/* Animated underline */}
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 sm:mb-12 relative">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search work by name, problem, or solution..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                {/* Sector Filter */}
                <div className="relative">
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="appearance-none bg-background/60 backdrop-blur-md border border-border/40 rounded-full px-4 py-2 pr-8 text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="">All Sectors</option>
                    {sectors.map(sector => (
                      <option key={sector} value={sector}>{sector}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Tag Filter */}
                <div className="relative">
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="appearance-none bg-background/60 backdrop-blur-md border border-border/40 rounded-full px-4 py-2 pr-8 text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="">All Tags</option>
                    {uniqueTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="appearance-none bg-background/60 backdrop-blur-md border border-border/40 rounded-full px-4 py-2 pr-8 text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="">All Status</option>
                    <option value="ideation">Ideation</option>
                    <option value="brainstorming">Brainstorming</option>
                    <option value="building">Building</option>
                    <option value="live">Live</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Clear Filters */}
                {(searchQuery || selectedSector || selectedTag || selectedStatus) && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedSector('')
                      setSelectedTag('')
                      setSelectedStatus('')
                    }}
                    className="px-4 py-2 bg-muted/20 hover:bg-muted/30 text-muted-foreground hover:text-foreground rounded-full text-sm transition-all duration-300 flex items-center space-x-1"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Clear</span>
                  </button>
                )}
              </div>

              {/* Results Count */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredIdeas.length === allIdeas.length 
                    ? `Showing all ${allIdeas.length} projects`
                    : `Showing ${filteredIdeas.length} of ${allIdeas.length} projects`
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Ideas Grid or No Results */}
          {filteredIdeas.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="max-w-md mx-auto">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedSector('')
                    setSelectedTag('')
                  }}
                  className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredIdeas.map((idea, index) => (
              <div
                key={idea.id}
                onClick={() => router.push(`/work/${idea.id}`)}
                className="group cursor-pointer"
                style={{
                  transform: `translateY(${-scrollY * 0.05}px)`,
                  transition: 'transform 0.1s ease-out',
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div 
                  className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl lg:hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-105 group-hover:bg-background/80 h-full overflow-hidden"
                  onMouseMove={(e) => handleMouseMove(e, idea.id)}
                  onMouseLeave={() => handleMouseLeave(idea.id)}
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltStyles[idea.id]?.x || 0}deg) rotateY(${tiltStyles[idea.id]?.y || 0}deg) translateZ(0) scale(1.05)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.2s ease-out'
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating particles inside card */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.5}s`,
                          animation: 'float 3s ease-in-out infinite'
                        }}
                      />
                    ))}
                  </div>
                  
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl border border-transparent bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{ 
                         background: 'linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, transparent, transparent)',
                         backgroundClip: 'padding-box, border-box, border-box',
                         backgroundOrigin: 'padding-box, border-box, border-box'
                       }} />
                  
                  <div className="relative z-10">
                    {/* Status Badge with Blinking Dot */}
                    <div className="flex items-center justify-start mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          {/* Pulsing ring effect - outer ring */}
                          <div 
                            className={`absolute ${getStatusConfig(idea.status).bgColor} rounded-full opacity-40 animate-ping`}
                            style={{ 
                              width: '16px',
                              height: '16px',
                              animationDuration: '2s',
                              animationIterationCount: 'infinite'
                            }}
                          />
                          {/* Pulsing ring effect - middle ring */}
                          <div 
                            className={`absolute ${getStatusConfig(idea.status).bgColor} rounded-full opacity-60 animate-pulse`}
                            style={{ 
                              width: '12px',
                              height: '12px',
                              animationDuration: '1.5s',
                              animationIterationCount: 'infinite'
                            }}
                          />
                          {/* Main dot with glow */}
                          <div 
                            className={`w-3 h-3 ${getStatusConfig(idea.status).bgColor} rounded-full relative z-10`}
                          />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {getStatusConfig(idea.status).text}
                        </span>
                      </div>
                    </div>

                    {/* Idea Header */}
                    <div className="mb-3 sm:mb-4 lg:mb-6">
                      <h3 className="text-base sm:text-lg lg:text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative">
                        {idea.name}
                        <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                        {idea.problemStatement}
                      </p>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 mb-3 sm:mb-4">
                      {idea.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {idea.tags.length > 2 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-muted/20 text-muted-foreground text-xs rounded-full group-hover:bg-muted/30 transition-colors duration-300">
                          +{idea.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    {/* Read More Indicator */}
                    <div className="flex items-center text-primary text-xs sm:text-sm font-medium group-hover:text-primary/80 transition-colors duration-300">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">View Project</span>
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
