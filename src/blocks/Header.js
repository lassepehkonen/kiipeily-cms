export const Header = {
    slug: 'header',
    access: {
      read: () => true,
      
    },
    labels: {
        singular: 'Header Block',
        plural: 'Header Blocks',
    },
    fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'text',
          label: 'Text',
          type: 'textarea',
        },
        {
          name: 'backgroundImage',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media'
        }
      ]
}