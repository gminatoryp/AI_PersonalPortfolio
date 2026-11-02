'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const DURATION = 2700
const WORDS = ['Design', 'Create', 'Inspire']
const EASE = [0.4, 0, 0.2, 1] as const

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  // Counter 0 → 100 over 2.7s, then wait 400ms and complete.
  useEffect(() => {
    let raf = 0
    let timeout: ReturnType<typeof setTimeout>
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1)
      setProgress(p)
      if (p < 1) raf = requestAnimationFrame(tick)
      else timeout = setTimeout(() => onCompleteRef.current(), 400)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
    }
  }, [])

  // Rotate words every 900ms.
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => Math.min(i + 1, WORDS.length - 1)), 900)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.span
        className="absolute left-8 top-8 text-xs uppercase tracking-[0.3em] text-muted md:left-12 md:top-12 md:text-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Portfolio
      </motion.span>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[wordIndex]}
            className="font-display text-4xl italic text-text/80 md:text-6xl lg:text-7xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.span
        className="absolute bottom-8 right-8 font-display text-6xl tabular-nums text-text md:bottom-12 md:right-12 md:text-8xl lg:text-9xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {String(Math.round(progress * 100)).padStart(3, '0')}
      </motion.span>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-stroke/50">
        <div
          className="h-full origin-left"
          style={{
            transform: `scaleX(${progress})`,
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
        />
      </div>
    </motion.div>
  )
}
