'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const brands = ['Guinot', 'Bio Sculpture', 'Nouveau Lashes', 'LVL', 'Sensory Retreats']

interface HomeHeroProps {
  tagline?: string
  subtitle?: string
}

export function HomeHero({
  tagline = 'Est. in Guernsey',
  subtitle = 'Expert beauty treatments tailored to you, in the heart of Guernsey.',
}: HomeHeroProps) {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16">
        <motion.span
          className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tagline}
        </motion.span>

        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-400 leading-none mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          welcome to our salon
        </motion.h1>

        <motion.p
          className="font-sans text-base sm:text-lg text-cream-300 max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/contact"
            className="rounded-full bg-gold-500 px-8 py-3.5 font-sans text-sm font-semibold tracking-wider text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95"
          >
            Book Now
          </Link>
          <Link
            href="/treatments"
            className="rounded-full border border-gold-500/50 px-8 py-3.5 font-sans text-sm font-medium tracking-wider text-cream-200 transition-all hover:border-gold-400 hover:text-gold-400 active:scale-95"
          >
            Treatment Menu
          </Link>
        </motion.div>
      </div>

      {/* Brand logos strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 border-t border-navy-700/60 bg-navy-900/60 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95 }}
      >
        <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center gap-8 px-6 py-5">
          {brands.map((b) => (
            <span
              key={b}
              className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-cream-400/70"
            >
              {b}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="#C4A05A"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <polyline points="4,6 10,14 16,6" />
        </svg>
      </motion.div>
    </>
  )
}
