import Image from 'next/image'
import Link from 'next/link'
import { HomeHero } from '@/components/HomeHero'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { FlowerBackground } from '@/components/FlowerBackground'
import { FEATURED_TREATMENTS_QUERY, TESTIMONIALS_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'

// ── Static fallbacks (used until Sanity content is added) ─────────────
const staticFeatured = [
  {
    id: 'visible-age-reverse',
    name: 'Visible Age Reverse Facial',
    tagline: 'Turn back the clock',
    duration: 'From 45 min',
    price: 'From £55',
    img: '/images/treatment-facial.jpg',
    alt: 'Visible Age Reverse Facial at Nerine Beauty',
  },
  {
    id: 'guinot-hydradermie',
    name: 'Guinot Hydradermie',
    tagline: 'Your best skin yet',
    duration: 'From 60 min',
    price: 'From £70',
    img: '/images/treatment-hydradermie.jpg',
    alt: 'Guinot Hydradermie facial',
  },
  {
    id: 'a-lift',
    name: 'A-Lift Treatment',
    tagline: 'Non-surgical lift',
    duration: 'From 60 min',
    price: 'From £80',
    img: '/images/treatment-alift.jpg',
    alt: 'Expert facial treatment at Nerine Beauty',
  },
]

const staticTestimonials = [
  {
    _id: '1',
    name: 'Jane Brown',
    date: '18 September 2019',
    quote: "Michelle is kind, helpful gentle and really knows what's what in beauty care of all sorts. I moved with her from her previous job as I wouldn't want anyone else doing what she does so well!",
    avatar: '/images/jane-brown.jpg',
  },
  {
    _id: '2',
    name: 'Joanne Francis',
    date: '30 July 2019',
    quote: "I would highly recommend nerine beauty , lovely relaxing setting and a friendly atmosphere, had eyebrows and lip wax done, very good prices so impressed with what I had done I have booked in again to have my nails done.",
    highlight: 'Beautiful results',
    avatar: '/images/joanne-francis.jpg',
  },
]

const pillars = [
  {
    title: 'Premium Products',
    body: 'We partner exclusively with the world\'s leading beauty brands — Guinot, Bio Sculpture, Nouveau Lashes and more — for results you can see and feel.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" />
        <path d="M14 20 C14 16 17 13 20 13 C23 13 26 16 26 20 C26 24 23 27 20 27 C17 27 14 24 14 20Z" />
        <path d="M20 4 L20 8 M20 32 L20 36 M4 20 L8 20 M32 20 L36 20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Expert Therapists',
    body: 'With over 20 years of experience and continuous professional development, our therapist brings unmatched skill and genuine care to every treatment.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M20 6 C15 6 10 11 10 17 C10 23 14 27 20 30 C26 27 30 23 30 17 C30 11 25 6 20 6Z" />
        <path d="M15 17 L18 20 L25 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Lasting Results',
    body: 'Every treatment is designed to deliver visible, measurable results — not just in the salon, but in the weeks that follow.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M8 32 L8 20 M16 32 L16 14 M24 32 L24 18 M32 32 L32 10" strokeLinecap="round" />
        <path d="M6 10 C10 8 18 6 32 8" strokeLinecap="round" />
      </svg>
    ),
  },
]

async function getData() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return { featured: null, testimonials: null, settings: null }
  }
  try {
    const { sanityFetch } = await import('@/sanity/lib/live')
    const [featuredRes, testimonialsRes, settingsRes] = await Promise.all([
      sanityFetch({ query: FEATURED_TREATMENTS_QUERY }),
      sanityFetch({ query: TESTIMONIALS_QUERY }),
      sanityFetch({ query: SITE_SETTINGS_QUERY }),
    ])
    return {
      featured: featuredRes.data,
      testimonials: testimonialsRes.data,
      settings: settingsRes.data,
    }
  } catch {
    return { featured: null, testimonials: null, settings: null }
  }
}

