import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'aboutpage',
  label: 'About Page',
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
                  defaultValue: 'About Us',
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                  label: 'Subtitle',
                  defaultValue: 'Discover our vision and the dedicated team behind Zevriqa.',
                },
              ],
            },
          ],
        },
        {
          label: 'About / Empowering',
          fields: [
            {
              name: 'empowering',
              type: 'group',
              label: 'Empowering Section',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'About Zevriqa',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Empowering businesses through technology.',
                },
                {
                  name: 'desc1',
                  type: 'textarea',
                  label: 'First Paragraph',
                  defaultValue:
                    'Founded with a vision to bridge the gap between complex engineering and business efficiency, Zevriqa is a team of dedicated technologists, strategists, and innovators. We believe that the right software can transform how a company operates, scales, and delivers value to its customers.',
                },
                {
                  name: 'desc2',
                  type: 'textarea',
                  label: 'Second Paragraph',
                  defaultValue:
                    'Our collective expertise spans across multiple industries, allowing us to bring fresh perspectives and robust architectures to every digital challenge we solve.',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Label',
                  defaultValue: 'Work With Us',
                },
                {
                  name: 'buttonLink',
                  type: 'text',
                  label: 'Button Link',
                  defaultValue: '/contact',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Section Image (Media Upload)',
                },
                {
                  name: 'imageUrl',
                  type: 'text',
                  label: 'Image URL (fallback)',
                  defaultValue: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae189d07e7a.jpg?format=avif',
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                  defaultValue: 'Zevriqa team collaborating',
                },
              ],
            },
          ],
        },
        {
          label: 'Story & Journey',
          fields: [
            {
              name: 'journey',
              type: 'group',
              label: 'Our Story & Journey',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Our Story',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'A journey of innovation.',
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue:
                    'From a small consulting firm to a global digital engineering partner, our journey has been defined by a commitment to solving complex business challenges.',
                },
                {
                  name: 'milestones',
                  type: 'array',
                  label: 'Milestones',
                  fields: [
                    {
                      name: 'year',
                      type: 'text',
                      label: 'Year (e.g. 2016)',
                      required: true,
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Milestone Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Milestone Description',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Mission & Vision',
          fields: [
            {
              name: 'mission',
              type: 'group',
              label: 'Mission & Vision',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Purpose',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Mission & Vision.',
                },
                {
                  name: 'missionTitle',
                  type: 'text',
                  label: 'Mission Heading',
                  defaultValue: 'Our Mission',
                },
                {
                  name: 'missionDesc',
                  type: 'textarea',
                  label: 'Mission Statement',
                  defaultValue:
                    'To empower businesses through robust, scalable, and secure technology solutions that drive operational efficiency and measurable growth.',
                },
                {
                  name: 'visionTitle',
                  type: 'text',
                  label: 'Vision Heading',
                  defaultValue: 'Our Vision',
                },
                {
                  name: 'visionDesc',
                  type: 'textarea',
                  label: 'Vision Statement',
                  defaultValue:
                    'To be the global leader in digital engineering, setting the standard for how enterprises leverage technology to solve their most complex challenges.',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Section Image (Media Upload)',
                },
                {
                  name: 'imageUrl',
                  type: 'text',
                  label: 'Image URL (fallback)',
                  defaultValue: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1e7804da6.jpg?format=avif',
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                  defaultValue: 'Team strategy and planning',
                },
              ],
            },
          ],
        },
        {
          label: 'Values',
          fields: [
            {
              name: 'values',
              type: 'group',
              label: 'Our Core Values',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Our Values',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'What drives us forward.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Value Items',
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: 'Icon',
                      defaultValue: 'Lightbulb',
                      options: [
                        { label: 'Lightbulb (Innovation)', value: 'Lightbulb' },
                        { label: 'Shield (Transparency / Security)', value: 'Shield' },
                        { label: 'Users (Customer-First)', value: 'Users' },
                        { label: 'Gem (Quality)', value: 'Gem' },
                        { label: 'Handshake (Collaboration)', value: 'Handshake' },
                        { label: 'TrendingUp (Continuous Improvement)', value: 'TrendingUp' },
                        { label: 'Heart', value: 'Heart' },
                        { label: 'Zap', value: 'Zap' },
                        { label: 'CheckCircle', value: 'CheckCircle' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Value Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Value Description',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'What Makes Us Different',
          fields: [
            {
              name: 'different',
              type: 'group',
              label: 'What Makes Us Different',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Why Choose Us',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'What Makes Us Different',
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue:
                    'We combine deep technical expertise with a sharp focus on business outcomes, ensuring every line of code adds tangible value.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Points',
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: 'Icon',
                      defaultValue: 'Code',
                      options: [
                        { label: 'Code', value: 'Code' },
                        { label: 'Settings', value: 'Settings' },
                        { label: 'User', value: 'User' },
                        { label: 'Lock', value: 'Lock' },
                        { label: 'Shield', value: 'Shield' },
                        { label: 'Zap', value: 'Zap' },
                        { label: 'CheckCircle', value: 'CheckCircle' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Point Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Point Description',
                      required: true,
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
