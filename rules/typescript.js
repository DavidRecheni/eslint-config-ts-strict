module.exports = {
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
    "import/extensions": [".js", ".mjs", ".ts", ".tsx", ".d.ts"],
    // Resolve type definition packages
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    "@typescript-eslint/adjacent-overload-signatures": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
    "@typescript-eslint/array-type": ["error", { default: "array" }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/await-thenable.md
    "@typescript-eslint/await-thenable": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    "@typescript-eslint/ban-ts-comment": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
    "@typescript-eslint/ban-tslint-comment": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],

    // https://typescript-eslint.io/rules/consistent-generic-constructors/
    "@typescript-eslint/consistent-generic-constructors": [
      "warn",
      "constructor",
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
    "@typescript-eslint/consistent-indexed-object-style": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "allow", },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-exports.md
    "@typescript-eslint/consistent-type-exports": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    "@typescript-eslint/explicit-function-return-type": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "no-public" },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/init-declarations.md
    // enforce or disallow variable initializations at definition
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    "@typescript-eslint/member-delimiter-style": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/method-signature-style.md
    "@typescript-eslint/method-signature-style": ["error", "property"],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
    "naming-convention": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    // The TypeScript version also adds 3 new options, all of which should be set to the same value as the base config
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        enums: "always-multiline",
        generics: "ignore",
        tuples: "always-multiline",
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error",
      { before: false, after: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],

    // Replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],

    "@typescript-eslint/no-deprecated": "error",
    "@typescript-eslint/no-restricted-types": "off",
    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],


    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md
    "@typescript-eslint/member-ordering": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-base-to-string.md
    "@typescript-eslint/no-base-to-string": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    "@typescript-eslint/no-confusing-void-expression": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    // deprecated
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    "@typescript-eslint/no-dynamic-delete": "error",

    // https://typescript-eslint.io/rules/no-empty-interface/
    "no-empty-interface": "off",
    "@typescript-eslint/no-empty-interface": 0,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
    "@typescript-eslint/no-explicit-any": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
    "@typescript-eslint/no-extra-non-null-assertion": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-parens.md
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    "@typescript-eslint/no-extraneous-class": [
      "error",
      { allowConstructorOnly: true, allowEmpty: true, allowStaticOnly: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md
    "@typescript-eslint/no-floating-promises": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.md
    "@typescript-eslint/no-for-in-array": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    "@typescript-eslint/no-inferrable-types": "error",

    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    "@typescript-eslint/no-invalid-void-type": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",

    // https://eslint.org/docs/latest/rules/no-magic-numbers
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "off",
      {
        ignore: [-1, 0, 1, 2],
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md
    "@typescript-eslint/no-meaningless-void-operator": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md
    "@typescript-eslint/no-misused-new": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md
    "@typescript-eslint/no-misused-promises": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md
    "@typescript-eslint/no-namespace": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    "@typescript-eslint/no-non-null-assertion": "error",

    // Deprecated
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    "@typescript-eslint/no-parameter-properties": "off",

    // https://typescript-eslint.io/rules/no-redundant-type-constituents/
    "@typescript-eslint/no-redundant-type-constituents": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md
    "@typescript-eslint/no-require-imports": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",

    // disallow specific imports
    // https://eslint.org/docs/rules/no-restricted-imports
    "no-restricted-imports": [
      "off",
      {
        paths: [],
        patterns: [],
      },
    ],
    "@typescript-eslint/no-restricted-imports": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md
    "@typescript-eslint/no-this-alias": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-type-alias.md
    "@typescript-eslint/no-type-alias": [
      "off",
      { allowAliases: "in-unions", allowGenerics: "always" },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    "@typescript-eslint/no-unnecessary-condition": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
    "@typescript-eslint/no-unnecessary-qualifier": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    "@typescript-eslint/no-unnecessary-type-arguments": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    "@typescript-eslint/no-unnecessary-type-assertion": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
    "@typescript-eslint/no-unnecessary-type-constraint": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
    "@typescript-eslint/no-unsafe-argument": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    "@typescript-eslint/no-unsafe-assignment": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    "@typescript-eslint/no-unsafe-call": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    "@typescript-eslint/no-unsafe-member-access": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-return.md
    "@typescript-eslint/no-unsafe-return": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-empty-export.md
    "@typescript-eslint/no-useless-empty-export": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md
    "@typescript-eslint/no-var-requires": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
    "@typescript-eslint/non-nullable-type-assertion-style": "error",

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": "off",

    // https://typescript-eslint.io/rules/parameter-properties/
    "@typescript-eslint/parameter-properties": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-as-const.md
    "@typescript-eslint/prefer-as-const": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
    "@typescript-eslint/prefer-enum-initializers": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.md
    "@typescript-eslint/prefer-for-of": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md
    "@typescript-eslint/prefer-function-type": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-includes.md
    "@typescript-eslint/prefer-includes": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
    "@typescript-eslint/prefer-literal-enum-member": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    "@typescript-eslint/prefer-namespace-keyword": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    "@typescript-eslint/prefer-nullish-coalescing": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    "@typescript-eslint/prefer-optional-chain": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly.md
    "@typescript-eslint/prefer-readonly": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    "@typescript-eslint/prefer-readonly-parameter-types": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    "@typescript-eslint/prefer-reduce-type-parameter": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    "@typescript-eslint/prefer-regexp-exec": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
    "@typescript-eslint/prefer-return-this-type": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    "@typescript-eslint/prefer-string-starts-ends-with": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.md
    "@typescript-eslint/promise-function-async": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    "@typescript-eslint/require-array-sort-compare": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    "@typescript-eslint/restrict-plus-operands": [
      "error"
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      { allowNumber: true },
    ],

    // https://typescript-eslint.io/rules/sort-type-constituents
    "@typescript-eslint/sort-type-constituents": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    "@typescript-eslint/strict-boolean-expressions": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    "@typescript-eslint/triple-slash-reference": [
      "error",
      { types: "prefer-import" },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    "@typescript-eslint/type-annotation-spacing": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/typedef.md
    "@typescript-eslint/typedef": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unbound-method.md
    "@typescript-eslint/unbound-method": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md
    "@typescript-eslint/unified-signatures": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-blocks.md
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-enum-values.md
    "@typescript-eslint/no-duplicate-enum-values": "error",

    // allows to throw only Error objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    "no-throw-literal": "off",
    // Disabled to work with CosmosError class that implements Error interface
    "@typescript-eslint/no-throw-literal": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    // https://github.com/sweepline/eslint-plugin-unused-imports
    "no-unused-vars": "off",
    "unused-imports/no-unused-vars-ts": "off",
    "unused-imports/no-unused-imports-ts": "off",
    "unused-imports/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true }],

    "unused-imports/no-unused-imports": "error",

    // https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
    "@typescript-eslint/no-unsafe-declaration-merging": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "warn",
      { functions: true, classes: true, variables: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    "require-await": "off",
    "@typescript-eslint/require-await": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    // https://eslint.org/docs/latest/rules/no-return-await
    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/block-spacing": ["error", "always"],
    "@typescript-eslint/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      }],
    "@typescript-eslint/lines-around-comment": [
      "error",
      {
        allowModuleStart: true,
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
      }
    ],
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-unsafe-enum-comparison": "error",
    "@typescript-eslint/class-methods-use-this": "off",
    "@typescript-eslint/max-params": ["error", { max: 4 }],
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/prefer-destructuring": "error",
    "@typescript-eslint/no-array-delete": "error",
    "@typescript-eslint/no-unnecessary-template-expression": "error",
    "@typescript-eslint/prefer-find": "error",
    "@typescript-eslint/prefer-promise-reject-errors": "error",
    "@typescript-eslint/no-unnecessary-template-expression": "error",
    "@typescript-eslint/use-unknown-in-catch-callback-variable": "off",
    "@typescript-eslint/no-empty-object-type": "error",
    "@typescript-eslint/only-throw-error": "error",
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
    "@typescript-eslint/no-unsafe-function-type": "error",
    "@typescript-eslint/no-unnecessary-type-parameters": "error",
    "@typescript-eslint/no-wrapper-object-types": "error"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // The following rules are checked (more thoroughly) by the TypeScript compiler
        // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
        // Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
        "constructor-super": "off",
        "getter-return": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",
        // The following rules are enabled in Airbnb config, but are recommended to be disabled within TypeScript projects
        // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
        "import/named": "off",
        "import/no-named-as-default-member": "off",
        // Disable `import/no-unresolved`, see README.md for details
        "import/no-unresolved": "off",
      },
    },
  ],
};
