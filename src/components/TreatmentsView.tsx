'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { categories } from '@/data/treatments'
import { FadeIn } from '@/components/FadeIn'
import { FlowerBackground } from '@/components/FlowerBackground'

interface TreatmentOption {
  name: string
  duration: string
  price: string
}

export interface TreatmentData {
  _id?: string
  id?: string
  name: string
  category: string
  tagline: string
  description: string
  options: TreatmentOption[]
}

function TreatmentCard({ treatment }: { treatment: TreatmentData }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-cream-400/50 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-8 text-left group"
        aria-expanded={open}
      >
        <div className="flex-1">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-600 mb-2">
            {treatment.tagline}
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-navy-800 group-hover:text-gold-600 transition-colors">
            {treatment.name}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-navy-600/40 text-navy-700 group-hover:border-gold-500 group-hover:text-gold-600 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10">
              <p className="font-sans text-navy-700/80 leading-relaxed mb-8 max-w-2xl">
                {treatment.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {treatment.options.map((opt) => (
                  <div
                    key={opt.name}
                    className="rounded-xl bg-cream-200 border border-cream-400/60 px-5 py-4"
                  >
                    <p className="font-serif text-navy-800 font-medium mb-2 leading-snug">
                      {opt.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-navy-600/70">{opt.duration}</span>
                      <span className="font-serif text-lg text-gold-600 font-semibold">
                        {opt.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-2.5 font-sans text-xs font-medium tracking-wider text-cream-200 transition-all hover:bg-navy-700 hover:shadow-md active:scale-95"
                >
                  Book This Treatment
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <polyline points="3,2 9,6 3,10" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function TreatmentsView({ treatments }: { treatments: TreatmentData[] }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? treatments
      : treatments.filter((t) => t.category === activeCategory)

  return (
    <>
      {/* Sticky category filter */}
      <div className="bg-cream-300 sticky top-[79px] z-20 border-b border-cream-400/60 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 overflow-x-auto">
          <div className="flex items-center gap-2 py-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-full px-5 py-2 font-sans text-xs font-medium tracking-wider uppercase transition-all ${
                  activeCategory === cat.id ? 'bg-navy-800 text-cream-200' : 'text-navy-700 hover:text-navy-900'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-navy-800"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Treatment list */}
      <div className="relative bg-cream-300 min-h-screen overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.07} />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {filtered.map((t) => (
                <TreatmentCard key={t._id ?? t.id ?? t.name} treatment={t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Book CTA */}
      <div className="bg-navy-800 py-20 px-6 relative overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.06} flip />
        <FadeIn className="relative z-10 text-center max-w-xl mx-auto">
          <h2 className="font-serif text-4xl text-cream-200 mb-4">Ready to book?</h2>
          <p className="font-sans text-cream-300/80 text-sm leading-relaxed mb-8">
            Contact us directly to check availability and reserve your appointment. We recommend booking in advance.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gold-500 px-10 py-4 font-sans text-sm font-semibold tracking-wider text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95"
          >
            Book Your Appointment
          </Link>
        </FadeIn>
      </div>
    </>
  )
}
