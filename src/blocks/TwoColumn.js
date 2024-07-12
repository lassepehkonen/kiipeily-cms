export const TwoColumnBlock = {
  slug: 'twoColumn',
  fields: [
    {
      name: 'leftColumnMedia',
      type: 'upload',
      label: 'Left Column Media',
      relationTo: 'media',
    },
    {
      name: 'leftColumnText',
      type: 'richtext',
      label: 'Left Column Text',
    },
    {
      name: 'rightColumnMedia',
      type: 'upload',
      label: 'Right Column Media',
      relationTo: 'media',
    },
    {
      name: 'rightColumnText',
      type: 'richtext',
      label: 'Right Column Text',
    },
    {
      name: 'reversed',
      type: 'boolean',
      label: 'Reversed Columns',
    },
  ],
};
