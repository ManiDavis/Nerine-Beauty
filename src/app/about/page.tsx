"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { FlowerBackground } from "@/components/FlowerBackground";

const qualifications = [
  "Guinot Certified Therapist",
  "A-Lift Advanced Practitioner",
  "Nouveau Lashes Certified",
  "LVL Lash Lift Certified",
  "Bio Sculpture Certified Technician",
  "CIDESCO International Diploma",
  "ITEC Beauty Therapy",
];

const brandDetails = [
  {
    name: "Guinot",
    subtitle: "Institut • Paris",
    description:
      "Renowned French skincare brand with over 60 years of innovation, combining cutting-edge technology with luxurious formulations for transformative results.",
  },
  {
    name: "Bio Sculpture",
    subtitle: "Gel Nails",
    description:
      "The original gel nail system, trusted by professionals worldwide for its strength, flexibility and extensive colour range that nourishes natural nails.",
  },
  {
    name: "Nouveau Lashes",
    subtitle: "LVL & Extensions",
    description:
      "The UK's leading lash brand, offering professional lash lift, tinting and extension services with award-winning technology.",
  },
  {
    name: "Sensory Retreats",
    subtitle: "Body Treatments",
    description:
      "Luxurious aromatherapy and body treatment ranges designed to restore balance, indulge the senses and deliver lasting results.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-navy-800 pt-40 pb-24 px-6 overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.08} />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.span
            className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 block mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our story
          </motion.span>
          <motion.h1
            className="font-script text-7xl sm:text-8xl text-gold-400 leading-none mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            About Nerine Beauty
          </motion.h1>
          <motion.p
            className="font-sans text-cream-300/80 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Two decades of expertise, passion, and genuine care for every client who walks through our door.
          </motion.p>
        </div>
      </section>

      {/* ── STORY SECTION ────────────────────────────────────── */}
      <section className="relative bg-cream-300 overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.07} flip />
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Text */}
          <div className="flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-20 order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl text-navy-800 leading-tight mb-6">
                A passion for beauty,<br />
                <em>refined over decades</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-sans text-navy-700/80 leading-relaxed mb-5">
                Nerine Beauty was founded by Anne-Marie Lemaitre, a highly qualified and passionate beauty therapist who has dedicated her career to helping clients look and feel their very best. Based at La Sabri in the Vale, Anne-Marie brings warmth, professionalism and an exceptional eye for detail to every single appointment.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-sans text-navy-700/80 leading-relaxed mb-8">
                Over more than 20 years, Anne-Marie has built lasting relationships with hundreds of Guernsey clients — many of whom have been coming for years. Her approach is deeply personal: she takes the time to understand your unique skin, lifestyle and goals, then selects the treatments and products that will truly make a difference.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-8 py-3.5 font-sans text-sm font-medium tracking-wider text-cream-200 transition-all hover:bg-navy-700 hover:shadow-lg active:scale-95 w-fit"
              >
                Book an Appointment
              </Link>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="relative min-h-[400px] lg:min-h-[600px] order-1 lg:order-2">
            <div className="absolute inset-0 img-placeholder-light">
              {/* Replace with: <Image src="/images/therapist.jpg" alt="Anne-Marie Lemaitre, Nerine Beauty" fill className="object-cover object-top" /> */}
              <span>therapist portrait photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATIONS ───────────────────────────────────── */}
      <section className="bg-navy-900 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 block mb-3">
              Credentials
            </span>
            <h2 className="font-serif text-4xl text-cream-200">
              Qualified & Certified
            </h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.08}>
            {qualifications.map((q) => (
              <FadeInItem key={q}>
                <div className="flex items-center gap-3 rounded-xl border border-navy-600/60 bg-navy-800/50 px-5 py-4">
                  <div className="w-5 h-5 flex-shrink-0 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#C4A05A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" />
                    </svg>
                  </div>
                  <span className="font-sans text-sm text-cream-300">{q}</span>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── BRAND PARTNERS ───────────────────────────────────── */}
      <section className="relative bg-cream-300 py-24 px-6 overflow-hidden">
        <FlowerBackground color="#C4A05A" opacity={0.07} />
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeIn className="text-center mb-14">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-600 block mb-3">
              Our Partners
            </span>
            <h2 className="font-serif text-4xl text-navy-800">Premium Brand Partners</h2>
            <p className="font-sans text-navy-700/70 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              We partner exclusively with brands that share our commitment to quality, innovation and results.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-8" stagger={0.12}>
            {brandDetails.map((b) => (
              <FadeInItem key={b.name}>
                <div className="rounded-2xl bg-cream-100 border border-cream-400/50 p-8 hover:shadow-lg hover:shadow-cream-500/20 transition-shadow">
                  <h3 className="font-serif text-2xl text-navy-800 mb-1">{b.name}</h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-600 mb-4">{b.subtitle}</p>
                  <p className="font-sans text-sm text-navy-700/80 leading-relaxed">{b.description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,160,90,0.1) 0%, transparent 70%)",
          }}
        />
        <FadeIn className="relative z-10 text-center max-w-xl mx-auto">
          <h2 className="font-serif text-4xl text-cream-200 mb-4">
            Experience the difference
          </h2>
          <p className="font-sans text-cream-300/70 text-sm leading-relaxed mb-8">
            We'd love to meet you and create a bespoke treatment plan tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gold-500 px-10 py-4 font-sans text-sm font-semibold tracking-wider text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
