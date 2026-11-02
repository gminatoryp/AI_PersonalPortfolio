'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './LoadingScreen'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}</AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {!isLoading && children}
      </motion.main>
    </>
  )
}
