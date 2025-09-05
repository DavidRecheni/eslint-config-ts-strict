# ts-strict-eslint-config

Strongly opinionated ESLint config for projects using TypeScript, React and Prettier.

**ESLint v9 flat config only** - This package requires ESLint v9 and uses the modern flat configuration format.

## Installation

Install the package with `npm`, `yarn`, or `pnpm`:

```bash
npm i eslint-config-ts-strict eslint typescript --save-dev
```

```bash
yarn add eslint-config-ts-strict eslint typescript --dev
```

```bash
pnpm add eslint-config-ts-strict eslint typescript --dev
```

That's it! All required ESLint plugins are bundled as dependencies, so you only need to install the config package, ESLint itself, and TypeScript.

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import tsStrict from "eslint-config-ts-strict";

export default [
  ...tsStrict,
  {
    // Add your custom rules here
    rules: {
      // Example: override specific rules
    },
  },
];
```

### Whitespace-only configuration

For scenarios where you only want to enforce whitespace and formatting rules as errors:

```javascript
import tsStrictWhitespace from "eslint-config-ts-strict/whitespace";

export default [tsStrictWhitespace];
```

### Advanced Configuration

```javascript
import tsStrict from "eslint-config-ts-strict";

export default [
  // Apply the ts-strict configuration
  ...tsStrict,

  // Global ignores
  {
    ignores: [
      "dist/**",
      "build/**",
      "coverage/**",
      "node_modules/**",
      "*.min.js",
    ],
  },

  // Override specific rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Different rules for test files
  {
    files: ["**/*.test.{ts,tsx,js,jsx}", "**/*.spec.{ts,tsx,js,jsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
```

## Peer Dependencies

This configuration requires the following peer dependencies:

- `eslint` >= 9.0.0
- `@typescript-eslint/eslint-plugin` >= 8.29.1
- `@typescript-eslint/parser` >= 8.29.1
- `eslint-plugin-import` >= 2.31.0
- `eslint-plugin-simple-import-sort` >= 12.1.1
- `eslint-plugin-unused-imports` >= 3.2.0
- `@eslint/js` >= 9.0.0

## Requirements

- **Node.js** >= 18.18.0
- **ESLint** >= 9.0.0

This package is designed specifically for ESLint v9's flat config format and does not support legacy `.eslintrc` configurations.

## Contributing

Contributions are always welcome!

If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.
