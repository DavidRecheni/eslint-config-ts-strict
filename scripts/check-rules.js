#!/usr/bin/env node

/**
 * Custom script to check that all available ESLint rules have been implemented
 * in our configuration files. This replaces eslint-find-rules for ESLint v9 compatibility.
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.join(__dirname, '../index.js');

async function getAllAvailableRules() {
  // Get all available rules from installed plugins
  const rules = new Map();

  // ESLint core rules
  const coreRules = (await import('eslint/use-at-your-own-risk')).builtinRules;
  for (const [name] of coreRules) {
    rules.set(name, 'core');
  }

  // TypeScript ESLint rules
  try {
    const typescriptPlugin = await import('@typescript-eslint/eslint-plugin');
    if (typescriptPlugin.default?.rules) {
      for (const ruleName of Object.keys(typescriptPlugin.default.rules)) {
        rules.set(`@typescript-eslint/${ruleName}`, '@typescript-eslint');
      }
    }
  } catch (e) {
    console.warn('Could not load @typescript-eslint rules:', e.message);
  }

  // Import plugin rules
  try {
    const importPlugin = await import('eslint-plugin-import');
    if (importPlugin.default?.rules) {
      for (const ruleName of Object.keys(importPlugin.default.rules)) {
        rules.set(`import/${ruleName}`, 'import');
      }
    }
  } catch (e) {
    console.warn('Could not load import plugin rules:', e.message);
  }

  // Stylistic rules
  try {
    const stylisticPlugin = await import('@stylistic/eslint-plugin');
    if (stylisticPlugin.default?.rules) {
      for (const ruleName of Object.keys(stylisticPlugin.default.rules)) {
        rules.set(`@stylistic/${ruleName}`, '@stylistic');
      }
    }
  } catch (e) {
    console.warn('Could not load stylistic plugin rules:', e.message);
  }

  // Simple import sort rules
  try {
    const simpleImportSortPlugin = await import('eslint-plugin-simple-import-sort');
    if (simpleImportSortPlugin.default?.rules) {
      for (const ruleName of Object.keys(simpleImportSortPlugin.default.rules)) {
        rules.set(`simple-import-sort/${ruleName}`, 'simple-import-sort');
      }
    }
  } catch (e) {
    console.warn('Could not load simple-import-sort plugin rules:', e.message);
  }

  // Unused imports rules
  try {
    const unusedImportsPlugin = await import('eslint-plugin-unused-imports');
    if (unusedImportsPlugin.default?.rules) {
      for (const ruleName of Object.keys(unusedImportsPlugin.default.rules)) {
        rules.set(`unused-imports/${ruleName}`, 'unused-imports');
      }
    }
  } catch (e) {
    console.warn('Could not load unused-imports plugin rules:', e.message);
  }

  return rules;
}

async function getConfiguredRules() {
  const config = await import(configPath);
  const configArray = config.default;

  const configuredRules = new Set();

  // Extract rules from all config objects
  for (const configObj of configArray) {
    if (configObj.rules) {
      for (const ruleName of Object.keys(configObj.rules)) {
        configuredRules.add(ruleName);
      }
    }
  }

  return configuredRules;
}

async function main() {
  try {
    console.log('🔍 Checking ESLint rules coverage...\n');

    const [availableRules, configuredRules] = await Promise.all([
      getAllAvailableRules(),
      getConfiguredRules()
    ]);

    const unusedRules = [];

    for (const [ruleName, plugin] of availableRules) {
      if (!configuredRules.has(ruleName)) {
        // Skip deprecated, legacy, or problematic rules
        if (
          // Legacy/deprecated rules
          ruleName === 'id-blacklist' ||
          ruleName === 'indent-legacy' ||
          ruleName === 'no-unassigned-vars' ||

          // Platform-specific rules
          ruleName === 'linebreak-style' ||
          ruleName === '@stylistic/linebreak-style' ||

          // Rules we handle with other tools (like Prettier)
          ruleName.includes('indent') && plugin === '@stylistic' ||
          ruleName === 'max-len' ||
          ruleName === '@stylistic/max-len' ||

          // JSX-specific rules (we don't focus on JSX)
          ruleName.startsWith('@stylistic/jsx-') ||

          // Overly restrictive rules
          ruleName === 'prefer-regex-literals' ||
          ruleName === '@typescript-eslint/prefer-readonly-parameter-types' ||

          // Stylistic rules that are usually handled by Prettier
          ruleName === '@stylistic/array-bracket-newline' ||
          ruleName === '@stylistic/array-bracket-spacing' ||
          ruleName === '@stylistic/array-element-newline' ||
          ruleName === '@stylistic/arrow-parens' ||
          ruleName === '@stylistic/arrow-spacing' ||
          ruleName === '@stylistic/block-spacing' ||
          ruleName === '@stylistic/brace-style' ||
          ruleName === '@stylistic/comma-dangle' ||
          ruleName === '@stylistic/comma-spacing' ||
          ruleName === '@stylistic/comma-style' ||
          ruleName === '@stylistic/computed-property-spacing' ||
          ruleName === '@stylistic/curly-newline' ||
          ruleName === '@stylistic/dot-location' ||
          ruleName === '@stylistic/eol-last' ||
          ruleName === '@stylistic/function-call-argument-newline' ||
          ruleName === '@stylistic/function-call-spacing' ||
          ruleName === '@stylistic/function-paren-newline' ||
          ruleName === '@stylistic/generator-star-spacing' ||
          ruleName === '@stylistic/implicit-arrow-linebreak' ||
          ruleName === '@stylistic/key-spacing' ||
          ruleName === '@stylistic/keyword-spacing' ||
          ruleName === '@stylistic/line-comment-position' ||
          ruleName === '@stylistic/lines-around-comment' ||
          ruleName === '@stylistic/lines-between-class-members' ||
          ruleName === '@stylistic/max-statements-per-line' ||
          ruleName === '@stylistic/member-delimiter-style' ||
          ruleName === '@stylistic/multiline-comment-style' ||
          ruleName === '@stylistic/multiline-ternary' ||
          ruleName === '@stylistic/new-parens' ||
          ruleName === '@stylistic/newline-per-chained-call' ||
          ruleName === '@stylistic/no-confusing-arrow' ||
          ruleName === '@stylistic/no-extra-parens' ||
          ruleName === '@stylistic/no-extra-semi' ||
          ruleName === '@stylistic/no-floating-decimal' ||
          ruleName === '@stylistic/no-mixed-operators' ||
          ruleName === '@stylistic/no-mixed-spaces-and-tabs' ||
          ruleName === '@stylistic/no-multi-spaces' ||
          ruleName === '@stylistic/no-multiple-empty-lines' ||
          ruleName === '@stylistic/no-tabs' ||
          ruleName === '@stylistic/no-trailing-spaces' ||
          ruleName === '@stylistic/no-whitespace-before-property' ||
          ruleName === '@stylistic/nonblock-statement-body-position' ||
          ruleName === '@stylistic/object-curly-newline' ||
          ruleName === '@stylistic/object-curly-spacing' ||
          ruleName === '@stylistic/object-property-newline' ||
          ruleName === '@stylistic/one-var-declaration-per-line' ||
          ruleName === '@stylistic/operator-linebreak' ||
          ruleName === '@stylistic/padded-blocks' ||
          ruleName === '@stylistic/padding-line-between-statements' ||
          ruleName === '@stylistic/quote-props' ||
          ruleName === '@stylistic/quotes' ||
          ruleName === '@stylistic/rest-spread-spacing' ||
          ruleName === '@stylistic/semi' ||
          ruleName === '@stylistic/semi-spacing' ||
          ruleName === '@stylistic/semi-style' ||
          ruleName === '@stylistic/space-before-blocks' ||
          ruleName === '@stylistic/space-before-function-paren' ||
          ruleName === '@stylistic/space-in-parens' ||
          ruleName === '@stylistic/space-infix-ops' ||
          ruleName === '@stylistic/space-unary-ops' ||
          ruleName === '@stylistic/spaced-comment' ||
          ruleName === '@stylistic/switch-colon-spacing' ||
          ruleName === '@stylistic/template-curly-spacing' ||
          ruleName === '@stylistic/template-tag-spacing' ||
          ruleName === '@stylistic/type-annotation-spacing' ||
          ruleName === '@stylistic/type-generic-spacing' ||
          ruleName === '@stylistic/type-named-tuple-spacing' ||
          ruleName === '@stylistic/wrap-iife' ||
          ruleName === '@stylistic/wrap-regex' ||
          ruleName === '@stylistic/yield-star-spacing'
        ) {
          continue;
        }
        unusedRules.push({ name: ruleName, plugin });
      }
    }

    if (unusedRules.length === 0) {
      console.log('✅ All relevant ESLint rules are configured!');
      process.exit(0);
    } else {
      console.log(`❌ Found ${unusedRules.length} unused rules:\n`);

      // Group by plugin
      const byPlugin = {};
      for (const rule of unusedRules) {
        if (!byPlugin[rule.plugin]) {
          byPlugin[rule.plugin] = [];
        }
        byPlugin[rule.plugin].push(rule.name);
      }

      for (const [plugin, rules] of Object.entries(byPlugin)) {
        console.log(`📦 ${plugin}:`);
        for (const ruleName of rules.sort()) {
          console.log(`  - ${ruleName}`);
        }
        console.log();
      }

      console.log('Consider adding these rules to your configuration or documenting why they are excluded.');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error checking rules:', error.message);
    process.exit(1);
  }
}

main();
