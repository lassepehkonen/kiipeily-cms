import { Field } from 'payload';

const link: Field = {
    name: 'link',
    type: 'group',
    fields: [
    {name: 'type',
    type: 'radio',
    options: [
        {
            label: 'Custom URL',
            value: 'custom',
        },
        {
            label: 'Page',
            value: 'page',
        },
    ],
    admin: {
        layout: 'horizontal',
    },
},
{
    name: 'label',
    label: 'Label',
    type: 'text',
    required: true,
},
{
    name: 'page',
    label: 'Page to link to',
    type: 'relationship',
    relationTo: 'pages',
    required: true,
},
{
    name: 'url',
    label: 'Custom URL',
    type: 'text',
},
],
};

export { link };
