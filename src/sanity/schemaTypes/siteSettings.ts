import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // ── Hero ────────────────────────────────────────────────────────
    defineField({
      name: 'heroTagline',
      title: 'Hero — Tagline',
      description: 'Small uppercase text above the main heading. Default: "Est. in Guernsey"',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero — Subtitle',
      description: 'Sentence below the "welcome to our salon" heading',
      type: 'string',
    }),
    // ── About ───────────────────────────────────────────────────────
    defineField({
      name: 'aboutTitle',
      title: 'About — Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'aboutBody',
      title: 'About — First Paragraph',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'aboutBody2',
      title: 'About — Second Paragraph',
      type: 'text',
      rows: 5,
    }),
    // ── Contact ─────────────────────────────────────────────────────
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'dayRange',
          title: 'Day Range',
          fields: [
            {
              name: 'days',
              title: 'Days',
              description: 'e.g. "Tuesday – Friday"',
              type: 'string',
            },
            {
              name: 'hours',
              title: 'Hours',
              description: 'e.g. "9am – 6pm" — leave blank if closed',
              type: 'string',
            },
            {
              name: 'closed',
              title: 'Closed',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: { title: 'days', subtitle: 'hours' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
