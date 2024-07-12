
export const Menu = {
    slug: 'menu',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'nav',
            label: 'Navigation',
            type: 'array',
            fields: [
                {
                    name: 'link',
                    type: 'group',
                    fields: [
                        {
                            name: 'type',
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
                            admin: {
                                condition: (_: any, siblingData: { type: string; }) => siblingData?.type === 'page',
                            },
                        },
                        {
                            name: 'url',
                            label: 'Custom URL',
                            type: 'text',
                            admin: {
                                condition: (_: any, siblingData: { type: string; }) => siblingData?.type === 'custom',
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

export default Menu;
