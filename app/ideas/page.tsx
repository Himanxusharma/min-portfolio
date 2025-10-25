'use client'

import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'

export default function Ideas() {
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
            <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
              Ideas
            </h1>
            
            {/* Sub Headline with name reveal */}
            <h2 
              className="text-sm sm:text-base lg:text-lg font-light text-muted-foreground max-w-5xl mx-auto leading-relaxed group cursor-pointer mb-8"
              style={{
                transform: `translateY(${-scrollY * 0.12}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">H</span>idden{' '}
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">i</span>deas{' '}
              quietly{' '}
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">m</span>ove{' '}
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">a</span>nd{' '}
              gently{' '}
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">n</span>urture{' '}
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">s</span>ilent{' '}
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">h</span>uman{' '}
              <span className="group-hover:text-foreground group-hover:text-2xl group-hover:font-semibold transition-all duration-300 relative group-hover:z-10">u</span>niverses.
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creative concepts, design explorations, and innovative solutions
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
