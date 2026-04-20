import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: projectId || 'build-placeholder',
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: '/studio',
  },
})
