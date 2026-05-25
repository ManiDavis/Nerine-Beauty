'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { TreatmentData } from '@/components/TreatmentsView'

const TAB_LABELS: Record<string, string> = {
  'Visible Age Reverse Facial': 'Visible Age Reverse',
  'Guinot Electrical Facials': 'Guinot Electrical',
  'Guinot Manual Facials': 'Guinot Manual',
  'A-Lift': 'A-Lift',
}

function tabLabel(name: string) {
  return TAB_LABELS[name] ?? name
}

export function FacialsTabView({ facials }: { facials: TreatmentData[] }) {
  const [activeTab, setActiveTab] = useState(0)
  const active = facials[activeTab]

  if (!active) return null

  return (
    <div className="bg-cream-300 py-12 border-b border-cream-400/40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">

        {/* Tab bar */}
        <div className="border-b border-cream-400/60 overflow-x-auto -mx-1 px-1 mb-0">
          <div className="flex min-w-max gap-1">
            {facials.map((facial, i) => (
              <button
                key={facial._id ?? facial.id ?? facial.name}
                onClick={() => setActiveTab(i)}
                className={`relative pb-4 px-4 font-sans text-sm font-medium tracking-wide whitespace-nowrap transition-colors focus-visible:outline-none ${
                  activeTab === i
                    ? 'text-navy-800'
                    : 'text-navy-600/50 hover:text-navy-700'
                }`}
              >
                {tabLabel(facial.name)}
                {activeTab === i && (
                  <motion.div
                    layoutId="facial-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 pb-4"
          >
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-600 mb-2">
              {active.tagline}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-navy-800 mb-4">
              {active.name}
            </h3>
            <p className="font-sans text-navy-700/80 leading-relaxed mb-8 max-w-2xl text-sm">
              {active.description}
            </p>

            {/* Service cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {active.options.map((opt) => (
                <div
                  key={opt.name}
                  className="rounded-xl bg-cream-200 border border-cream-400/60 px-5 py-4"
                >
                  <p className="font-serif text-navy-800 font-medium mb-3 leading-snug">
                    {opt.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs text-navy-600/60">{opt.duration}</span>
                    <span className="font-serif text-lg text-gold-600 font-semibold">
                      {opt.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
