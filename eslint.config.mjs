import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  // Flat config needs explicit ignores (FlatCompat doesn't bring Next's
  // default ignore of build output). Lint source only.
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "public/**",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
