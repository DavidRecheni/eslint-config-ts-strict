/* eslint global-require: 0 */

import objectAssign from "object.assign";
import baseConfig from "./index.js";

const whitespaceRules = [
  "array-bracket-newline",
  "array-bracket-spacing",
  "array-element-newline",
  "arrow-spacing",
  "block-spacing",
  "comma-spacing",
  "computed-property-spacing",
  "dot-location",
  "eol-last",
  "func-call-spacing",
  "function-paren-newline",
  "generator-star-spacing",
  "implicit-arrow-linebreak",
  "indent",
  "key-spacing",
  "keyword-spacing",
  "line-comment-position",
  "linebreak-style",
  "multiline-ternary",
  "newline-per-chained-call",
  "no-irregular-whitespace",
  "no-mixed-spaces-and-tabs",
  "no-multi-spaces",
  "no-regex-spaces",
  "no-spaced-func",
  "no-trailing-spaces",
  "no-whitespace-before-property",
  "nonblock-statement-body-position",
  "object-curly-newline",
  "object-curly-spacing",
  "object-property-newline",
  "one-var-declaration-per-line",
  "operator-linebreak",
  "padded-blocks",
  "padding-line-between-statements",
  "rest-spread-spacing",
  "semi-spacing",
  "semi-style",
  "space-before-blocks",
  "space-before-function-paren",
  "space-in-parens",
  "space-infix-ops",
  "space-unary-ops",
  "spaced-comment",
  "switch-colon-spacing",
  "template-tag-spacing",
  "import/newline-after-import",
];

// Create a config that only errors on whitespace rules
const whitespaceConfig = objectAssign({}, baseConfig);
whitespaceConfig.rules = objectAssign({}, baseConfig.rules);

// Set all non-whitespace rules to warn instead of error
Object.keys(whitespaceConfig.rules).forEach(ruleName => {
  if (!whitespaceRules.includes(ruleName)) {
    const ruleConfig = whitespaceConfig.rules[ruleName];
    if (Array.isArray(ruleConfig) && ruleConfig[0] === "error") {
      whitespaceConfig.rules[ruleName] = ["warn", ...ruleConfig.slice(1)];
    } else if (ruleConfig === "error") {
      whitespaceConfig.rules[ruleName] = "warn";
    }
  }
});

export default whitespaceConfig;
