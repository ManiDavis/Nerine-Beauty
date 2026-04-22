'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'
import { FlowerBackground } from '@/components/FlowerBackground'

interface OpeningHour {
  days: string
  hours: string
  closed: boolean
}

interface ContactContentProps {
  address?: string
  phone?: string
  email?: string
  openingHours?: OpeningHour[]
}

const defaultHours: OpeningHour[] = [
  { days: 'Tuesday – Friday', hours: '9am – 6pm', closed: false },
  { days: 'Saturday', hours: '9am – 4pm', closed: false },
  { days: 'Sunday – Monday', hours: '', closed: true },
]

export function ContactContent({
  address = 'La Sabri, Vale Avenue\nVale, Guernsey\nGY3 5TF',
  phone = '01481 244114',
  email = 'annemlemaitre@cwgsy.net',
  openingHours = defaultHours,
}: ContactContentProps) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const addressLines = address.split('\n')

  return (
    <>
      {/* Map + details */}
      <section className="bg-navy-900 py-16 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          <FadeIn className="lg:col-span-3" direction="left">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/60">
              <iframe
                title="Nerine Beauty location"
                src="https://maps.google.com/maps?q=La+Sabri%2C+Vale+Avenue%2C+Vale%2C+Guernsey+GY3+5TF&output=embed&z=14"
                width="100%"
                height="420"
                style={{
                  border: 0,
                  display: 'block',
                  filter: 'brightness(55%) contrast(120%) saturate(60%) sepia(20%)',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2 flex flex-col justify-center gap-8" direction="right" delay={0.1}>
            <div>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Address</p>
              <address className="not-italic font-sans text-cream-200 leading-relaxed text-base">
                {addressLines.map((line, i) => (
                  <span key={i}>{line}{i < addressLines.length - 1 && <br />}</span>
                ))}
              </address>
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Phone</p>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-sans text-cream-200 text-xl hover:text-gold-400 transition-colors">
                {phone}
              </a>
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Email</p>
              <a href={`mailto:${email}`} className="font-sans text-cream-200 hover:text-gold-400 transition-colors break-all">
                {email}
              </a>
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-3">Opening Hours</p>
              <div className="font-sans text-cream-300 text-sm space-y-1">
                {openingHours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-8">
                    <span>{h.days}</span>
                    <span className={h.closed ? 'text-cream-400' : 'text-cream-200'}>
                      {h.closed ? 'Closed' : h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact form */}
      <section className="relative bg-navy-800 py-20 px-6 overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.06} flip />
        <div className="relative z-10 mx-auto max-w-2xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-serif text-4xl text-cream-200 mb-3">Send Us a Message</h2>
            <p className="font-sans text-cream-300/70 text-sm">We'll get back to you within one business day.</p>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div className="rounded-2xl border border-gold-500/30 bg-navy-700/50 p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A05A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4,12 9,17 20,6" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-cream-200 mb-2">Message Received</h3>
                <p className="font-sans text-cream-300/80 text-sm">Thank you for reaching out. We'll be in touch very soon.</p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs tracking-wider uppercase text-gold-500 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg bg-navy-700/60 border border-navy-600/60 px-4 py-3 font-sans text-sm text-cream-200 placeholder-cream-400/40 focus:border-gold-500/60 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-wider uppercase text-gold-500 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg bg-navy-700/60 border border-navy-600/60 px-4 py-3 font-sans text-sm text-cream-200 placeholder-cream-400/40 focus:border-gold-500/60 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs tracking-wider uppercase text-gold-500 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg bg-navy-700/60 border border-navy-600/60 px-4 py-3 font-sans text-sm text-cream-200 placeholder-cream-400/40 focus:border-gold-500/60 focus:outline-none transition-colors"
                      placeholder="01481 ..."
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs tracking-wider uppercase text-gold-500 mb-2">Treatment of interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-lg bg-navy-700/60 border border-navy-600/60 px-4 py-3 font-sans text-sm text-cream-200 focus:border-gold-500/60 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy-800">Select a treatment</option>
                      <option value="facials" className="bg-navy-800">Facials</option>
                      <option value="a-lift" className="bg-navy-800">A-Lift</option>
                      <option value="massages" className="bg-navy-800">Massages</option>
                      <option value="lashes" className="bg-navy-800">Lashes & Eyes</option>
                      <option value="nails" className="bg-navy-800">Bio Sculpture Nails</option>
                      <option value="waxing" className="bg-navy-800">Waxing & Electrolysis</option>
                      <option value="other" className="bg-navy-800">Other / Not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-wider uppercase text-gold-500 mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg bg-navy-700/60 border border-navy-600/60 px-4 py-3 font-sans text-sm text-cream-200 placeholder-cream-400/40 focus:border-gold-500/60 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us what you're looking for, preferred dates, or any questions…"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 rounded-full bg-gold-500 py-4 font-sans text-sm font-semibold tracking-wider text-navy-900 transition-colors hover:bg-gold-400"
                  >
                    Send Message
                  </motion.button>
                  <Link
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex-1 text-center rounded-full border border-gold-500/40 py-4 font-sans text-sm font-medium tracking-wider text-cream-200 transition-all hover:border-gold-400 hover:text-gold-400"
                  >
                    Call Us Instead
                  </Link>
                </div>
              </form>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  )
}
