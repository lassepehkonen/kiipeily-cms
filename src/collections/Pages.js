// src/collections/Pages.js

export const Pages = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'contentBlocks',
      type: 'blocks',
      blocks: [
        {
          slug: 'textBlock',
          fields: [
            { name: 'title', type: 'text' },
            { name: 'content', type: 'textarea' },
          ],
        },
        {
          slug: 'imageBlock',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'caption', type: 'text' },
          ],
        },
        {
          slug: 'videoBlock',
          fields: [
            { name: 'videoUrl', type: 'text' },
            { name: 'description', type: 'textarea' },
          ],
        },
        {
          slug: 'ctaBlock',
          fields: [
            { name: 'text', type: 'text' },
            { name: 'link', type: 'text' },
          ],
        },
        {
          slug: 'twoColumn',
          fields: [
            {
              name: 'leftColumn',
              type: 'group',
              fields: [
                { name: 'leftHeader', type: 'text' },
                { name: 'text', type: 'textarea' },
                { name: 'media', type: 'upload', relationTo: 'media' },
              ],
            },
            {
              name: 'rightColumn',
              type: 'group',
              fields: [
                { name: 'rightHeader', type: 'text' },
                { name: 'text', type: 'textarea' },
                { name: 'media', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          slug: 'header',
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'subheading', type: 'text' },
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
  ],
};

export default Pages;