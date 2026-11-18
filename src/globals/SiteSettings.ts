import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings & Company Info',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Company & Brand',
          fields: [
            {
              name: 'brandDescription',
              type: 'textarea',
              label: 'Brand Description (Footer)',
              defaultValue:
                'Delivering reliable, scalable digital solutions for businesses of all sizes to streamline operations and drive growth.',
            },
            {
              name: 'copyright',
              type: 'text',
              label: 'Copyright Notice',
              defaultValue: '© 2026 Zevriqa. All rights reserved.',
            },
            {
              name: 'tagline',
              type: 'text',
              label: 'Footer Tagline',
              defaultValue: 'Engineered for clarity, performance, and scale.',
            },
          ],
        },
        {
          label: 'Contact Details',
          fields: [
            {
              name: 'email',
              type: 'text',
              label: 'Primary Contact Email',
              defaultValue: 'zevriqasolutions@gmail.com',
            },
            {
              name: 'phoneNumbers',
              type: 'array',
              label: 'Phone Numbers',
              fields: [
                {
                  name: 'number',
                  type: 'text',
                  label: 'Phone Number',
                  required: true,
                },
              ],
            },
            {
              name: 'whatsappNumber',
              type: 'text',
              label: 'WhatsApp Number (e.g. +917994532263)',
              defaultValue: '+917994532263',
            },
            {
              name: 'whatsappMessage',
              type: 'text',
              label: 'Default WhatsApp Message',
              defaultValue: 'Hello Zevriqa, I would like to discuss a project.',
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Physical Address',
              defaultValue: '6VVQ+X99, Perumanna,\nKeralam 673019',
            },
            {
              name: 'googleMapsUrl',
              type: 'text',
              label: 'Google Maps Link',
              defaultValue:
                'https://www.google.com/maps/place/6VVQ%2BX99,+Perumanna,+Keralam+673019/@11.2449266,75.8882922,54m/data=!3m1!1e3!4m6!3m5!1s0x3ba65b309c30ccaf:0x616b27d6f0668e35!8m2!3d11.2449327!4d75.8884664!16s%2Fg%2F11f50wt4_k?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D',
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'instagram',
              type: 'text',
              label: 'Instagram URL',
              defaultValue:
                'https://www.instagram.com/zevriqasolutions?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
            },
            {
              name: 'twitter',
              type: 'text',
              label: 'Twitter / X URL',
              defaultValue: '#',
            },
            {
              name: 'facebook',
              type: 'text',
              label: 'Facebook URL',
              defaultValue:
                'https://www.facebook.com/profile.php?id=61594699738577&sk=directory_personal_details',
            },
            {
              name: 'linkedin',
              type: 'text',
              label: 'LinkedIn URL',
              defaultValue: '#',
            },
          ],
        },
      ],
    },
  ],
}
