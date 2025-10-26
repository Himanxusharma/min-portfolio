'use client'

import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { 
  getAllProfessionalExperience, 
  getAllEducation, 
  getTechnicalSkills, 
  getResumeDownload 
} from '../data/journey'

export default function Journey() {
  const [scrollY, setScrollY] = useState(0)
  const [activeItem, setActiveItem] = useState(0)
  const [tiltStyles, setTiltStyles] = useState<{[key: string]: {x: number, y: number}}>({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const experiences = getAllProfessionalExperience()
  const education = getAllEducation()
  const technicalSkills = getTechnicalSkills()
  const resumeDownload = getResumeDownload()

  // 3D tilt handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10 // Adjust tilt intensity
    const rotateY = (centerX - x) / 10
    
    setTiltStyles(prev => ({
      ...prev,
      [id]: { x: rotateX, y: rotateY }
    }))
  }

  const handleMouseLeave = (id: string) => {
    setTiltStyles(prev => ({
      ...prev,
      [id]: { x: 0, y: 0 }
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-20 sm:pb-24 md:pb-28 lg:pb-32 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3 sm:mb-4 md:mb-6 relative"
              style={{
                transform: `translateY(${-scrollY * 0.08}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative inline-block">
                Journey
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-1000 group-hover:w-full" 
                     style={{ width: `${Math.min(scrollY * 0.5, 100)}%` }} />
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
              My path as a designer and developer, the challenges and milestones
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-foreground mb-3 sm:mb-4">Professional Experience</h2>
              <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>
            
            <div className="relative">
              {/* Animated timeline line - responsive positioning */}
              <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20">
                <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full animate-pulse" />
              </div>
              
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-20 pl-8 sm:pl-12 md:pl-20 group cursor-pointer"
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(-1)}
                  style={{
                    transform: `translateY(${-scrollY * 0.05}px)`,
                    transition: 'transform 0.1s ease-out',
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Enhanced timeline dot with glow - responsive sizing */}
                  <div className="absolute left-1 sm:left-2 md:left-6 top-3 sm:top-4 md:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-foreground rounded-full border-2 sm:border-3 md:border-4 border-background group-hover:scale-125 transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 blur-sm" />
                  </div>
                  
                  {/* Floating particles around timeline dot - responsive positioning */}
                  <div className="absolute left-1 sm:left-2 md:left-6 top-3 sm:top-4 md:top-6 pointer-events-none">
                    <div className="absolute -top-0.5 sm:-top-1 md:-top-2 -right-0.5 sm:-right-1 md:-right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.1s' }} />
                    <div className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 -left-0.5 sm:-left-1 md:-left-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute top-1/2 -right-1 sm:-right-2 md:-right-3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  {/* Enhanced content card - responsive padding and sizing */}
                  <div 
                    className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/10 group-hover:bg-background/80"
                    onMouseMove={(e) => handleMouseMove(e, `exp-${index}`)}
                    onMouseLeave={() => handleMouseLeave(`exp-${index}`)}
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltStyles[`exp-${index}`]?.x || 0}deg) rotateY(${tiltStyles[`exp-${index}`]?.y || 0}deg) translateZ(0) scale(1.05)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Header with enhanced styling - responsive layout */}
                    <div className="relative z-10">
                      <div className="mb-3 sm:mb-4 md:mb-6">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                          {exp.period}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-light text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-primary font-medium">{exp.position}</p>
                      </div>
                      
                      {/* Enhanced achievements list - responsive spacing */}
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 group/item">
                            <div className="relative flex-shrink-0 mt-1 sm:mt-1.5 md:mt-2">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-300" />
                              <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300" />
                            </div>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Cards */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-foreground mb-3 sm:mb-4">Education</h2>
              <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveItem(index + 10)}
                  onMouseLeave={() => setActiveItem(-1)}
                  style={{
                    transform: `translateY(${-scrollY * 0.05}px)`,
                    transition: 'transform 0.1s ease-out',
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Enhanced content card - responsive padding and sizing */}
                  <div 
                    className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/10 group-hover:bg-background/80 h-full"
                    onMouseMove={(e) => handleMouseMove(e, `edu-${index}`)}
                    onMouseLeave={() => handleMouseLeave(`edu-${index}`)}
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltStyles[`edu-${index}`]?.x || 0}deg) rotateY(${tiltStyles[`edu-${index}`]?.y || 0}deg) translateZ(0) scale(1.05)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-1 h-1 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Header with enhanced styling - responsive layout */}
                    <div className="relative z-10">
                      <div className="mb-3 sm:mb-4 md:mb-6">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                          {edu.period}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-light text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {edu.institution}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-primary font-medium">{edu.degree}</p>
                      </div>
                      
                      {/* Description */}
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 group/item">
                          <div className="relative flex-shrink-0 mt-1 sm:mt-1.5 md:mt-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300" />
                          </div>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-foreground mb-3 sm:mb-4">Technical Skills</h2>
              <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {/* Languages */}
              <div className="group cursor-pointer">
                <div className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-background/80 h-full">
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">Languages</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {technicalSkills.languages.map((skill, index) => (
                        <span key={index} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="group cursor-pointer">
                <div className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-background/80 h-full">
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">DevOps & Tools</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {technicalSkills.devops.map((skill, index) => (
                        <span key={index} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks */}
              <div className="group cursor-pointer">
                <div className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-background/80 h-full">
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">Frameworks</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {technicalSkills.frameworks.map((skill, index) => (
                        <span key={index} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture */}
              <div className="group cursor-pointer">
                <div className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-background/80 h-full">
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">Architecture</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {technicalSkills.architecture.map((skill, index) => (
                        <span key={index} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className="group cursor-pointer">
                <div className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 hover:border-primary/40 hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-background/80 h-full">
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">Databases</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {technicalSkills.databases.map((skill, index) => (
                        <span key={index} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Direct Download Button */}
              <button 
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = resumeDownload.directDownload.path
                  link.download = resumeDownload.directDownload.filename
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="group relative inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 rounded-lg sm:rounded-xl md:rounded-2xl font-medium text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <span>Download Resume</span>
                </div>
              </button>

              {/* Google Drive Button */}
              <button 
                onClick={() => {
                  window.open(resumeDownload.googleDrive.url, '_blank')
                }}
                className="group relative inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 rounded-lg sm:rounded-xl md:rounded-2xl font-medium text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7.71 6.705L0 14.42h4.42l3.29-3.29 3.29 3.29h4.42L12.29 6.705H7.71zM12 0L4.29 7.71h7.42L19.71 0H12zM19.71 16.29L12 24l-7.71-7.71h4.42l3.29 3.29 3.29-3.29h4.42z"/>
                  </svg>
                  <span>{resumeDownload.googleDrive.label}</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
