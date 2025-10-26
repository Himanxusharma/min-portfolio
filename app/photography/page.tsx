'use client'

import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { getAllPhotos, getCategories } from '../data/photography'

export default function Photography() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        setSelectedImage(null)
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const allPhotos = getAllPhotos()
  const categories = getCategories()

  // Filter photos based on search query and category
  const filteredPhotos = allPhotos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photo.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photo.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = !selectedCategory || photo.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 relative">
            {/* Floating particles background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
              <div className="absolute top-12 sm:top-20 right-12 sm:right-16 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-6 sm:bottom-10 left-12 sm:left-20 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-10 sm:bottom-16 right-6 sm:right-10 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3 sm:mb-4 md:mb-6 relative"
              style={{
                transform: `translateY(${-scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative">
                Photography
                {/* Underline animation */}
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-1000 group-hover:w-full" 
                     style={{ width: `${Math.min(scrollY * 0.5, 100)}%` }} />
              </span>
            </h1>
            
            <p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-4 relative"
              style={{
                transform: `translateY(${-scrollY * 0.05}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative">
                Capturing moments, emotions, and the beauty in everyday life
                {/* Decorative dots - hidden on very small screens */}
                <span className="hidden sm:inline absolute -right-2 -top-1 text-primary/40 text-xs">•</span>
                <span className="hidden sm:inline absolute -left-2 -bottom-1 text-accent/40 text-xs">•</span>
              </span>
            </p>
            
            {/* Animated camera icon - responsive positioning */}
            <div 
              className="absolute -right-2 sm:-right-4 md:-right-8 top-1/2 transform -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-500 hidden sm:block"
              style={{
                transform: `translateY(${-scrollY * 0.08}px) translateX(${scrollY * 0.02}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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
                  placeholder="Search photos by title, description, or location..."
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
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-background/60 backdrop-blur-md border border-border/40 rounded-full px-4 py-2 pr-8 text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Clear Filters */}
                {(searchQuery || selectedCategory) && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('')
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
                  {filteredPhotos.length === allPhotos.length 
                    ? `Showing all ${allPhotos.length} photos`
                    : `Showing ${filteredPhotos.length} of ${allPhotos.length} photos`
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Photo Gallery or No Results */}
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="max-w-md mx-auto">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-2">No photos found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('')
                  }}
                  className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group cursor-pointer relative overflow-hidden rounded-xl sm:rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                style={{
                  transform: `translateY(${-scrollY * 0.02 * (index + 1)}px)`,
                  transition: 'transform 0.1s ease-out',
                  animationDelay: `${index * 100}ms`
                }}
                onClick={() => setSelectedImage(photo.src)}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary/20 to-transparent rounded-br-xl sm:rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-xl sm:rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500" />
                  
                  {/* Photo number indicator */}
                  <div className="absolute top-3 left-3 w-6 h-6 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs text-white font-medium">{index + 1}</span>
                  </div>
                  
                  {/* Hover Content with enhanced animation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border border-white/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <p className="text-sm font-light">View Full Size</p>
                    </div>
                  </div>
                  
                  {/* Enhanced floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.1s' }} />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.7s' }} />
                    <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.9s' }} />
                  </div>
                </div>
                
                {/* Photo Info with enhanced styling */}
                <div className="p-3 sm:p-4 md:p-6 relative">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-4 sm:left-6 right-4 sm:right-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  
                  <h3 className="text-xs sm:text-sm md:text-base font-light text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 relative">
                    <span className="relative z-10">{photo.title}</span>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-primary/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                    {photo.description}
                  </p>
                  
                  {/* Decorative dots */}
                  <div className="flex space-x-1 mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-primary/40 rounded-full" />
                    <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/40 rounded-full" />
                    <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-primary/20 rounded-full" />
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
          
          {/* Creative Section Divider */}
          <div className="mt-12 sm:mt-16 md:mt-20 mb-6 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1 max-w-12 sm:max-w-16 md:max-w-20" />
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/40 rounded-full animate-pulse" />
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1 max-w-12 sm:max-w-16 md:max-w-20" />
            </div>
          </div>

        </div>
      </section>

      {/* Enhanced Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
            <div className="absolute top-12 sm:top-20 right-12 sm:right-20 w-0.5 h-0.5 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-12 sm:bottom-20 left-12 sm:left-20 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-0.5 h-0.5 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="relative w-full h-full flex flex-col items-center justify-center max-w-6xl mx-auto">
            {/* Image with enhanced styling */}
            <div className="relative mb-4 sm:mb-6 group">
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                style={{
                  maxWidth: '95vw',
                  width: 'auto',
                  height: 'auto'
                }}
                loading="eager"
                decoding="async"
                sizes="95vw"
              />
              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-white/10 transition-all duration-500" />
            </div>
            
            {/* Enhanced Photo Info */}
            {(() => {
              const selectedPhoto = allPhotos.find(photo => photo.src === selectedImage);
              return selectedPhoto ? (
                <div className="text-center text-white max-w-xs sm:max-w-lg md:max-w-2xl px-2 sm:px-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-3 relative">
                    <span className="relative z-10">{selectedPhoto.title}</span>
                    {/* Decorative underline */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                    {selectedPhoto.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="flex justify-center space-x-1 sm:space-x-2 mt-3 sm:mt-4">
                    <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/60 rounded-full" />
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary/60 rounded-full" />
                    <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-accent/60 rounded-full" />
                  </div>
                </div>
              ) : null;
            })()}
            
            {/* Enhanced Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10 hover:scale-110 hover:rotate-90 border border-white/20"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
