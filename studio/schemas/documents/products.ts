export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Products',
      type: 'reference',
      to: [{type: 'ring'}, {type: 'necklace'}],
    },
  ],
}
