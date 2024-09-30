
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "https://restaurant-backend-app-server-production.up.railway.app/graphql",
  documents: "src/graphql/*.{ts,tsx}",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [

      ],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
