import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import { Great_Vibes, Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nerine Beauty | Expert Beauty Treatments in Guernsey',
    template: '%s | Nerine Beauty',
  },
  description:
    'Nerine Beauty offers expert beauty treatments in Vale, Guernsey — including Guinot facials, A-Lift, lash treatments, massages and more.',
  keywords: ['beauty salon', 'Guernsey', 'Guinot', 'facial', 'lashes', 'massage', 'Vale'],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en" className={`${greatVibes.variable} ${playfairDisplay.variable} ${raleway.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        {isEnabled && <VisualEditing />}
        {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && (
          // SanityLive enables real-time content updates
          <SanityLiveWrapper />
        )}
      </body>
    </html>
  )
}

async function SanityLiveWrapper() {
  try {
    const { SanityLive } = await import('@/sanity/lib/live')
    return <SanityLive />
  } catch {
    return null
  }
}
