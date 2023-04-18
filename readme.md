# ts-strict-eslint-config

Very strict ESLint config for projects using TypeScript.

## Installation

Install my-project with `npm` or `yarn`

```bash
 npm install react-ts-strict-eslint-config --save-dev
```

```bash
yarn add react-ts-strict-eslint-config --dev
```

## Usage/Examples

After installing the package, you can use it in your ESLint configuration file by extending the ts-strict configuration:

```javascript
{
  "extends": "ts-strict"
}
```

### configuration

The `ts-strict` configuration extends the following ESLint configurations:

- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:@typescript-eslint/recommended-requiring-type-checking`
- `plugin:import/recommended`
- `plugin:import/typescript`
- `plugin:react/recommended`
- `plugin:react-hooks/recommended`
- `plugin:jsx-a11y/recommended`

It also includes additional rules to enforce strict coding standards. The individual rule sets are located in the `rules/` directory and can be extended separately if desired.

## Contributing

Contributions are always welcome!

If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.
