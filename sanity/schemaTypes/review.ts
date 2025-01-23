import { defineType } from "sanity"

export default defineType({
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Name',
        type: 'string',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        },
        {
            name: 'para',
            title: 'Para',
            type: 'string',
            },
        
    ],
})