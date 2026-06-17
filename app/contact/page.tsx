'use client'

import { useEffect, useState, useRef } from 'react'
import Navigation from '../components/Navigation'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [scrollY, setScrollY] = useState(0)
  const [result, setResult] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult("")
    setIsSuccess(false)
    
    const formData = new FormData(e.currentTarget)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    const apiUrl = process.env.NEXT_PUBLIC_WEB3FORMS_API_URL ?? 'https://api.web3forms.com/submit'
    
    if (!accessKey) {
      setResult("Configuration error: Please add Web3Forms access key to environment variables.")
      setIsSubmitting(false)
      return
    }
    
    formData.set("access_key", accessKey)

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      
      if (data && data.success === true) {
        setIsSuccess(true)
        setResult("YEAAHH!!! Message sent. I'll get back to you soon.")
        formRef.current?.reset()
      } else {
        setResult(data.message || "Something went wrong. Please try again.")
      }
    } catch {
      setResult("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <Navigation />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                Contact
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-1000 group-hover:w-full" 
                     style={{ width: `${Math.min(scrollY * 0.5, 100)}%` }} />
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate and create something amazing together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-light text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and creative collaborations. 
                  Whether you have a project in mind or just want to chat about design and 
                  development, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="mailto:himanxu.work@gmail.com"
                  className="group flex items-center space-x-3 p-3 rounded-lg bg-background/40 backdrop-blur-sm border border-border/30 hover:border-red-500/40 text-muted-foreground hover:text-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-red-500/10 transition-colors duration-300">
                    <Mail size={20} className="text-primary group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <span className="font-light">himanxu.work@gmail.com</span>
                </a>
                
                <a
                  href="https://github.com/Himanxusharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 p-3 rounded-lg bg-background/40 backdrop-blur-sm border border-border/30 hover:border-neutral-500/40 text-muted-foreground hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-neutral-500/10 transition-colors duration-300">
                    <Github size={20} className="text-primary group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-light">github.com/Himanxusharma</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/himanshusharma08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 p-3 rounded-lg bg-background/40 backdrop-blur-sm border border-border/30 hover:border-[#0A66C2]/40 text-muted-foreground hover:text-[#0A66C2] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-[#0A66C2]/10 transition-colors duration-300">
                    <Linkedin size={20} className="text-primary group-hover:text-[#0A66C2] transition-colors duration-300" />
                  </div>
                  <span className="font-light">linkedin.com/in/himanshusharma08</span>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={onSubmit}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6 p-6 rounded-2xl bg-background/40 backdrop-blur-md border border-border/30 shadow-xl relative overflow-hidden group"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating particles inside form */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
              
              <div className="relative">
                <h2 className="text-xl font-light text-foreground flex items-center space-x-2">
                  <span>Send a Message</span>
                  <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-transparent" />
                </h2>
              </div>
              
              <div className="space-y-4 relative">
                {/* Web3Forms hidden fields */}
                <input type="hidden" name="subject" value="New message from Himanshu Sharma Portfolio" />
                <input type="hidden" name="from_name" value="Himanshu Sharma Portfolio" />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 rounded-lg hover:border-border/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 rounded-lg hover:border-border/50"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 resize-none rounded-lg hover:border-border/50"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full px-6 py-3 bg-foreground text-background font-light hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </span>
                </button>
                {result && (
                  <div className={`${
                    isSuccess
                      ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20' 
                      : 'bg-red-500/10 border border-red-500/20'
                  } rounded-lg px-4 py-3`}>
                    <div className={`flex items-center justify-center space-x-2 text-sm font-medium ${
                      isSuccess
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {isSuccess && (
                        <>
                          <svg className="w-5 h-5 animate-bounce text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-base">{result}</span>
                          <svg className="w-5 h-5 animate-pulse text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                          </svg>
                        </>
                      )}
                      {!isSuccess && (
                        <span>{result}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
