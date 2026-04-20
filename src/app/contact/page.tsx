import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { ContactContent } from '@/components/ContactContent'
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'

export const metadata: Metadata = { title: 'Contact Us' }

async function getSettings() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null
  try {
    const { sanityFetch } = await import('@/sanity/lib/live')
    const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY })
    return data
  } catch {
    return null
  }
}

export default async function ContactPage() {
  const settings = await getSettings()

  return (
    <main>
      <PageHero
        label="Get in touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Book an appointment or ask us anything."
      />
      <ContactContent
        address={settings?.address ?? undefined}
        phone={settings?.phone ?? undefined}
        email={settings?.email ?? undefined}
        openingHours={settings?.openingHours ?? undefined}
      />
    </main>
  )
}
