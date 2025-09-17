import confusingBrowserGlobals from "confusing-browser-globals";

export default {
  rules: {
    // Core formatting rules - disabled for Prettier compatibility
    // PRETTIER CONFLICT: These rules conflict with Prettier formatting
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "func-call-spacing": "off",
    "indent": "off",
    "keyword-spacing": "off",
    "lines-between-class-members": "off",
    "no-extra-semi": "off",
    "object-curly-spacing": "off",
    "quotes": "off",
    "semi": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",

    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // TODO: enable? semver-major
    "array-bracket-newline": ["off", "consistent"], // object option alternative: { multiline: true, minItems: 3 }

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    // TODO: enable? semver-major
    "array-element-newline": ["off", { multiline: true, minItems: 3 }],

    // enforce spacing inside array brackets
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "array-bracket-spacing": "off",

    // enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "block-spacing": "off",

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    "capitalized-comments": [
      "off",
      "never",
      {
        line: {
          ignorePattern: ".*",
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: ".*",
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // enforce one true comma style
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "comma-style": "off",

    // disallow padding inside computed properties
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "computed-property-spacing": "off",

    // enforces consistent naming when capturing the current execution context
    "consistent-this": "off",

    // enforce newline at the end of file, with no multiple empty lines
    // PRETTIER CONFLICT: This rule can conflict with Prettier's end-of-file handling
    "eol-last": "off",

    // https://eslint.org/docs/rules/function-call-argument-newline
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "function-call-argument-newline": "off",

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    "func-name-matching": [
      "off",
      "always",
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    "func-names": "warn",

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    "func-style": ["off", "expression"],

    // require line breaks inside function parentheses if there are line breaks between parameters
    // https://eslint.org/docs/rules/function-paren-newline
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "function-paren-newline": "off",

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    "id-denylist": "off",

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    "id-length": "off",

    // require identifiers to match the provided regular expression
    "id-match": "off",

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "implicit-arrow-linebreak": "off",

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["off", "prefer-double"],

    // enforces spacing between keys and values in object literal properties
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "key-spacing": "off",

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    "line-comment-position": [
      "off",
      {
        position: "above",
        ignorePattern: "",
        applyDefaultPatterns: true,
      },
    ],

    // dont enforce consistent linebreak style
    // https://eslint.org/docs/rules/linebreak-style
    // PRETTIER CONFLICT: This rule can conflict with Prettier (already disabled)
    "linebreak-style": 0,

    // enforces empty lines around comments
    "lines-around-comment": "off",

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "lines-around-directive": "off",

    // specify the maximum depth that blocks can be nested
    "max-depth": ["off", 4],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    // PRETTIER CONFLICT: This rule can conflict with Prettier's line wrapping decisions
    "max-len": "off",

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    "max-lines": [
      "warn",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    "max-lines-per-function": [
      "off",
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": "off",

    // limits the number of parameters that can be used in the function declaration.
    "max-params": ["off", 3],

    // specify the maximum number of statement allowed in a function
    "max-statements": ["off", 10],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": ["off", { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "multiline-comment-style": "off",

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    "multiline-ternary": ["off", "never"],

    // require a capital letter for constructors
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
      },
    ],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "new-parens": "off",

    // allow/disallow an empty newline after var statement
    "newline-after-var": "off",

    // https://eslint.org/docs/rules/newline-before-return
    "newline-before-return": "off",

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "newline-per-chained-call": "off",

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "error",

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    "no-continue": "off",

    // disallow comments inline after code
    "no-inline-comments": "off",

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "error",

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": [
      "error",
      {
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow mixed spaces and tabs for indentation
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "no-mixed-spaces-and-tabs": "off",

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    "no-multi-assign": ["error"],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "no-multiple-empty-lines": "off",

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": "off",

    // disallow nested ternary expressions
    "no-nested-ternary": "warn",

    // disallow use of the Object constructor
    "no-new-object": "error",

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "error",

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    // disallow space between function identifier and application
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "no-spaced-func": "off",

    // disallow tab characters entirely
    // PRETTIER CONFLICT: This rule can conflict with Prettier's indentation choices
    "no-tabs": "off",

    // disallow the use of ternary operators
    "no-ternary": "off",

    // disallow trailing whitespace at the end of lines
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "no-trailing-spaces": "off",

    // allow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": "off",

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "no-whitespace-before-property": "off",

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "nonblock-statement-body-position": "off",

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "object-curly-newline": "off",

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "object-property-newline": "off",

    // allow just one var statement per function
    "one-var": ["error", "never"],

    // require a newline around variable declaration
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "one-var-declaration-per-line": "off",

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    "operator-assignment": ["error", "always"],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "operator-linebreak": "off",

    // disallow padding within blocks
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "padded-blocks": "off",

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "error",

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "error",

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    "quote-props": [
      "error",
      "as-needed",
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",

    // enforce spacing before and after semicolons
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "semi-spacing": "off",

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "semi-style": "off",

    // requires object keys to be sorted
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    "sort-vars": "off",

    // require or disallow spaces inside parentheses
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "space-in-parens": "off",

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "space-unary-ops": "off",

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "spaced-comment": "off",

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "switch-colon-spacing": "off",

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    // PRETTIER CONFLICT: This rule conflicts with Prettier formatting
    "template-tag-spacing": "off",

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["error", "never"],

    // require regex literals to be wrapped in parentheses
    "wrap-regex": "off",
  },
};
