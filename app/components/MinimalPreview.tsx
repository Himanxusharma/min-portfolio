'use client'

import { ExternalLink, BookOpen, Linkedin, FileText } from 'lucide-react'
import type { MediaType } from '../data/thoughts'

interface MinimalPreviewProps {
  platform: MediaType
  title: string
  description?: string
  url: string
  publishedDate?: string
}

export default function MinimalPreview({ platform, title, description, url, publishedDate }: MinimalPreviewProps) {
  // Get platform-specific styling
  const getPlatformConfig = () => {
    switch (platform) {
      case 'linkedin':
        return {
          icon: Linkedin,
          color: 'blue',
          bgGradient: 'from-blue-500/5 to-blue-600/10',
          borderColor: 'border-blue-500/20',
          hoverBorder: 'hover:border-blue-500/40',
          textColor: 'text-blue-400',
          dotColor: 'bg-blue-500/20',
          glowColor: 'shadow-blue-500/10'
        }
      case 'substack':
        return {
          icon: FileText,
          color: 'orange',
          bgGradient: 'from-orange-500/5 to-orange-600/10',
          borderColor: 'border-orange-500/20',
          hoverBorder: 'hover:border-orange-500/40',
          textColor: 'text-orange-400',
          dotColor: 'bg-orange-500/20',
          glowColor: 'shadow-orange-500/10'
        }
      default:
        return {
          icon: BookOpen,
          color: 'primary',
          bgGradient: 'from-primary/5 to-accent/10',
          borderColor: 'border-primary/20',
          hoverBorder: 'hover:border-primary/40',
          textColor: 'text-primary',
          dotColor: 'bg-primary/20',
          glowColor: 'shadow-primary/10'
        }
    }
  }

  const config = getPlatformConfig()
  const Icon = config.icon

  return (
    <div className={`group relative w-full border ${config.borderColor} ${config.hoverBorder} rounded-xl overflow-hidden bg-gradient-to-br ${config.bgGradient} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${config.glowColor}`}>
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${config.dotColor} rounded-full animate-pulse`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute top-0 right-0 w-24 h-24 ${config.dotColor} rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000`} />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute bottom-0 left-0 w-20 h-20 ${config.dotColor} rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-1000`} />
      </div>

      {/* Content */}
      <div className="relative p-8 sm:p-10 min-h-[320px] flex flex-col justify-between">
        {/* Platform Icon Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            {/* Outer pulsing ring */}
            <div className={`absolute inset-0 ${config.dotColor} rounded-2xl opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`} style={{ animationDuration: '2s' }} />
            
            {/* Icon container */}
            <div className={`relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${config.bgGradient} border ${config.borderColor} group-hover:scale-110 transition-all duration-300`}>
              <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${config.textColor} group-hover:rotate-12 transition-transform duration-500`} />
            </div>

            {/* Corner accents */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 border-t border-r ${config.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-b border-l ${config.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h4 className="text-xl sm:text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 text-center mb-3">
            {title}
          </h4>

          {/* Animated underline */}
          <div className="flex justify-center">
            <div className={`h-0.5 w-0 bg-gradient-to-r from-transparent via-${config.color}-500 to-transparent group-hover:w-24 transition-all duration-500`} />
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm sm:text-base text-muted-foreground text-center line-clamp-3 mb-6 group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        )}

        {/* Decorative dots separator */}
        <div className="flex justify-center space-x-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${config.dotColor} group-hover:scale-150 transition-transform duration-300`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Published Date */}
        {publishedDate && (
          <div className="text-xs text-muted-foreground text-center mb-6">
            {new Date(publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}

        {/* Read More Button */}
        <div className="flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${config.bgGradient} border ${config.borderColor} hover:border-${config.color}-500/50 rounded-full text-sm font-medium ${config.textColor} transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg ${config.glowColor}`}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
            
            <span className="relative z-10">Read on {platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
            <ExternalLink 
              size={16} 
              className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" 
            />
          </a>
        </div>
      </div>

      {/* Corner decorations */}
      <div className={`absolute top-3 right-3 w-8 h-8 border-t border-r ${config.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg`} />
      <div className={`absolute bottom-3 left-3 w-8 h-8 border-b border-l ${config.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-lg`} />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${config.color}-500/50 to-transparent translate-y-0 group-hover:translate-y-full transition-transform duration-2000 ease-out opacity-0 group-hover:opacity-100`}
        />
      </div>
    </div>
  )
}

