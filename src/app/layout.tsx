import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

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
    <html lang="en">
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
