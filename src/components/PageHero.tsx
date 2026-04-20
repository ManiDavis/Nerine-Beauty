'use client'
import { motion } from 'framer-motion'
import { FlowerBackground } from './FlowerBackground'

interface PageHeroProps {
  label?: string
  title: string
  subtitle?: string
  scriptFont?: boolean
}

export function PageHero({
  label,
  title,
  subtitle,
  scriptFont = false,
}: PageHeroProps) {
  return (
    <section className="relative bg-navy-800 pt-40 pb-24 px-6 overflow-hidden">
      <FlowerBackground color="#C4A05A" opacity={0.07} />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {label && (
          <motion.span
            className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 block mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          className={`mb-6 ${
            scriptFont
              ? 'font-script text-7xl sm:text-8xl text-gold-400 leading-none'
              : 'font-serif text-5xl sm:text-6xl text-cream-200'
          }`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="font-sans text-cream-300/80 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
