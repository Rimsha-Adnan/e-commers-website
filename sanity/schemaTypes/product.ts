import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
     
    }),
    defineField({
      name: 'img2',
      type: 'string',
      
    }),
    defineField({
      name: 'para',
      type: 'number',
      
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'img',
      type: 'string',
      
    }),
    defineField({
        name: 'para1',
        type: 'number',
        
      }),
      defineField({
        name: 'para2',
        type: 'number',
        
      }),
      defineField({
        name: 'paragraph',
        type: 'string',
        
      }),
      defineField({
        name: 'color1',
        type: 'string',
        
      }),
      defineField({
        name: 'color2',
        type: 'string',
        
      }),
      defineField({
        name: 'color3',
        type: 'string',
        
      }),
      defineField({
        name: 'size1',
        type: 'string',
        
      }),
      defineField({
        name: 'size2',
        type: 'string',
        
      }),
      defineField({
        name: 'size3',
        type: 'string',
        
      }),
      defineField({
        name: 'size4',
        type: 'string',
        
      }),
  ],
})