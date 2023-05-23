import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://countries.nausicaa.wilders.dev',
  documents: ['src/api/queries.ts'],
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}

export default config