export default async function HomePage() {
  const { featured, testimonials, settings } = await getData()

  const treatmentCards = featured?.length
    ? featured.map((t: { _id: string; name: string; tagline?: string; options?: { duration: string; price: string }[]; imageUrl?: string }) => ({
        id: t._id,
        name: t.name,
        tagline: t.tagline ?? '',
        duration: t.options?.[0] ? `From ${t.options[0].duration}` : 'Duration varies',
        price: t.options?.[0] ? `From ${t.options[0].price}` : 'Price on request',
        img: t.imageUrl ?? '/images/treatment-mask.jpg',
        alt: t.name,
      }))
    : staticFeatured

  const testimonialList = testimonials?.length ? testimonials : staticTestimonials

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy-800">
        <FlowerBackground color="#C4A05A" opacity={0.07} />
        <HomeHero
          tagline={settings?.heroTagline ?? undefined}
          subtitle={settings?.heroSubtitle ?? undefined}
        />
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="relative bg-cream-300 overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.08} />
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/salon-interior.jpg"
              alt="Nerine Beauty treatment room"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream-300/10" />
          </div>
          <div className="flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-20">
            <FadeIn delay={0.1}>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-600 mb-4 block">
                About Nerine Beauty
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-5xl text-navy-800 leading-tight mb-6">
                {settings?.aboutTitle ?? (
                  <>More than a salon —<br /><em>an experience</em></>
                )}
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-sans text-navy-700/80 leading-relaxed mb-6">
                {settings?.aboutBody ?? 'Michelle has been transforming the skin and wellbeing of Guernsey clients for over two decades. Combining exceptional technique with the finest global beauty brands, every visit to Nerine Beauty is a moment of genuine luxury.'}
              </p>
            </FadeIn>
            <FadeInStagger className="grid grid-cols-3 gap-6 mb-8" stagger={0.1} delayStart={0.4}>
              {[
                { stat: '20+', label: 'Years experience' },
                { stat: '500+', label: 'Happy clients' },
                { stat: '5', label: 'Premium brands' },
              ].map((s) => (
                <FadeInItem key={s.stat}>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-navy-800 font-semibold">{s.stat}</div>
                    <div className="font-sans text-xs text-navy-700/70 mt-1 leading-tight">{s.label}</div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
            <FadeIn delay={0.5}>
              <Link href="/about" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors">
                Our Story
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <polyline points="5,3 11,8 5,13" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FEATURED TREATMENTS ──────────────────────────────── */}
      <section className="bg-navy-800 py-24 px-6 relative overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.05} flip />
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 block mb-3">Treatments</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream-200">Signature Treatments</h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.15}>
            {(treatmentCards as { id: string; name: string; tagline: string; duration: string; price: string; img: string; alt: string }[]).map((t) => (
              <FadeInItem key={t.id}>
                <div className="group rounded-2xl overflow-hidden bg-navy-700 border border-navy-600/60 hover:border-gold-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-navy-950/50">
                  <div className="relative h-64 overflow-hidden bg-navy-700">
                    <Image
                      src={t.img}
                      alt={t.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  </div>
                  <div className="p-7">
                    <p className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-2">{t.tagline}</p>
                    <h3 className="font-serif text-xl text-cream-200 mb-3 leading-snug">{t.name}</h3>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-sans text-xs text-cream-400">{t.duration}</span>
                      <span className="font-serif text-lg text-gold-400">{t.price}</span>
                    </div>
                    <Link href="/treatments" className="block w-full text-center rounded-full border border-gold-500/50 py-2.5 font-sans text-xs font-medium tracking-wider text-cream-300 transition-all hover:bg-gold-500 hover:border-gold-500 hover:text-navy-900 active:scale-95">
                      See Options
                    </Link>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
          <FadeIn className="text-center mt-12">
            <Link href="/treatments" className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 px-8 py-3.5 font-sans text-sm font-medium tracking-wider text-cream-300 transition-all hover:border-gold-400 hover:text-gold-400">
              View All Treatments
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <polyline points="4,3 10,7 4,11" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── THE NERINE EXPERIENCE ─────────────────────────────── */}
      <section className="bg-navy-900 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 block mb-3">Why Nerine</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream-200">The Nerine Experience</h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-10" stagger={0.15}>
            {pillars.map((p) => (
              <FadeInItem key={p.title}>
                <div className="text-center px-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold-500/30 text-gold-400 mb-6">
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-xl text-cream-200 mb-3">{p.title}</h3>
                  <p className="font-sans text-sm text-cream-400 leading-relaxed">{p.body}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="relative bg-cream-300 py-24 px-6 overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.07} />
        <div className="mx-auto max-w-5xl relative z-10">
          <FadeIn className="text-center mb-12">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-600 block mb-2">Kind Words</span>
            <h2 className="font-serif text-4xl text-navy-800">What Our Clients Say</h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.15}>
            {(testimonialList as { _id: string; name: string; date?: string; quote: string; highlight?: string; avatar?: string; detail?: string }[]).map((t) => (
              <FadeInItem key={t._id}>
                <div className="bg-cream-100 rounded-2xl p-7 border border-cream-400/50 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-navy-200 flex-shrink-0 border border-cream-400">
                      {t.avatar ? (
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-navy-700">
                          <span className="font-serif text-sm text-cream-200 font-medium">
                            {t.name.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-serif text-navy-800 font-medium leading-tight">{t.name}</span>
                        <svg className="w-4 h-4 text-red-500 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.4l-3.71 2.14L5 8.42 2 5.5l4.15-.75z" />
                        </svg>
                        <span className="font-sans text-xs text-navy-700/70 leading-tight">
                          recommends <span className="font-semibold text-navy-800">Nerine Beauty</span>
                        </span>
                      </div>
                      {t.date && <p className="font-sans text-xs text-navy-700/50 mt-0.5">{t.date}</p>}
                    </div>
                  </div>
                  <p className="font-sans text-sm text-navy-800/80 leading-relaxed">{t.quote}</p>
                  {t.highlight && <p className="font-sans text-sm font-bold text-navy-800">{t.highlight}</p>}
                  {t.detail && !t.date && <p className="font-sans text-xs text-navy-700/60 tracking-wide">{t.detail}</p>}
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
          <FadeIn className="text-center mt-10">
            <a
              href="https://www.facebook.com/nerinebeautyguernsey/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-navy-800 px-8 py-3.5 font-sans text-sm font-semibold text-cream-200 transition-all hover:bg-navy-700 hover:shadow-lg hover:shadow-navy-900/30 active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
              Leave a Review on Facebook
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(196,160,90,0.12) 0%, transparent 70%)' }} />
        <FadeIn className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-script text-6xl sm:text-7xl text-gold-400 leading-none mb-4">Ready to treat yourself?</h2>
          <p className="font-sans text-cream-300/80 mb-10 text-base leading-relaxed">
            Book your appointment today and experience the Nerine difference — limited appointments available each week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="rounded-full bg-gold-500 px-10 py-4 font-sans text-sm font-semibold tracking-wider text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95">
              Book Your Appointment
            </Link>
            <Link href="/treatments" className="rounded-full border border-gold-500/40 px-10 py-4 font-sans text-sm font-medium tracking-wider text-cream-200 transition-all hover:border-gold-400 hover:text-gold-400">
              View Treatments
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
