'use client'
import dynamic from 'next/dynamic'
import config from '../../../../sanity.config'

// Studio must be rendered client-side only
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
