import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Nome categoria',
      type: 'string',
      description: 'Es. «Arredo bagno», «Tendenze». Poi collega questa categoria negli articoli.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Indirizzo web (slug)',
      type: 'slug',
      description: 'Si genera dal nome. Serve solo per eventuali filtri o URL nel sito.',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      description: 'Opzionale. Note interne o testo descrittivo se un giorno lo mostrerete sul sito.',
    }),
  ],
})
