import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  /* --------------------------------------------------
   * Base JS + TS
   * -------------------------------------------------- */
  js.configs.recommended,
  ...tseslint.configs.recommended,

  /* --------------------------------------------------
   * React
   * -------------------------------------------------- */
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      "react/jsx-uses-react": "off", // not needed in modern React
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
        },
      ],
    },
  },

  /* --------------------------------------------------
   * Hooks correctness (non-negotiable)
   * -------------------------------------------------- */
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  /* --------------------------------------------------
   * Unused code hygiene
   * -------------------------------------------------- */
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off", // handled better below
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  /* --------------------------------------------------
   * Prettier integration
   * -------------------------------------------------- */
  prettierConfig,
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "lf" }],
    },
  },
];
