import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Eventos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'startDate',
      title: 'Data e hora de início',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'endDate',
      title: 'Data e hora de término',
      type: 'datetime',
    }),

    defineField({
      name: 'location',
      title: 'Local',
      type: 'string',
      initialValue: 'Rua Sacadura Cabral, 60C - Saúde - Rio de Janeiro',
    }),

    defineField({
      name: 'description',
      title: 'Descrição curta',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'content',
      title: 'Descrição completa',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'image',
      title: 'Imagem do evento',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'featured',
      title: 'Destacar como próximo evento?',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'active',
      title: 'Evento ativo?',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'startDate',
      media: 'image',
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleString('pt-BR') : 'Sem data',
        media,
      }
    },
  },
})