import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Autore',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nome e cognome',
      type: 'string',
      description: 'Come deve comparire firmato sull’articolo.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Indirizzo web (slug)',
      type: 'slug',
      description: 'Si genera dal nome. Serve solo per eventuali pagine autore in futuro.',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      title: 'Foto profilo',
      type: 'image',
      description: 'Opzionale.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normale', value: 'normal'}],
          lists: [],
        }),
      ],
      description: 'Opzionale. Breve presentazione dell’autore.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
