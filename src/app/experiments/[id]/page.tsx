'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import InteractiveBackground from '@/components/InteractiveBackground'
import { Experiment } from '@/types'

// Simple hash function
function generateHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36) // Convert to base36 for shorter strings
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// This would typically come from an API or database
const experiments: Experiment[] = [
  {
    id: generateHash("AI-Powered Assistant"),
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
    id: generateHash("Smart Home Hub"),
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
    id: generateHash("Quantum Computing Sim"),
    title: "Quantum Computing Sim",
    description: "An educational simulator designed to help students and enthusiasts understand quantum computing principles through interactive visualizations and hands-on experiments.",
    tech: ["TypeScript", "Three.js", "WebAssembly", "Rust"],
    status: "Planned",
    features: [
      "Interactive quantum circuit builder",
      "Real-time quantum state visualization",
      "Built-in quantum algorithm templates",
      "Performance optimization with WebAssembly"
    ],
    link: "https://github.com/ootm/quantum-sim"
  }
]

export default function ExperimentDetail() {
  const params = useParams()
  const experiment = experiments.find(p => p.id === params.id)

  if (!experiment) {
    return (
      <main className="min-h-screen relative">
        <InteractiveBackground />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-32">
          <h1 className="text-2xl font-bold">Experiment not found</h1>
          <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen relative">
      <InteractiveBackground />
      
      {/* Blurry Layer */}
      <div className="fixed inset-0 bg-background/40 backdrop-blur-sm z-10" />
      
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 left-4 z-50"
      >
        <Link 
          href="/"
          className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </Link>
      </motion.div>

      {/* Experiment Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-32 relative z-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="space-y-8"
        >
          {/* Experiment Header */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold font-mono">{experiment.title}</h1>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-mono
                ${experiment.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 
                  experiment.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-500' :
                  'bg-purple-500/10 text-purple-500'}`}>
                {experiment.status}
              </span>
              {experiment.link && (
                <a 
                  href={experiment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors flex items-center space-x-2"
                >
                  <span>View on GitHub</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Experiment Description */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-text/80">{experiment.description}</p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-mono">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiment.features?.map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-mono">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {experiment.tech.map((tech: string, index: number) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-secondary/20 text-text/70 font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 