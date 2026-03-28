import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const imageTextType = defineType({
  name: 'imageText',
  title: 'Immagine + Testo',
  type: 'object',
  icon: ImageIcon,
  description:
    'Foto affiancata al testo: scegli larghezza (metà o un terzo della riga) e se l’immagine è a sinistra o a destra. Su mobile va sotto il testo.',
  fields: [
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      description: 'Carica la foto e compila sempre il testo alternativo sotto.',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Testo alternativo',
          description: 'Breve descrizione di cosa si vede nella foto.',
        }),
      ],
    }),
    defineField({
      name: 'text',
      title: 'Testo accanto all’immagine',
      type: 'text',
      rows: 5,
      description: 'Paragrafo che compare a fianco della foto.',
    }),
    defineField({
      name: 'imageWidth',
      title: 'Larghezza immagine',
      type: 'string',
      description:
        'Metà pagina: immagine e testo occupano circa il 50% ciascuno. Un terzo: immagine stretta (circa ⅓), più spazio al testo.',
      options: {
        list: [
          {title: 'Metà (50% / 50%)', value: 'half'},
          {title: 'Un terzo (⅓ immagine, ⅔ testo)', value: 'third'},
        ],
        layout: 'radio',
      },
      initialValue: 'half',
    }),
    defineField({
      name: 'imagePosition',
      title: 'Posizione immagine',
      type: 'string',
      description:
        'Sinistra o destra sul desktop. Con «un terzo» l’immagine resta nella colonna stretta a sinistra o a destra.',
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
