import type { GlobalConfig } from 'payload'

export const WorksPage: GlobalConfig = {
  slug: 'workspage',
  label: 'Works Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: 'Hero Section',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Page Title',
                  defaultValue: 'Our Works',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue:
                    "Explore how we've helped leading businesses scale, secure, and innovate with cutting-edge infrastructure.",
                },
              ],
            },
          ],
        },
        {
          label: 'Projects by Category',
          fields: [
            {
              name: 'categories',
              type: 'array',
              label: 'Work Categories',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Category Name',
                  required: true,
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Projects',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Project Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Project Description',
                      required: true,
                    },
                    {
                      name: 'tags',
                      type: 'array',
                      label: 'Tags',
                      fields: [
                        {
                          name: 'name',
                          type: 'text',
                          label: 'Tag Name',
                          required: true,
                        },
                      ],
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Project Image (Media Upload)',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      label: 'Project Image URL (fallback)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'CTA',
          fields: [
            {
              name: 'cta',
              type: 'group',
              label: 'Call to Action Section',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Heading',
                  defaultValue: 'Ready to build the future?',
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue:
                    "Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.",
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Label',
                  defaultValue: 'Start a Project',
                },
                {
                  name: 'buttonLink',
                  type: 'text',
                  label: 'Button Link',
                  defaultValue: '/contact',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
