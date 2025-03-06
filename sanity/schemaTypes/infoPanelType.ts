import {defineField, defineType} from 'sanity'
import {LemonIcon} from '@sanity/icons'


export const infoPanelType = defineType({
  name: 'infoPanel',
  title: 'Info Panel',
  type: 'document',
  icon: LemonIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule
        .required()
        .error('Name required')
    }),
    defineField({
      name: 'about',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'period',
              title: 'Period',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'position',
              subtitle: 'company',
            },
          },
        },
      ],
    }),
  ],
})