'use client'

import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'

export default function Thoughts() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl sm:text-5xl font-light text-foreground mb-6 relative"
              style={{
                transform: `translateY(${-scrollY * 0.08}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative inline-block">
                Thoughts
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-1000 group-hover:w-full" 
                     style={{ width: `${Math.min(scrollY * 0.5, 100)}%` }} />
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reflections on design, technology, and the creative process
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="text-center py-20">
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
