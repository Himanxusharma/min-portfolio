'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Floating Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            y: Math.random() * 100,
            x: Math.random() * 100,
            rotate: Math.random() * 360
          }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
          className={`absolute w-24 h-24 ${
            i % 2 === 0 
              ? 'border border-accent/20' 
              : 'bg-secondary/10'
          } ${
            i % 3 === 0 
              ? 'rounded-full' 
              : 'rounded-lg'
          }`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`
          }}
        />
      ))}

      {/* Matrix-like dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [0, 1000]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5px`
            }}
          />
        ))}
      </div>
    </div>
  )
} 