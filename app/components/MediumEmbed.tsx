'use client'

import { useEffect, useState } from 'react'
import { BookOpen, ExternalLink, Loader2 } from 'lucide-react'
import Image from 'next/image'

interface MediumEmbedProps {
  url: string
  title?: string
  description?: string
  thumbnail?: string
}

interface MediumMetadata {
  title: string
  description: string
  image: string
  author?: string
  publishedTime?: string
}

export default function MediumEmbed({ url, title: fallbackTitle, description: fallbackDescription, thumbnail: fallbackThumbnail }: MediumEmbedProps) {
  const [metadata, setMetadata] = useState<MediumMetadata | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        setLoading(true)

        // Option 1: Try Microlink API (free tier available)
        try {
          const response = await fetch(`https://api.microlink.io/data?url=${encodeURIComponent(url)}`, {
            headers: {
              'Accept': 'application/json'
            }
          })
          
          if (response.ok) {
            const data = await response.json()
            if (data.data) {
              setMetadata({
                title: data.data.title || fallbackTitle || 'Medium Article',
                description: data.data.description || fallbackDescription || '',
                image: data.data.image?.url || data.data.logo?.url || fallbackThumbnail || '',
                author: data.data.author || '',
                publishedTime: data.data.publishedTime || data.data.date
              })
              setLoading(false)
              return
            }
          }
        } catch (microlinkError) {
          console.log('Microlink API not available, using fallback')
        }

        // Fallback: Use provided props (no API call needed)
        setMetadata({
          title: fallbackTitle || 'Medium Article',
          description: fallbackDescription || '',
          image: fallbackThumbnail || ''
        })
      } catch (err) {
        console.error('Error fetching Medium metadata:', err)
        // Final fallback to provided props
        setMetadata({
          title: fallbackTitle || 'Medium Article',
          description: fallbackDescription || '',
          image: fallbackThumbnail || ''
        })
      } finally {
        setLoading(false)
      }
    }

    fetchMetadata()
  }, [url, fallbackTitle, fallbackDescription, fallbackThumbnail])

  if (loading) {
    return (
      <div className="w-full border border-border/30 rounded-lg overflow-hidden bg-background/40 backdrop-blur-sm">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      </div>
    )
  }

  const displayTitle = metadata?.title || fallbackTitle || 'Medium Article'
  const displayDescription = metadata?.description || fallbackDescription || ''
  const displayImage = metadata?.image || fallbackThumbnail || ''

  return (
    <div className="w-full border border-border/30 rounded-lg overflow-hidden bg-background/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
      {/* Image Preview */}
      {displayImage && (
        <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-muted">
          <Image
            src={displayImage}
            alt={displayTitle}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Medium Badge */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20">
            <BookOpen size={16} className="text-green-400" />
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Medium</span>
        </div>

        {/* Title */}
        <h4 className="text-lg sm:text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {displayTitle}
        </h4>

        {/* Description */}
        {displayDescription && (
          <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
            {displayDescription}
          </p>
        )}

        {/* Author & Date */}
        {(metadata?.author || metadata?.publishedTime) && (
          <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
            {metadata?.author && (
              <span className="flex items-center space-x-1">
                <span>By {metadata.author}</span>
              </span>
            )}
            {metadata?.publishedTime && (
              <span>
                {new Date(metadata.publishedTime).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            )}
          </div>
        )}

        {/* Read More Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/50 rounded-lg text-sm font-medium text-green-400 hover:text-green-300 transition-all duration-300 group/button"
        >
          <span>Read on Medium</span>
          <ExternalLink size={14} className="group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  )
}

