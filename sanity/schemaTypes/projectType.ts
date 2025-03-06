import {defineField, defineType} from 'sanity'
import {SparkleIcon} from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'listIndex',
      type: 'number',
      validation: (rule) => rule
        .required()
        .error('List index required')
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule
        .required()
        .error('Name required')
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule
      .required()
      .error('Description required')
    }),
    defineField({
      name: 'year',
      type: 'string',
      validation: (rule) => rule
      .required()
      .error('Year required')
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule
      .required()
      .error('At least 4 skills required')
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule
      .required()
      .error('Image required')
    }),
    defineField({
      name: 'link',
      description: 'Link to live project',
      type: 'url',
      validation: (rule) => rule
      .required()
      .error('Link required')
    }),
  ],
})