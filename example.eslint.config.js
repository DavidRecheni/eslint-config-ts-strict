// Example ESLint v9 flat config
import tsStrict from "eslint-config-ts-strict";

export default [
  // Apply the ts-strict configuration
  ...tsStrict,

  // Optional: Add global ignores
  {
    ignores: [
      "dist/**",
      "build/**",
      "coverage/**",
      "node_modules/**",
      "*.min.js",
    ],
  },

  // Optional: Override specific rules or add custom configuration
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Example: Customize specific rules
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
    },
  },

  // Optional: Different rules for test files
  {
    files: ["**/*.test.{ts,tsx,js,jsx}", "**/*.spec.{ts,tsx,js,jsx}"],
    rules: {
      // Allow any in test files
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
