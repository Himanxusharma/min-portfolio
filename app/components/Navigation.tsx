'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { Menu, X, Sparkles } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Ideas', href: '/ideas' },
  { name: 'Thoughts', href: '/thoughts' },
  { name: 'Photography', href: '/photography' },
  { name: 'Journey', href: '/journey' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-t border-border/50 shadow-lg shadow-black/5'
          : 'bg-background/95 backdrop-blur-md border-t border-border/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="group relative text-xl font-light text-foreground hover:text-primary transition-all duration-300"
            >
              <span>Himanshu Sharma</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>

          {/* Desktop Navigation with creative effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-light text-muted-foreground hover:text-foreground transition-all duration-300"
                onMouseEnter={() => setActiveLink(item.name)}
                onMouseLeave={() => setActiveLink('')}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span>{item.name}</span>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:left-0 group-hover:w-full" />
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button with creative animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden group relative p-3 rounded-xl text-foreground hover:text-primary transition-all duration-300 hover:bg-accent/50"
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isOpen ? (
                <X size={24} className="transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Navigation with enhanced styling */}
        {isOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="px-2 pb-2 pt-3 space-y-1 bg-background/95 backdrop-blur-xl border-b border-border/50 rounded-t-2xl shadow-lg">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-4 py-3 text-base font-light text-muted-foreground hover:text-foreground transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideInDown 0.3s ease-out forwards'
                  }}
                >
                  <span>{item.name}</span>
                  <div className="ml-auto w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-8" />
                </Link>
              ))}
              
              {/* Theme Toggle for Mobile */}
              <div className="px-4 py-3 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
