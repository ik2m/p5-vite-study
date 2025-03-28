import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "func-call-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "block-spacing": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    },
  },
  tseslint.configs.recommended,
]);