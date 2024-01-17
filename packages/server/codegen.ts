import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "src/schema/**/schema.graphql",
  generates: {
    "src/schema": defineConfig({
      typesPluginsConfig: {
        contextType: "../server#AppContext",
        optionalResolveType: false,
        resolversNonOptionalTypename: false,
      },
    }),
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};
export default config;
