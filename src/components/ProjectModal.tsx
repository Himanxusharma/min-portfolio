'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-background/95 backdrop-blur-md rounded-lg w-full max-w-2xl overflow-hidden border border-secondary/20"
        >
          {/* Header */}
          <div className="relative p-6 border-b border-secondary/20">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-text/60 hover:text-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="font-mono text-2xl font-bold pr-8">{project.title}</h2>
            <div className="mt-2">
              <span className={`px-3 py-1 rounded-full text-xs font-mono
                ${project.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 
                  project.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-500' :
                  'bg-purple-500/10 text-purple-500'}`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="aspect-video bg-secondary/30 rounded-lg mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/5 to-transparent">
                <span className="font-mono text-8xl text-accent/20">0{project.id}</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-mono text-lg mb-2">Overview</h3>
                <p className="text-text/70">{project.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-mono text-lg mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm px-3 py-1.5 rounded-md bg-secondary/20 text-text/70 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <h3 className="font-mono text-lg mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-text/70 space-y-1">
                  <li>Feature 1 - Detailed explanation of the feature</li>
                  <li>Feature 2 - Another important aspect of the project</li>
                  <li>Feature 3 - Technical achievement or innovation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-secondary/20 bg-secondary/5">
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-mono text-text/60 hover:text-accent transition-colors"
              >
                Close
              </button>
              <a
                href="#"
                className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-mono hover:bg-accent/90 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 