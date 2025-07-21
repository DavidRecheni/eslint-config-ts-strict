import tsStrict from "./index.js";

export default [
  ...tsStrict,
  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "dist/**",
      "build/**",
    ],
  },
  {
    files: ["test/**"],
    rules: {
      // Allow console.log in tests
      "no-console": "off",
    },
  },
];
