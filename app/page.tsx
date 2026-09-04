'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/hero'
import { MotorcyclesSection } from '@/components/sections/motorcycles'
import { LocationSection } from '@/components/sections/location'
import { CTASection } from '@/components/sections/cta'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <motion.div variants={itemVariants}>
        <HeroSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <MotorcyclesSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <LocationSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <CTASection />
      </motion.div>
    </motion.div>
  )
}
