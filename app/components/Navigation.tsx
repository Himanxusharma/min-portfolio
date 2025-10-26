'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()
  const isNotHomePage = pathname !== '/'
  
  // Function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

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
            {/* Logo with Photo (on non-home pages, mobile navbar when menu is closed) */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {isNotHomePage && !isOpen && (
                <Link
                  href="/"
                  className="group relative"
                >
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                    <Image
                      src="/himanshu-photo.png"
                      alt="Himanshu Sharma"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              )}
              <Link
                href="/"
                className="group relative text-xl font-light text-foreground hover:text-primary transition-all duration-300"
              >
                <span>Himanshu Sharma</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

          {/* Desktop Navigation with creative effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative px-4 py-2 text-sm font-light transition-all duration-300 ${
                    active 
                      ? 'text-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onMouseEnter={() => setActiveLink(item.name)}
                  onMouseLeave={() => setActiveLink('')}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span>{item.name}</span>
                  
                  {/* Hover underline - only when not active */}
                  {!active && (
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                  )}
                </Link>
              )
            })}
            
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
              {/* Photo in Mobile Menu (on non-home pages, only when menu is open) */}
              {isNotHomePage && isOpen && (
                <div className="flex justify-center px-4 py-4 mb-2">
                  <Link
                    href="/"
                    className="group relative"
                  >
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                      <Image
                        src="/himanshu-photo.png"
                        alt="Himanshu Sharma"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                </div>
              )}
              {navigation.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-4 py-3 text-base font-light transition-all duration-300 ${
                      active 
                        ? 'text-foreground font-medium bg-primary/5' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'slideInDown 0.3s ease-out forwards'
                    }}
                  >
                    <span>{item.name}</span>
                    {!active && (
                      <div className="ml-auto w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-8" />
                    )}
                  </Link>
                )
              })}
              
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
