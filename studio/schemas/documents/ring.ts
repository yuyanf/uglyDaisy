export default {
  name: 'ring',
  title: 'Ring',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'productSeries',
      title: 'Product series',
      type: 'string',
    },
    {
      name: 'colors',
      title: 'Color',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
