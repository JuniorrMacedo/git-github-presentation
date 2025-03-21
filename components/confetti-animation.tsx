"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface OctocatConfettiProps {
  size: number
  delay: number
  duration: number
  left: string
  rotation: number
  color: string
}

// Mini Octocat confetti component
const OctocatConfetti: React.FC<OctocatConfettiProps> = ({ size, delay, duration, left, rotation, color }) => {
  return (
    <motion.div
      className="absolute top-0 z-10"
      style={{
        left,
        transformOrigin: "center center",
      }}
      initial={{ y: -20, opacity: 0, rotate: rotation }}
      animate={{
        y: ["0vh", "100vh"],
        opacity: [0, 1, 1, 0],
        rotate: [rotation, rotation + 360],
        scale: [1, 1, 0.8],
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.1, 0.25, 0.3, 1],
        times: [0, 0.2, 0.8, 1],
      }}
    >
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
          fill={color}
        />
      </svg>
    </motion.div>
  )
}

// Componente de fundo com gradiente
const AnimationBackground: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}

// Componente de círculos pulsantes
const PulsingCircle: React.FC<{ delay: number; size: number; color: string }> = ({ delay, size, color }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full z-10"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        x: -size / 2,
        y: -size / 2,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 1.5],
        opacity: [0, 0.7, 0],
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.5,
      }}
    />
  )
}

// Componente de explosão radial de Octocats
const OctocatExplosion: React.FC = () => {
  const octocatCount = 40 // Aumentado de 24 para 40
  const colors = ["#6e5494", "#f66a0a", "#28a745", "#0366d6", "#d73a49", "#6f42c1"]

  return (
    <>
      {Array.from({ length: octocatCount }).map((_, i) => {
        const angle = (i / octocatCount) * 360
        const distance = 50 + Math.random() * 150 // Aumentado para espalhar mais
        const delay = 0.1 + Math.random() * 0.3
        const size = 20 + Math.random() * 20 // Tamanhos mais variados

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 z-20"
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: Math.cos(angle * (Math.PI / 180)) * distance,
              y: Math.sin(angle * (Math.PI / 180)) * distance,
              scale: [0, 1.2, 1],
              opacity: [0, 1, 0.8],
              rotate: [Math.random() * 360, Math.random() * 720],
            }}
            transition={{
              duration: 1 + Math.random() * 0.5,
              delay: delay,
              ease: "easeOut",
            }}
          >
            <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                fill={colors[i % colors.length]}
              />
            </svg>
          </motion.div>
        )
      })}
    </>
  )
}

// Componente de Octocat central grande
const CentralOctocat: React.FC = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.5, 1.2],
        opacity: [0, 1, 1],
      }}
      transition={{
        duration: 0.2, // Reduzido de 0.8 para 0.5
        delay: 0.01, // Reduzido de 0.1 para 0.05
        ease: "easeOut",
      }}
    >
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 1.2, // Reduzido de 2 para 1.2
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
          fill="#FFD700"
          initial={{ fillOpacity: 0.7 }}
          animate={{ fillOpacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.svg>
    </motion.div>
  )
}

const ConfettiAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Esconder a animação após 2.5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const colors = ["#6e5494", "#f66a0a", "#28a745", "#0366d6", "#d73a49", "#6f42c1"] // Cores do GitHub
  const octocatCount = 240 // Aumentado de 60 para 120

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {/* Fundo escuro para destacar a animação */}
      <AnimationBackground />
      {/* Círculos pulsantes */}
      <PulsingCircle delay={0.1} size={300} color="rgba(110, 84, 148, 0.1)" /> {/* Roxo do GitHub */}
      <PulsingCircle delay={0.4} size={500} color="rgba(3, 102, 214, 0.05)" /> {/* Azul do GitHub */}
      <PulsingCircle delay={0.7} size={700} color="rgba(40, 167, 69, 0.03)" /> {/* Verde do GitHub */}
      {/* Octocat confetti pieces */}
      {Array.from({ length: octocatCount }).map((_, i) => (
        <OctocatConfetti
          key={i}
          color={colors[i % colors.length]}
          size={Math.random() * 15 + 10}
          delay={Math.random() * 1}
          duration={Math.random() * 2 + 1.5}
          left={`${Math.random() * 100}%`}
          rotation={Math.random() * 360}
        />
      ))}
      {/* Explosão radial de Octocats */}
      <OctocatExplosion />
      {/* Octocat central (substituindo o troféu) */}
      <CentralOctocat />
    </div>
  )
}

export default ConfettiAnimation

