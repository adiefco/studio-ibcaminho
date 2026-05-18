import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projetos',
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
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Descrição curta',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'content',
      title: 'Descrição completa',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
    }),

    defineField({
      name: 'active',
      title: 'Ativo?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})