import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { TreatmentsView } from '@/components/TreatmentsView'
import { treatments as staticTreatments } from '@/data/treatments'
import { TREATMENTS_QUERY } from '@/sanity/lib/queries'

export const metadata: Metadata = { title: 'Treatment Menu' }

async function getTreatments() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null
  try {
    const { sanityFetch } = await import('@/sanity/lib/live')
    const { data } = await sanityFetch({ query: TREATMENTS_QUERY })
    return data?.length ? data : null
  } catch {
    return null
  }
}

export default async function TreatmentsPage() {
  const sanityTreatments = await getTreatments()
  const treatments = sanityTreatments
    ? sanityTreatments.map((t: Record<string, unknown>) => ({ ...t, img: t.imageUrl ?? undefined }))
    : staticTreatments

  return (
    <main>
      <PageHero
        label="What we offer"
        title="Treatment Menu"
        subtitle="Every treatment is tailored to your individual skin, body and goals. We use only the finest professional products for results that speak for themselves."
      />
      <TreatmentsView treatments={treatments} />
    </main>
  )
}
