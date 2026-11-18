import type { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'servicespage',
  label: 'Services Page',
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
                  defaultValue: 'Our Services',
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue:
                    'Comprehensive digital solutions tailored to scale, secure, and accelerate your business.',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Label',
                  defaultValue: "Let's Talk",
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
        {
          label: 'Services Overview',
          fields: [
            {
              name: 'overview',
              type: 'group',
              label: 'Services Overview Grid',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Our Services',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Services Overview',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Service Grid Items',
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: 'Icon',
                      defaultValue: 'Monitor',
                      options: [
                        { label: 'Monitor (Web Development)', value: 'Monitor' },
                        { label: 'Smartphone (Mobile Apps)', value: 'Smartphone' },
                        { label: 'LayoutDashboard (UI/UX)', value: 'LayoutDashboard' },
                        { label: 'Search (SEO)', value: 'Search' },
                        { label: 'Shield (Cybersecurity)', value: 'Shield' },
                        { label: 'Zap (Performance)', value: 'Zap' },
                        { label: 'Cloud (Cloud Architecture)', value: 'Cloud' },
                        { label: 'ShoppingCart (E-commerce)', value: 'ShoppingCart' },
                        { label: 'Lock (Data Privacy)', value: 'Lock' },
                        { label: 'Briefcase (IT Consulting)', value: 'Briefcase' },
                        { label: 'Key (System Integration)', value: 'Key' },
                        { label: 'PenTool (Content Strategy)', value: 'PenTool' },
                      ],
                    },
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Service Name',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Service Details',
          fields: [
            {
              name: 'details',
              type: 'group',
              label: 'Detailed Service Rows',
              fields: [
                {
                  name: 'items',
                  type: 'array',
                  label: 'Service Details List',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Service Title',
                      required: true,
                    },
                    {
                      name: 'kicker',
                      type: 'text',
                      label: 'Category Kicker (e.g. ENGINEERING)',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Service Description',
                      required: true,
                    },
                    {
                      name: 'features',
                      type: 'array',
                      label: 'Bullet Points / Features',
                      fields: [
                        {
                          name: 'name',
                          type: 'text',
                          label: 'Feature Text',
                          required: true,
                        },
                      ],
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Service Image (Media Upload)',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      label: 'Service Image URL (fallback)',
                    },
                    {
                      name: 'imagePosition',
                      type: 'select',
                      label: 'Image Placement',
                      defaultValue: 'right',
                      options: [
                        { label: 'Right Side', value: 'right' },
                        { label: 'Left Side', value: 'left' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Tech Stack',
          fields: [
            {
              name: 'techStack',
              type: 'group',
              label: 'Technology Stack',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Our Technology Stack',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Tools we use to build.',
                },
                {
                  name: 'categories',
                  type: 'array',
                  label: 'Technology Categories',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Category Name',
                      required: true,
                    },
                    {
                      name: 'tools',
                      type: 'array',
                      label: 'Tools & Technologies',
                      fields: [
                        {
                          name: 'name',
                          type: 'text',
                          label: 'Tool Name',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Process',
          fields: [
            {
              name: 'process',
              type: 'group',
              label: 'Development Process',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Our Process',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'From concept to launch.',
                },
                {
                  name: 'steps',
                  type: 'array',
                  label: 'Process Steps',
                  fields: [
                    {
                      name: 'num',
                      type: 'text',
                      label: 'Step Number (e.g. 01)',
                      required: true,
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Step Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Step Description',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Industries',
          fields: [
            {
              name: 'domainExpertise',
              type: 'group',
              label: 'Domain Expertise',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Industries',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Domain expertise.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Industries',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Industry Name',
                      required: true,
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Cover Image (Media Upload)',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      label: 'Cover Image URL (fallback)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Why Choose Us',
          fields: [
            {
              name: 'statsBanner',
              type: 'group',
              label: 'Why Choose Our Services',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Why Choose Our Services',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Engineering excellence.',
                },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Feature Cards',
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: 'Icon',
                      defaultValue: 'Shield',
                      options: [
                        { label: 'Shield (Security)', value: 'Shield' },
                        { label: 'Rocket (Scale / Speed)', value: 'Rocket' },
                        { label: 'Users (Dedicated Team)', value: 'Users' },
                        { label: 'History (Agile Delivery)', value: 'History' },
                        { label: 'Zap', value: 'Zap' },
                        { label: 'CheckCircle', value: 'CheckCircle' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Feature Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Feature Description',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Case Studies',
          fields: [
            {
              name: 'caseStudies',
              type: 'group',
              label: 'Featured Case Studies',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Case Studies',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Real results.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Case Studies List',
                  fields: [
                    {
                      name: 'kicker',
                      type: 'text',
                      label: 'Case Kicker (e.g. CLOUD MIGRATION)',
                      required: true,
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Case Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Case Description',
                      required: true,
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Cover Image (Media Upload)',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      label: 'Cover Image URL (fallback)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'FAQ',
          fields: [
            {
              name: 'faq',
              type: 'group',
              label: 'Services FAQ',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Common Service Questions.',
                },
                {
                  name: 'faqs',
                  type: 'array',
                  label: 'Questions & Answers',
                  fields: [
                    {
                      name: 'question',
                      type: 'text',
                      label: 'Question',
                      required: true,
                    },
                    {
                      name: 'answer',
                      type: 'textarea',
                      label: 'Answer',
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
