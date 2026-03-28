import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Articolo',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      description:
        'Titolo che compare in cima all’articolo e nei risultati di ricerca. Scrivilo chiaro e descrittivo.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Indirizzo web (slug)',
      type: 'slug',
      description:
        'Si genera dal titolo con «Genera». Serve all’URL: es. /blog/titolo-articolo. Non cambiarlo dopo la pubblicazione se l’articolo è già condiviso.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Estratto (anteprima)',
      type: 'text',
      rows: 3,
      description:
        '2–3 frasi: compaiono nella lista blog e nelle anteprime social. Non ripetere tutto l’articolo; invoglia a leggere.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autore',
      type: 'reference',
      to: {type: 'author'},
      description: 'Opzionale. Se scegli un autore, compare nei metadati dell’articolo.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine in evidenza',
      type: 'image',
      description:
        'Foto principale in testa all’articolo e nelle card del blog. Formato orizzontale consigliato. Se carichi un’immagine, compila anche il testo alternativo sotto.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Testo alternativo immagine',
          description:
            'Descrivi cosa si vede (es. «Bagno moderno con piastrelle grigie»). Importante per accessibilità e Google.',
        }),
      ],
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value?.asset) return true
          const alt = typeof value.alt === 'string' ? value.alt.trim() : ''
          if (!alt) return 'Compila il testo alternativo per l’immagine in evidenza'
          return true
        }),
    }),
    defineField({
      name: 'categories',
      title: 'Categorie',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      description: 'Opzionale. Etichette per organizzare gli articoli (se le usi nel sito).',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data pubblicazione',
      type: 'datetime',
      description:
        'Data che mostriamo sul sito. Per un nuovo articolo: imposta oggi o la data di uscita. Poi premi «Pubblica» in alto.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Testo dell’articolo',
      type: 'blockContent',
      description:
        'Scrivi qui il contenuto. Usa «Titolo 2» per i paragrafi principali, «Titolo 3» per sottosezioni. Aggiungi immagini dal menu «+».',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {
        ...selection,
        subtitle: author ? `di ${author}` : 'Senza autore',
      }
    },
  },
})
