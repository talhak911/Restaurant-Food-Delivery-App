import {BASE_URL} from '@env';
import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `${BASE_URL}/graphql`,
  documents: 'src/graphqlSchema/*.{ts,tsx}',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
