'use client'

import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'

export default function Journey() {
  const [scrollY, setScrollY] = useState(0)
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const experiences = [
    {
      period: "Feb'2023 - Present",
      company: "Paxcom India (P) Ltd - A Paymentus Company",
      role: "Software Developer",
      achievements: [
        "Led the design and implementation of a major product feature for Paymentus, the Recurring Maintenance Mode System, designed and developed from scratch.",
        "Spearheaded the optimisation of an existing code base integrating the Snowflake for a report-generating job within the microservices architecture. This initiative resulted in improved performance and efficiency. This was acknowledged and appreciated by Director-Product Development Team Paymentus, for its substantial impact on our product offerings.",
        "Integrated Green Dot payment method into the product."
      ]
    },
    {
      period: "Jun 2022 - Jul 2022",
      company: "Shivalik Small Finance Bank",
      role: "Software Developer Intern",
      achievements: [
        "Received a letter of recommendation from the CTO.",
        "Developed an algorithm for Fraud Risk Management (FRM)",
        "Participated in the design and development of the Core Banking System (CBS)",
        "Conducted user activity examination for over 100k+ users to assess their preferences and requirements for modern-day banking facilities."
      ]
    }
  ]


  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6">
              Journey
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              My path as a designer and developer, the challenges and milestones
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-light text-foreground mb-4">Professional Experience</h2>
              <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>
            
            <div className="relative">
              {/* Animated timeline line - responsive positioning */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-accent/30 to-primary/20">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full animate-pulse" />
              </div>
              
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative mb-12 sm:mb-16 lg:mb-20 pl-12 sm:pl-20 group cursor-pointer"
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(-1)}
                  style={{
                    transform: `translateY(${-scrollY * 0.05}px)`,
                    transition: 'transform 0.1s ease-out',
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Enhanced timeline dot with glow - responsive sizing */}
                  <div className="absolute left-2 sm:left-6 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 bg-foreground rounded-full border-2 sm:border-4 border-background group-hover:scale-125 transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 blur-sm" />
                  </div>
                  
                  {/* Floating particles around timeline dot - responsive positioning */}
                  <div className="absolute left-2 sm:left-6 top-4 sm:top-6 pointer-events-none">
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.1s' }} />
                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-1 h-1 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute top-1/2 -right-2 sm:-right-3 w-1 h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  {/* Enhanced content card - responsive padding and sizing */}
                  <div className="relative bg-background/60 backdrop-blur-md border border-border/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-primary/40 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-background/80">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Header with enhanced styling - responsive layout */}
                    <div className="relative z-10">
                      <div className="mb-4 sm:mb-6">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                          {exp.period}
                        </span>
                        <h3 className="text-lg sm:text-xl font-light text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <p className="text-base sm:text-lg text-primary font-medium">{exp.role}</p>
                      </div>
                      
                      {/* Enhanced achievements list - responsive spacing */}
                      <div className="space-y-3 sm:space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3 sm:space-x-4 group/item">
                            <div className="relative flex-shrink-0 mt-1.5 sm:mt-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full group-hover/item:scale-125 transition-transform duration-300" />
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

        </div>
      </section>
    </main>
  )
}
