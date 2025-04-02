'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Experiment } from '@/types'
import Link from 'next/link'

interface ExperimentModalProps {
  experiment: Experiment | null
  onClose: () => void
}

export default function ExperimentModal({ experiment, onClose }: ExperimentModalProps) {
  if (!experiment) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-background/95 backdrop-blur-md rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-secondary/20 p-4 sm:p-6 z-10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-text/60 hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="font-mono text-xl sm:text-2xl font-bold pr-8">{experiment.title}</h2>
            <div className="mt-2">
              <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-mono
                ${experiment.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 
                  experiment.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-500' :
                  'bg-purple-500/10 text-purple-500'}`}>
                {experiment.status}
              </span>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="aspect-video bg-secondary/30 rounded-lg mb-4 sm:mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/5 to-transparent">
                  <span className="font-mono text-6xl sm:text-8xl text-accent/20">0{experiment.id}</span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Description */}
                <div>
                  <h3 className="font-mono text-base sm:text-lg mb-2">Overview</h3>
                  <p className="text-sm sm:text-base text-text/70">{experiment.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-mono text-base sm:text-lg mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {experiment.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-secondary/20 text-text/70 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-mono text-base sm:text-lg mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {experiment.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-text/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-background/95 backdrop-blur-md p-4 sm:p-6 border-t border-secondary/20 z-10">
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4">
              {experiment.link && (
                <a
                  href={experiment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start px-4 py-2 text-sm font-mono text-accent hover:text-accent/80 transition-colors space-x-2 bg-accent/5 rounded-lg sm:bg-transparent"
                >
                  <span>GitHub</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <Link
                href={`/experiments/${experiment.id}`}
                className="flex items-center justify-center px-4 py-2 bg-accent text-white rounded-lg text-sm font-mono hover:bg-accent/90 transition-colors"
              >
                View Experiment
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 