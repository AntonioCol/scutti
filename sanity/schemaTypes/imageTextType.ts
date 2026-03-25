import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const imageTextType = defineType({
  name: 'imageText',
  title: 'Immagine + Testo',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Testo alternativo',
        }),
      ],
    }),
    defineField({
      name: 'text',
      title: 'Testo',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'imagePosition',
      title: 'Posizione immagine',
      type: 'string',
      options: {
        list: [
          {title: 'Sinistra', value: 'left'},
          {title: 'Destra', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title ? (title.length > 50 ? title.slice(0, 50) + '...' : title) : 'Immagine + Testo',
        media,
      }
    },
  },
})
