type RuleType = {
  required: () => void
}

export default {
  name: 'necklace',
  title: 'Necklace',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: RuleType) => Rule.required(),
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
