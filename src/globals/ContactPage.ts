import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contactpage',
  label: 'Contact Page',
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
                  label: 'Hero Title',
                  defaultValue: "Let's Build Something Great Together",
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Hero Description',
                  defaultValue:
                    "Reach out to our team today. We're ready to answer your questions and kickstart your next project.",
                },
              ],
            },
          ],
        },
        {
          label: 'Get In Touch',
          fields: [
            {
              name: 'intro',
              type: 'group',
              label: 'Section Intro',
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  label: 'Kicker',
                  defaultValue: 'GET IN TOUCH',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Section Title',
                  defaultValue: "We'd love to hear from you.",
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Description',
                  defaultValue:
                    'Whether you have a question about our services, need a technical assessment, or are ready to start a project, our team is ready to help.',
                },
              ],
            },
          ],
        },
        {
          label: 'Contact Form',
          fields: [
            {
              name: 'form',
              type: 'group',
              label: 'Form Field Labels & Placeholders',
              fields: [
                {
                  name: 'nameLabel',
                  type: 'text',
                  label: 'Name Label',
                  defaultValue: 'NAME',
                },
                {
                  name: 'namePlaceholder',
                  type: 'text',
                  label: 'Name Placeholder',
                  defaultValue: 'Your name',
                },
                {
                  name: 'emailLabel',
                  type: 'text',
                  label: 'Email Label',
                  defaultValue: 'EMAIL',
                },
                {
                  name: 'emailPlaceholder',
                  type: 'text',
                  label: 'Email Placeholder',
                  defaultValue: 'you@company.com',
                },
                {
                  name: 'detailsLabel',
                  type: 'text',
                  label: 'Project Details Label',
                  defaultValue: 'PROJECT DETAILS',
                },
                {
                  name: 'detailsPlaceholder',
                  type: 'textarea',
                  label: 'Project Details Placeholder',
                  defaultValue:
                    'Tell us about your digital challenges or software goals...',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Submit Button Label',
                  defaultValue: 'Send Message',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
