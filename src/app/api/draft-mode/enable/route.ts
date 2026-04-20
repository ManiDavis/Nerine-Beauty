import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(req: Request) {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return new Response('Sanity not configured', { status: 503 })
  }

  const { validatePreviewUrl } = await import('@sanity/preview-url-secret')
  const { client } = await import('@/sanity/lib/client')

  const clientWithToken = client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  })

  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    req.url
  )

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  draftMode().enable()
  redirect(redirectTo)
}
