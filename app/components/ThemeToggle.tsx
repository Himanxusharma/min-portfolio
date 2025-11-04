'use client'

import { useState, useEffect, useRef } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null)
  const messageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    let initialTheme: 'light' | 'dark'
    
    if (savedTheme) {
      initialTheme = savedTheme
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      initialTheme = prefersDark ? 'dark' : 'light'
    }
    
    // Apply theme to document immediately
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    
    // Mark as mounted after theme is applied
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (!mounted) return // Prevent toggling before component is fully mounted

    const nextTheme: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light'

    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')

    const message = nextTheme === 'dark'
      ? 'Welcome to the dark side'
      : 'I want some light!!!'

    setFeedbackMessage(message)

    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current)
    }

    messageTimeoutRef.current = setTimeout(() => {
      setFeedbackMessage(null)
    }, 2400)
  }

  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current)
      }
    }
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={theme === 'light' ? 'Welcome to the dark side' : 'I want some light!!!'}
    >
      {/* Mobile feedback bubble */}
      {feedbackMessage && (
        <div className="md:hidden absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-2 bg-background/95 backdrop-blur-md border border-border/40 rounded-xl text-xs text-foreground shadow-lg transition-opacity duration-300 pointer-events-none" aria-live="polite">
          {feedbackMessage}
        </div>
      )}

      {/* Tooltip with creative animation */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-background/95 backdrop-blur-md border border-border/40 rounded-xl text-xs text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl group-hover:scale-105">
        <span className="font-light flex items-center space-x-1">
          {theme === 'light' ? (
            <>
              <span>Welcome to the dark side</span>
              <svg className="w-3 h-3 text-yellow-500 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L8 6h8L12 2zm0 20l4-4H8l4 4zm8-8v8h-8l4-4V6h8v8zM4 12v8h8l-4 4H4V12zm0-6h8L8 2H4v6zm16 0V4h-6l4 4h2z"/>
              </svg>
            </>
          ) : (
            <>
              <svg className="w-3 h-3 text-yellow-500 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
                <path d="M12 2L12 22M2 12L22 12M12 2L8 6L12 10M12 22L8 18L12 14M2 12L6 8L10 12M22 12L18 16L14 12Z" />
              </svg>
              <span>I want some light!!!</span>
            </>
          )}
        </span>
        {/* Pointer with glow */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-background/95 border-r border-b border-border/40 rotate-45 shadow-lg" />
      </div>
      {/* Sun Icon */}
      <svg
        className={`w-5 h-5 text-foreground transition-all duration-300 ${
          theme === 'light' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 rotate-90 scale-75 absolute'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon */}
      <svg
        className={`w-5 h-5 text-foreground transition-all duration-300 ${
          theme === 'dark' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-90 scale-75 absolute'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      {/* Hover effect particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1 left-1 w-1 h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.1s' }} />
        <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.3s' }} />
      </div>
    </button>
  )
}
