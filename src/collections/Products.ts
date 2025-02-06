import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category', // required
      type: 'relationship', // required
      relationTo: 'categories', // required
      hasMany: false,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
  ],
  upload: true,
}
