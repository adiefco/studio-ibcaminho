import { defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'greeting',
      title: 'Texto de boas-vindas',
      type: 'string',
      initialValue: 'Que bom ter você por aqui!',
    }),

    defineField({
      name: 'weeklyWord',
      title: 'Inspiração da semana',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'weeklyReference',
      title: 'Autoria da Inspiração da semana',
      type: 'string',
    }),

    defineField({
      name: 'finalQuote',
      title: 'Frase final',
      type: 'text',
      rows: 3,
      initialValue:
        'Não só esperar pelos céus, mas construir hoje uma nova Terra',
    }),

    defineField({
      name: 'finalQuoteAuthor',
      title: 'Autoria da frase final',
      type: 'string',
      initialValue: 'IB Caminho',
    }),

    defineField({
      name: 'showQuickActions',
      title: 'Mostrar seção "Acessos Rápidos"?',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'showMovementSection',
      title: 'Mostrar seção "Igreja em movimento"?',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Home',
        subtitle: 'Conteúdo principal da tela inicial',
      }
    },
  },
})