'use client'

import { useEffect, useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import Navigation from './components/Navigation'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const fullText = "Hi, I'm Himanshu, I craft hidden ideas and breathe life into them."

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsTyping(true)
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50) // 50ms delay between characters

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Copyright at top */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Himanshu Sharma. All rights reserved.
          </p>
        </div>
      </header>
      
      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="text-center space-y-8 animate-fade-in-up"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Main Headline */}
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight"
                style={{
                  transform: `translateY(${-scrollY * 0.2}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                This is how I think.
              </h1>
              
              {/* Description */}
              <p 
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                style={{
                  transform: `translateY(${-scrollY * 0.1}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
              
              {/* Photo Section */}
              <div 
                className="flex justify-center mt-12 mb-8"
                style={{
                  transform: `translateY(${-scrollY * 0.08}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="relative group cursor-pointer">
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110" />
                  
                  {/* Main photo container */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-border/20 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20">
                    <img 
                      src="/himanshu-photo.png" 
                      alt="Himanshu Sharma" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:brightness-110"
                    />
                    
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.1s' }} />
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute top-1/2 left-1 w-1 h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md" />
                  
                  {/* Hover text */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-muted-foreground font-light">That's me!</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                style={{
                  transform: `translateY(${-scrollY * 0.15}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <a
                  href="/ideas"
                  className="px-8 py-3 bg-foreground text-background font-light text-sm hover:bg-primary transition-all duration-200 transform hover:scale-105"
                >
                  Explore Ideas
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border border-border text-foreground font-light text-sm hover:bg-accent transition-all duration-200 transform hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>

              {/* Social Links */}
              <div 
                className="flex gap-6 justify-center items-center pt-12"
                style={{
                  transform: `translateY(${-scrollY * 0.12}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <a
                  href="mailto:himanxusharmaa@gmail.com"
                  className="group relative p-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  title="Email"
                >
                  <Mail size={20} className="transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="https://github.com/Himanxusharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  title="GitHub"
                >
                  <Github size={20} className="transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/himanshusharma08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin size={20} className="transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Navigation at bottom */}
      <Navigation />
    </div>
  )
}
