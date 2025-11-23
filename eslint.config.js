// eslint.config.js (ESLint v9+ flat config)
import js from "@eslint/js";
import globals from "globals";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    ignores: ["node_modules", "dist", ".output", "public", "wxt.config.ts"],
  },

  {
    files: ["entrypoints/**/*.{js,jsx,ts,tsx}", "entrypoints/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        defineContentScript: "readonly",
        defineBackground: "readonly",
        defineConfig: "readonly",
        defineVirtualModule: "readonly",
      },
      parser: tsParser,
    },

    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      // your rules...
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
