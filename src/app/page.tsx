'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import InteractiveBackground from '@/components/InteractiveBackground'
import ProjectModal from '@/components/ProjectModal'
import { Project } from '@/types'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Assistant",
      description: "An intelligent assistant that helps users with daily tasks using advanced natural language processing. The system learns from user interactions to provide increasingly personalized and accurate responses over time.",
      tech: ["Python", "TensorFlow", "GPT-3", "FastAPI", "Redis"],
      status: "Completed",
      features: [
        "Natural language understanding with 95% accuracy",
        "Real-time response generation under 500ms",
        "Context-aware conversation memory",
        "Multi-language support for 10+ languages"
      ],
      link: "https://github.com/ootm/ai-assistant"
    },
    {
      id: 2,
      title: "Smart Home Hub",
      description: "A centralized IoT control system for managing all your smart home devices. Features an intuitive interface and powerful automation capabilities to create the perfect smart home experience.",
      tech: ["React", "Node.js", "MQTT", "WebSocket", "MongoDB"],
      status: "In Progress",
      features: [
        "Universal device compatibility with major brands",
        "Energy usage analytics and optimization",
        "Custom automation rules engine",
        "Voice control integration"
      ],
      link: "https://github.com/ootm/smart-home"
    },
    {
      id: 3,
      title: "Quantum Computing Sim",
      description: "An educational simulator designed to help students and enthusiasts understand quantum computing principles through interactive visualizations and hands-on experiments.",
      tech: ["TypeScript", "Three.js", "WebAssembly", "Rust"],
      status: "Experimental",
      features: [
        "Interactive quantum circuit builder",
        "Real-time quantum state visualization",
        "Built-in quantum algorithm templates",
        "Performance optimization with WebAssembly"
      ],
      link: "https://github.com/ootm/quantum-sim"
    }
  ]

  return (
    <main className="min-h-screen relative">
      <InteractiveBackground />

      {/* Top Logo */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="fixed w-full bg-background/60 backdrop-blur-md border-b border-secondary/50 z-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-center">
          <Link href="/" className="font-mono text-lg font-bold hover:text-accent transition-colors">OOTM</Link>
        </div>
      </motion.div>

      {/* Responsive Navigation */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="fixed bottom-0 left-0 right-0 md:bottom-8 md:left-1/2 md:-translate-x-1/2 z-50"
      >
        {/* Mobile Navigation */}
        <div className="md:hidden w-full bg-background/80 backdrop-blur-md border-t border-secondary/50">
          <div className="flex justify-around items-center h-16 px-4">
            {['about', 'projects', 'contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link 
                  href={`#${item}`} 
                  className="group relative block px-3 py-2"
                >
                  <span className="relative font-mono text-xs capitalize text-text/80 group-hover:text-accent transition-colors">
                    {item}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full" />
            
            {/* Navigation Container */}
            <div className="relative bg-background/80 backdrop-blur-md rounded-full border border-accent/20 shadow-lg p-2">
              {/* Navigation Items */}
              <div className="flex items-center space-x-2">
                {['about', 'projects', 'contact'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <Link 
                      href={`#${item}`} 
                      className="group relative block px-6 py-3 rounded-full overflow-hidden"
                    >
                      {/* Hover Background Effect */}
                      <motion.div
                        className="absolute inset-0 bg-accent/10"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Text */}
                      <span className="relative font-mono text-sm capitalize text-text/80 group-hover:text-accent transition-colors">
                        {item}
                      </span>
                      
                      {/* Decorative Elements */}
                      <motion.div
                        className="absolute inset-0 border border-accent/20 rounded-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Add floating animation */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            variants={fadeIn}
            className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-float"
          >
            Out of the
            <span className="text-accent"> Matrix</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-base sm:text-lg max-w-2xl text-text/80 animate-selection"
          >
            We experiment with random ideas and bring them to life. Breaking free from conventional thinking,
            one project at a time.
          </motion.p>
        </motion.div>
      </section>

      {/* About Section - Add glass effect */}
      <section id="about" className="py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-secondary/10 backdrop-blur-sm" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto relative"
        >
          <motion.h2 
            variants={fadeIn}
            className="font-mono text-2xl sm:text-3xl font-bold mb-8"
          >
            About Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div variants={fadeIn}>
              <h3 className="font-mono text-lg sm:text-xl mb-4">Our Philosophy</h3>
              <p className="text-sm sm:text-base text-text/80 animate-selection">
                At OOTM, we believe in thinking outside the conventional matrix. 
                We take random ideas, experiment with them, and transform them into 
                tangible solutions that challenge the status quo.
              </p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="font-mono text-lg sm:text-xl mb-4">Our Approach</h3>
              <p className="text-sm sm:text-base text-text/80 animate-selection">
                Every project starts with a simple "what if?" We combine creativity 
                with technical expertise to turn these questions into reality, 
                always pushing the boundaries of what's possible.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 relative animate-gradient">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={fadeIn}
            className="font-mono text-2xl sm:text-3xl font-bold mb-8"
          >
            Latest Experiments
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-secondary/10 hover:border-accent/20 transition-all duration-300"
              >
                <div className="aspect-square bg-secondary/30 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/5 to-transparent">
                    <span className="font-mono text-5xl sm:text-6xl text-accent/20">0{project.id}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono
                      ${project.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 
                        project.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-purple-500/10 text-purple-500'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-mono text-base sm:text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text/60 mb-4">
                    {project.description.split('.')[0]}.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/20 text-text/70 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-secondary/20 text-text/70 font-mono">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Add glass effect */}
      <section id="contact" className="py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-secondary/10 backdrop-blur-sm" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center relative"
        >
          <motion.h2 
            variants={fadeIn}
            className="font-mono text-2xl sm:text-3xl font-bold mb-8"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-base sm:text-lg mb-8 text-text/80 animate-selection"
          >
            Have an idea you want to experiment with? Let's connect.
          </motion.p>
          <motion.a 
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@ootm.com" 
            className="inline-block px-6 sm:px-8 py-3 bg-accent text-white rounded-lg font-mono 
                     hover:bg-accent/90 transition-colors text-sm sm:text-base"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>

      {/* Footer - Add subtle gradient */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-secondary/50 bg-gradient-to-t from-secondary/5 to-transparent">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="font-mono text-xs sm:text-sm order-2 sm:order-1">
            © {new Date().getFullYear()} OOTM. All rights reserved.
          </div>
          <div className="space-x-4 sm:space-x-6 order-1 sm:order-2">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-text/60 hover:text-accent transition-colors relative group text-sm"
              >
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </motion.div>
      </footer>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </main>
  )
}
