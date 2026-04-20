import { defineQuery } from 'next-sanity'

export const FEATURED_TREATMENTS_QUERY = defineQuery(`
  *[_type == "treatment" && featured == true] | order(order asc)[0...3] {
    _id, name, "slug": slug.current, category, tagline, description, options,
    "imageUrl": image.asset->url
  }
`)

export const TREATMENTS_QUERY = defineQuery(`
  *[_type == "treatment"] | order(order asc) {
    _id, name, "slug": slug.current, category, tagline, description, options,
    "imageUrl": image.asset->url
  }
`)

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id, quote, name, detail
  }
`)

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    heroTagline, heroSubtitle, aboutTitle, aboutBody, aboutBody2,
    address, phone, email,
    openingHours[] { days, hours, closed }
  }
`)
