import { defineField, defineType } from 'sanity'

export const treatmentType = defineType({
  name: 'treatment',
  title: 'Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Treatment Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Facials', value: 'facials' },
          { title: 'Body', value: 'body' },
          { title: 'Hair Removal', value: 'hair-removal' },
          { title: 'Eyes & Brows', value: 'eyes' },
          { title: 'Nails', value: 'nails' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short phrase shown above the treatment name (e.g. "Turn back the clock")',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A few sentences describing the treatment and its benefits',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Treatment Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'options',
      title: 'Options & Pricing',
      description: 'Add each variant of this treatment with its duration and price',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'option',
          title: 'Option',
          fields: [
            { name: 'name', title: 'Option Name', type: 'string' },
            { name: 'duration', title: 'Duration', description: 'e.g. "60 min"', type: 'string' },
            { name: 'price', title: 'Price', description: 'e.g. "£65"', type: 'string' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
          },
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage',
      description: 'Show this in the Featured Treatments section on the homepage (max 3)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Lower numbers appear first in the treatment list',
      type: 'number',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'image',
    },
  },
})
