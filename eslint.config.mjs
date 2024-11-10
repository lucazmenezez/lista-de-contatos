import globals from "globals";
import js from "@eslint/js";
import tsparser from "@typescript-eslint/parser";
import tsplugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier"; // Adiciona o Prettier
import prettierPlugin from "eslint-plugin-prettier"; // Adiciona o plugin do Prettier

export default [
  {
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      reactHooks,
      "@typescript-eslint": tsplugin,
      prettier: prettierPlugin, // Adiciona o plugin do Prettier
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error", // Aplicação do Prettier como regra
    },
  },
  js.configs.recommended,
  tsplugin.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  prettierConfig, // Estende as configurações do Prettier
];
