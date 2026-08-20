// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

/**
 * Build paths inferred from the build script. Verify that the entry path
 * matches the compiled artifact your build produces.
 */
export default compute({
  name: "express-api",
  // Required on 0.6.0 even when empty: omitting deps crashes the reserved-param check.
  deps: {},
  build: node({ module: import.meta.url, entry: "dist/index.js" }),
});
