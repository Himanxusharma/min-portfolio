'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ExternalLink, Globe, Chrome } from 'lucide-react'
import Navigation from '../../components/Navigation'
import { getIdeaById } from '../../data/ideas'

export default function IdeaDetail() {
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const idea = getIdeaById(params.id as string)

  if (!idea) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-light text-foreground mb-6">Idea Not Found</h1>
            <p className="text-muted-foreground mb-8">The idea you're looking for doesn't exist.</p>
            <button
              onClick={() => router.push('/ideas')}
              className="px-6 py-3 bg-primary text-background font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Back to Ideas
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Back Button */}
          <button
            onClick={() => router.push('/ideas')}
            className="flex items-center text-muted-foreground hover:text-foreground transition-all duration-300 mb-6 sm:mb-8 group"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">Back to Ideas</span>
            </div>
          </button>

          {/* Idea Header */}
          <div className="mb-6 sm:mb-8 lg:mb-12 relative">

            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-3 sm:mb-4 lg:mb-6 relative"
              style={{
                transform: `translateY(${-scrollY * 0.05}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative inline-block">
                {idea.name}
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h1>
            
            {/* Tags with enhanced styling */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 mb-4 sm:mb-6">
              {idea.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Live product links */}
            {idea.status === 'live' && idea.links && (
              <div className="flex flex-wrap gap-3 mb-4 sm:mb-6">
                {idea.links.website && (
                  <a
                    href={idea.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    <Globe size={16} />
                    <span>Visit Live Site</span>
                    <ExternalLink size={14} className="opacity-70 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}
                {idea.links.chromeExtension && (
                  <a
                    href={idea.links.chromeExtension}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 px-4 py-2.5 bg-background/60 backdrop-blur-md border border-border/40 rounded-lg text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                  >
                    <Chrome size={16} />
                    <span>Chrome Extension</span>
                    <ExternalLink size={14} className="opacity-70 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            )}

            {/* Animated underline */}
            <div className="mt-4 flex justify-start">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 animate-pulse"></div>
            </div>
          </div>

          {/* Idea Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Problem Statement */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  Problem Statement
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base relative z-10 group-hover:text-foreground/90 transition-colors duration-300">{idea.problemStatement}</p>
              </div>
            </div>

            {/* Why it Matters */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  Why it Matters
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-accent/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base relative z-10 group-hover:text-foreground/90 transition-colors duration-300">{idea.whyItMatters}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  Solution
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base relative z-10 group-hover:text-foreground/90 transition-colors duration-300">{idea.solution}</p>
              </div>
            </div>

            {/* Core Features */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  Core Features
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-accent/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {idea.coreFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 sm:space-x-3 group-hover:text-foreground/90 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-muted-foreground leading-relaxed text-sm sm:text-base group-hover:text-foreground/90 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How it will work */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  How it {idea.status === 'live' ? 'works' : 'will work'}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base relative z-10 group-hover:text-foreground/90 transition-colors duration-300">{idea.howItWillWork}</p>
              </div>
            </div>

            {/* Sector */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  Sector
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-accent/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-medium relative z-10 group-hover:text-foreground/90 transition-colors duration-300">{idea.sector}</p>
              </div>
            </div>

            {/* Note */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  Note
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-primary/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="text-muted-foreground leading-relaxed italic text-sm sm:text-base relative z-10 group-hover:text-foreground/90 transition-colors duration-300">{idea.note}</p>
              </div>
            </div>

            {/* Visual or Mockup (Optional) */}
            <div className="group relative">
              <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 relative">
                <span className="relative">
                  {idea.status === 'live' ? 'Try it live' : 'Visual / Mockup (Optional)'}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500"></div>
                </span>
              </h2>
              <div className="bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 group-hover:border-accent/20 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {idea.status === 'live' && idea.links ? (
                  <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center py-8">
                    {idea.links.website && (
                      <a
                        href={idea.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-light hover:bg-primary transition-all duration-300 hover:scale-105"
                      >
                        <Globe size={18} />
                        Visit Website
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {idea.links.chromeExtension && (
                      <a
                        href={idea.links.chromeExtension}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-sm font-light text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                      >
                        <Chrome size={18} />
                        Add to Chrome
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center relative z-10 group-hover:bg-muted/30 transition-colors duration-300">
                    <div className="text-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-muted-foreground mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-muted-foreground text-sm sm:text-base group-hover:text-foreground/80 transition-colors duration-300">Visual mockup coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
