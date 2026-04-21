import { createClient } from 'next-sanity'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.SEED_SECRET) {
    return Response.json({ error: 'Forbidden' }, { status: 403 })
  }

  const writeToken = process.env.SANITY_WRITE_TOKEN
  if (!writeToken) {
    return Response.json({ error: 'SANITY_WRITE_TOKEN not set' }, { status: 500 })
  }

  const client = createClient({
    projectId: '7bdb2ubj',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: writeToken,
    useCdn: false,
  })

  const treatments = [
    {
      _id: 'treatment-visible-age-reverse',
      _type: 'treatment',
      name: 'Visible Age Reverse Facial',
      slug: { _type: 'slug', current: 'visible-age-reverse-facial' },
      category: 'facials',
      tagline: 'Turn back the clock',
      description: 'Our signature age-reversing treatment targets fine lines, loss of firmness and uneven skin tone using advanced techniques and premium products — for visibly younger-looking skin after a single session.',
      featured: true,
      order: 1,
      options: [
        { _key: 'opt1', name: 'Express', duration: '45 min', price: '£55' },
        { _key: 'opt2', name: 'Full Treatment', duration: '75 min', price: '£85' },
        { _key: 'opt3', name: 'Deluxe', duration: '90 min', price: '£105' },
      ],
    },
    {
      _id: 'treatment-guinot-hydradermie',
      _type: 'treatment',
      name: 'Guinot Hydradermie Facials',
      slug: { _type: 'slug', current: 'guinot-hydradermie-facials' },
      category: 'facials',
      tagline: 'Your best skin yet',
      description: 'Smooth, clear, radiant and youthful. Revolutionary salon treatments and after-care products formulated with the best in skincare innovation to enhance and maintain results at home.',
      featured: true,
      order: 2,
      options: [
        { _key: 'opt1', name: 'Hydradermie Classic', duration: '60 min', price: '£70' },
        { _key: 'opt2', name: 'Hydradermie Lift', duration: '75 min', price: '£90' },
        { _key: 'opt3', name: 'Eye Logic', duration: '45 min', price: '£55' },
      ],
    },
    {
      _id: 'treatment-guinot-manual',
      _type: 'treatment',
      name: 'Guinot Manual Face Treatments',
      slug: { _type: 'slug', current: 'guinot-manual-face-treatments' },
      category: 'facials',
      tagline: 'The art of touch',
      description: "Expertly performed by hand, these treatments combine Guinot's precise massage techniques with targeted skincare to leave skin balanced, refreshed and deeply nourished.",
      featured: false,
      order: 3,
      options: [
        { _key: 'opt1', name: 'Aromatic Ritual', duration: '60 min', price: '£65' },
        { _key: 'opt2', name: 'Moisture Logic', duration: '60 min', price: '£65' },
        { _key: 'opt3', name: 'Skin Glow', duration: '75 min', price: '£80' },
      ],
    },
    {
      _id: 'treatment-a-lift',
      _type: 'treatment',
      name: 'A-Lift Treatments',
      slug: { _type: 'slug', current: 'a-lift-treatments' },
      category: 'facials',
      tagline: 'Non-surgical lift',
      description: 'The non-surgical alternative to a facelift. A-Lift uses patented three-phase current technology to lift, firm and tone facial muscles, stimulate cell renewal and boost collagen production.',
      featured: true,
      order: 4,
      options: [
        { _key: 'opt1', name: 'A-Lift Face', duration: '75 min', price: '£95' },
        { _key: 'opt2', name: 'Neck & Décolleté', duration: '60 min', price: '£80' },
        { _key: 'opt3', name: 'Full Face & Neck', duration: '90 min', price: '£120' },
      ],
    },
    {
      _id: 'treatment-massages',
      _type: 'treatment',
      name: 'Massages',
      slug: { _type: 'slug', current: 'massages' },
      category: 'body',
      tagline: 'Escape the everyday',
      description: 'From tension-melting deep tissue work to blissful aromatherapy rituals, every massage is tailored specifically to your needs, leaving you completely restored.',
      featured: false,
      order: 5,
      options: [
        { _key: 'opt1', name: 'Swedish Relaxation', duration: '60 min', price: '£65' },
        { _key: 'opt2', name: 'Deep Tissue', duration: '60 min', price: '£70' },
        { _key: 'opt3', name: 'Hot Stone', duration: '75 min', price: '£85' },
        { _key: 'opt4', name: 'Aromatherapy', duration: '60 min', price: '£70' },
      ],
    },
    {
      _id: 'treatment-waxing',
      _type: 'treatment',
      name: 'Waxing & Electrolysis',
      slug: { _type: 'slug', current: 'waxing-electrolysis' },
      category: 'hair-removal',
      tagline: 'Smooth for longer',
      description: 'Smooth, long-lasting results using the finest wax formulations for minimal discomfort. Electrolysis offers a permanent solution for unwanted hair.',
      featured: false,
      order: 6,
      options: [
        { _key: 'opt1', name: 'Full Leg Wax', duration: '45 min', price: '£40' },
        { _key: 'opt2', name: 'Half Leg Wax', duration: '30 min', price: '£25' },
        { _key: 'opt3', name: 'Bikini Wax', duration: '20 min', price: '£20' },
        { _key: 'opt4', name: 'Electrolysis (15 min)', duration: '15 min', price: '£22' },
        { _key: 'opt5', name: 'Electrolysis (30 min)', duration: '30 min', price: '£38' },
      ],
    },
    {
      _id: 'treatment-eyes',
      _type: 'treatment',
      name: 'Enhance Your Eyes',
      slug: { _type: 'slug', current: 'enhance-your-eyes' },
      category: 'eyes',
      tagline: 'Define your look',
      description: 'From expertly shaped brows to stunning lash lifts using Nouveau Lashes and LVL technology — our eye treatments frame your face beautifully for weeks.',
      featured: false,
      order: 7,
      options: [
        { _key: 'opt1', name: 'LVL Lash Lift', duration: '60 min', price: '£55' },
        { _key: 'opt2', name: 'Nouveau Classic Lashes', duration: '90 min', price: '£75' },
        { _key: 'opt3', name: 'Lash Tint', duration: '20 min', price: '£18' },
        { _key: 'opt4', name: 'Brow Tint & Shape', duration: '30 min', price: '£22' },
      ],
    },
    {
      _id: 'treatment-bio-sculpture',
      _type: 'treatment',
      name: 'Bio Sculpture Nails',
      slug: { _type: 'slug', current: 'bio-sculpture-nails' },
      category: 'nails',
      tagline: 'Gel or varnish',
      description: 'Bio Sculpture gel strengthens, protects and beautifies your natural nails. Available in an extensive colour range with long-lasting, chip-free results.',
      featured: false,
      order: 8,
      options: [
        { _key: 'opt1', name: 'Gel Overlay — Hands', duration: '60 min', price: '£45' },
        { _key: 'opt2', name: 'Gel Overlay — Feet', duration: '60 min', price: '£45' },
        { _key: 'opt3', name: 'Bio Varnish — Hands', duration: '45 min', price: '£35' },
        { _key: 'opt4', name: 'Bio Varnish — Feet', duration: '45 min', price: '£35' },
        { _key: 'opt5', name: 'Gel Infill', duration: '45 min', price: '£35' },
      ],
    },
  ]

  const testimonials = [
    {
      _id: 'testimonial-sarah',
      _type: 'testimonial',
      quote: "I've been coming to Nerine Beauty for five years and wouldn't go anywhere else. The skill, the products, the atmosphere — everything is simply exceptional.",
      name: 'Sarah M.',
      detail: 'Loyal client, 5+ years',
      featured: true,
      order: 1,
    },
    {
      _id: 'testimonial-claire',
      _type: 'testimonial',
      quote: 'My Guinot Hydradermie facial transformed my skin. I saw a difference after the very first session. Absolutely incredible.',
      name: 'Claire B.',
      detail: 'Guinot client',
      featured: true,
      order: 2,
    },
  ]

  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    heroTagline: 'Est. in Guernsey',
    heroSubtitle: 'Expert beauty treatments tailored to you, in the heart of Guernsey.',
    aboutTitle: 'More than a salon — an experience',
    aboutBody: 'Anne-Marie Lemaitre has dedicated her career to helping clients look and feel their very best. Based at La Sabri in the Vale, she brings warmth, professionalism and an exceptional eye for detail to every single appointment.',
    aboutBody2: 'Over more than 20 years, Anne-Marie has built lasting relationships with hundreds of Guernsey clients. Her approach is deeply personal: she takes the time to understand your unique skin, lifestyle and goals, then selects the treatments and products that will truly make a difference.',
    address: 'La Sabri, Vale Avenue\nVale, Guernsey\nGY3 5TF',
    phone: '01481 244114',
    email: 'annemlemaitre@cwgsy.net',
    openingHours: [
      { _key: 'h1', days: 'Tuesday – Friday', hours: '9am – 6pm', closed: false },
      { _key: 'h2', days: 'Saturday', hours: '9am – 4pm', closed: false },
      { _key: 'h3', days: 'Sunday – Monday', hours: '', closed: true },
    ],
  }

  const mutations = [
    ...treatments.map(doc => ({ createOrReplace: doc })),
    ...testimonials.map(doc => ({ createOrReplace: doc })),
    { createOrReplace: siteSettings },
  ]

  try {
    await client.mutate(mutations as Parameters<typeof client.mutate>[0])
    return Response.json({
      ok: true,
      created: `${treatments.length} treatments, ${testimonials.length} testimonials, 1 siteSettings`,
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return Response.json({ error: message }, { status: 500 })
  }
}
