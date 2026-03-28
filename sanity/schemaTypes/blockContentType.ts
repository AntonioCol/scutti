import {defineType, defineArrayMember, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const blockContentType = defineType({
  title: 'Contenuto articolo',
  name: 'blockContent',
  type: 'array',
  description:
    'Corpo dell’articolo. Dal menu «+»: paragrafi, titoli, immagine a tutta larghezza, oppure «Immagine + Testo» (metà o un terzo della riga, sinistra o destra).',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Paragrafo normale', value: 'normal'},
        {title: 'Titolo 1', value: 'h1'},
        {title: 'Titolo 2 (sezione)', value: 'h2'},
        {title: 'Titolo 3 (sottosezione)', value: 'h3'},
        {title: 'Titolo 4', value: 'h4'},
        {title: 'Citazione', value: 'blockquote'},
      ],
      lists: [{title: 'Elenco puntato', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Grassetto', value: 'strong'},
          {title: 'Corsivo', value: 'em'},
        ],
        annotations: [
          {
            title: 'Link al sito',
            name: 'link',
            type: 'object',
            fields: [
              defineField({
                title: 'Indirizzo (URL)',
                name: 'href',
                type: 'url',
                description: 'Incolla l’indirizzo completo, incluso https://',
              }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      title: 'Immagine a tutta larghezza',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Testo alternativo',
          description:
            'Cosa rappresenta l’immagine (obbligatorio per accessibilità). Se non compili, sul sito useremo un testo generico.',
        }),
      ],
    }),
    defineArrayMember({
      type: 'imageText',
    }),
  ],
})
