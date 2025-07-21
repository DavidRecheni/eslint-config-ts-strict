export default {
  rules: {
    // Stylistic rules that apply to TypeScript
    "lines-between-class-members": "off",
    "@stylistic/lines-between-class-members": ["error", "always", { "exceptAfterOverload": true }],

    // Brace style
    "brace-style": "off",
    "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],

    // Comma rules
    "comma-dangle": "off",
    "@stylistic/comma-dangle": [
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

    "comma-spacing": "off",
    "@stylistic/comma-spacing": [
      "error",
      { before: false, after: true },
    ],

    // Function call spacing
    "func-call-spacing": "off",
    "@stylistic/function-call-spacing": ["error", "never"],

    // Indentation
    "indent": "off",
    "@stylistic/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
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

    // Keyword spacing
    "keyword-spacing": "off",
    "@stylistic/keyword-spacing": [
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

    // Space rules
    "space-before-blocks": "off",
    "@stylistic/space-before-blocks": "error",

    "space-before-function-paren": "off",
    "@stylistic/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],

    "space-infix-ops": "off",
    "@stylistic/space-infix-ops": "error",

    // Object spacing
    "object-curly-spacing": "off",
    "@stylistic/object-curly-spacing": ["error", "always"],

    // Block spacing
    "@stylistic/block-spacing": ["error", "always"],

    // Key spacing
    "@stylistic/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      }
    ],

    // Comments
    "@stylistic/lines-around-comment": [
      "error",
      {
        allowModuleStart: true,
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
      }
    ],

    // Member delimiter style for interfaces and type literals
    "@stylistic/member-delimiter-style": "error",

    // Extra semicolons
    "no-extra-semi": "off",
    "@stylistic/no-extra-semi": "error",

    // Type annotation spacing
    "@stylistic/type-annotation-spacing": "error",

    // Quotes
    "quotes": "off",
    "@stylistic/quotes": ["error", "double", { avoidEscape: true }],

    // Semicolons
    "semi": "off",
    "@stylistic/semi": ["error", "always"],
  }
}