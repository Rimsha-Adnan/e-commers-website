import Products from '@/app/components/Products'
import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
