import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import stylistic from "@stylistic/eslint-plugin";

// Import rule configurations
import bestPracticesRules from "./rules/best-practices.js";
import errorsRules from "./rules/errors.js";
import nodeRules from "./rules/node.js";
import styleRules from "./rules/style.js";
import variablesRules from "./rules/variables.js";
import es6Rules from "./rules/es6.js";
import importsRules from "./rules/imports.js";
import strictRules from "./rules/strict.js";
import typescriptRules from "./rules/typescript.js";
import stylisticRules from "./rules/stylistic.js";

export default [
  {
    name: "eslint-config-ts-strict/base",
    files: ["**/*.{js,mjs,cjs,ts,tsx,d.ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      "import": eslintPluginImport,
      "@stylistic": stylistic,
    },
    settings: {
      // Apply special parsing for TypeScript files
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
      },
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      // Original: ['.mjs', '.js', '.json']
      "import/resolver": {
        node: {
          extensions: [".mjs", ".js", ".json", ".ts", ".d.ts"],
        },
      },
      // Append 'ts' extensions to Airbnb 'import/extensions' setting
      // Original: ['.js', '.mjs', '.jsx']
      "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],
      // Resolve type definition packages
      "import/external-module-folders": ["node_modules", "node_modules/@types"],
    },
    rules: {
      ...bestPracticesRules.rules,
      ...errorsRules.rules,
      ...nodeRules.rules,
      ...styleRules.rules,
      ...variablesRules.rules,
      ...es6Rules.rules,
      ...importsRules.rules,
      ...strictRules.rules,
      ...typescriptRules.rules,
      ...stylisticRules.rules,
    },
  },
];
