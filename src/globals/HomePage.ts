import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homepage',
  label: 'Home Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Banner',
          fields: [
            {
              name: 'banner',
              type: 'group',
              label: 'Top Banner Setting',
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  label: 'Banner Type',
                  defaultValue: 'video',
                  options: [
                    { label: 'Video Banner', value: 'video' },
                    { label: 'Single Image', value: 'singleImage' },
                    { label: 'Image Carousel', value: 'carousel' },
                    { label: 'None / Hidden', value: 'none' },
                  ],
                },
                {
                  name: 'videoUrl',
                  type: 'text',
                  label: 'Video URL or Path',
                  defaultValue: '/Banner-video.mp4',
                },
                {
                  name: 'singleImage',
                  type: 'group',
                  label: 'Single Image Banner',
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Upload Image',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      label: 'Image URL (fallback)',
                      defaultValue: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop',
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Banner Title',
                      defaultValue: 'Welcome to Zevriqa',
                    },
                    {
                      name: 'subtitle',
                      type: 'text',
                      label: 'Banner Subtitle',
                      defaultValue: 'A single vision for a better future.',
                    },
                  ],
                },
                {
                  name: 'carouselSlides',
                  type: 'array',
                  label: 'Carousel Slides',
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Slide Image',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      label: 'Slide Image URL (fallback)',
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Slide Title',
                    },
                    {
                      name: 'subtitle',
                      type: 'text',
                      label: 'Slide Subtitle',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: 'Hero Section',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker / Subheading',
                  defaultValue: 'Software & Cloud Engineering',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Main Heading',
                  defaultValue: 'Scalable Solutions For Modern Business.',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue: 'Zevriqa engineers reliable custom software and cloud applications that streamline operations, improve performance, and support long-term growth.',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Explore Capabilities',
                },
                {
                  name: 'buttonLink',
                  type: 'text',
                  label: 'Button Link',
                  defaultValue: '/services',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Hero Image (Media upload)',
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                  defaultValue: 'Software engineering team collaborating in a modern office',
                },
              ],
            },
          ],
        },
        {
          label: 'Trusted By',
          fields: [
            {
              name: 'trustedBy',
              type: 'group',
              label: 'Trusted By Section',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Section Label',
                  defaultValue: 'Trusted by innovative companies worldwide',
                },
                {
                  name: 'companies',
                  type: 'array',
                  label: 'Client / Partner Companies',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      label: 'Company Name',
                      required: true,
                    },
                    {
                      name: 'logo',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Company Logo (optional)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'About',
          fields: [
            {
              name: 'about',
              type: 'group',
              label: 'About Section',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Who We Are',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Section Title',
                  defaultValue: 'Transforming vision into robust digital realities.',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue: "At Zevriqa, we don't just write code; we engineer solutions that drive business transformation. With a team of seasoned architects and developers, we partner with enterprises to modernize legacy systems, build scalable cloud infrastructure, and deliver custom software that directly impacts the bottom line.",
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                  defaultValue: 'Discover Our Story',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Link URL',
                  defaultValue: '/about',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'About Image',
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                  defaultValue: 'Software development team',
                },
              ],
            },
          ],
        },
        {
          label: 'Core Services',
          fields: [
            {
              name: 'features',
              type: 'group',
              label: 'Core Services Section',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Core Services',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Comprehensive Engineering',
                },
                {
                  name: 'services',
                  type: 'array',
                  label: 'Services List',
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: 'Icon',
                      defaultValue: 'Code',
                      options: [
                        { label: 'Code', value: 'Code' },
                        { label: 'Cloud', value: 'Cloud' },
                        { label: 'Plug / Integration', value: 'Plug' },
                        { label: 'Cpu / Processing', value: 'Cpu' },
                        { label: 'Database', value: 'Database' },
                        { label: 'Shield / Security', value: 'Shield' },
                        { label: 'Smartphone / Mobile', value: 'Smartphone' },
                        { label: 'Globe / Web', value: 'Globe' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Service Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Service Description',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Solutions',
          fields: [
            {
              name: 'solutions',
              type: 'group',
              label: 'Solutions Section',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Solutions We Build',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Engineered for specific business needs.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Solutions List',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Solution Title',
                      required: true,
                    },
                    {
                      name: 'desc',
                      type: 'textarea',
                      label: 'Solution Description',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Sectors',
          fields: [
            {
              name: 'sectors',
              type: 'group',
              label: 'Industries We Serve',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Industries We Serve',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Domain expertise across sectors.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Sectors List',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Sector Name',
                      required: true,
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Cover Image',
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
              name: 'tools',
              type: 'group',
              label: 'Technology Stack',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Technology Stack',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Modern tools for modern problems.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Technologies',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      label: 'Technology Name',
                      required: true,
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
                  defaultValue: 'Our Development Process',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'How we deliver success.',
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
          label: 'Why Zevriqa',
          fields: [
            {
              name: 'flawless',
              type: 'group',
              label: 'Why Zevriqa (Flawless)',
              fields: [
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Subtitle',
                  defaultValue: 'WHY ZEVRIQA',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Every system is designed to help you operate flawlessly.',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Section Image',
                },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Feature Highlights',
                  fields: [
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
          label: 'Stats',
          fields: [
            {
              name: 'stats',
              type: 'group',
              label: 'Key Metrics & Stats',
              fields: [
                {
                  name: 'items',
                  type: 'array',
                  label: 'Stats List',
                  fields: [
                    {
                      name: 'number',
                      type: 'text',
                      label: 'Stat Number (e.g. 2+, 99.9%)',
                      required: true,
                    },
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Stat Label',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Testimonials',
          fields: [
            {
              name: 'testimonials',
              type: 'group',
              label: 'Testimonials Section',
              fields: [
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Subtitle',
                  defaultValue: 'TESTIMONIALS',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'What our partners say.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Testimonial Quotes',
                  fields: [
                    {
                      name: 'quote',
                      type: 'textarea',
                      label: 'Quote',
                      required: true,
                    },
                    {
                      name: 'name',
                      type: 'text',
                      label: 'Author Name',
                      required: true,
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Role / Company',
                      required: true,
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Author Avatar (upload)',
                    },
                    {
                      name: 'avatarUrl',
                      type: 'text',
                      label: 'Avatar URL (fallback)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Blog Section',
          fields: [
            {
              name: 'blog',
              type: 'group',
              label: 'Blog Section',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'Latest Insights',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Engineering blog.',
                },
                {
                  name: 'posts',
                  type: 'array',
                  label: 'Featured Blog Posts',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Post Title',
                      required: true,
                    },
                    {
                      name: 'date',
                      type: 'text',
                      label: 'Published Date',
                      defaultValue: 'Oct 12, 2026',
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Post Image (upload)',
                    },
                    {
                      name: 'imageUrl',
                      type: 'text',
                      label: 'Post Image URL (fallback)',
                    },
                    {
                      name: 'link',
                      type: 'text',
                      label: 'Post Link',
                      defaultValue: '#',
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
              label: 'FAQ Section',
              fields: [
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Subtitle',
                  defaultValue: 'FAQ',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Frequent Questions.',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Questions & Answers',
                  fields: [
                    {
                      name: 'q',
                      type: 'text',
                      label: 'Question',
                      required: true,
                    },
                    {
                      name: 'a',
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
                  defaultValue: "Let's discuss how Zevriqa can engineer the right software solution to accelerate your business goals.",
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
