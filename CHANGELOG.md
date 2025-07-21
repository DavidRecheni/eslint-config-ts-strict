# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2024-01-XX

### ⚠️ BREAKING CHANGES

- **ESLint v9 flat config only** - This package now only supports ESLint v9 with flat config format
- **Removed ESLint v8 support** - Legacy `.eslintrc` format is no longer supported
- **Simplified exports** - Removed separate `/flat` export, main export is now the flat config
- **Minimum Node.js version** - Now requires Node.js >= 18.18.0
- **Changed to ES modules** - All configuration files now use ES module syntax

### Added

- ✨ Native ESLint v9 flat config support as the main export
- ✨ Support for `@stylistic/eslint-plugin` v2.13.0+
- ✨ Support for `@eslint/js` package
- 📖 Comprehensive documentation for flat config usage
- 🧪 Example `eslint.config.js` file

### Changed

- 🔄 **BREAKING**: Main export now provides flat config directly (no more `/flat` subpath)
- 🔄 **BREAKING**: Requires ESLint v9.0.0+ (no backward compatibility)
- 🔄 **BREAKING**: Converted all modules to ES module format
- 🔄 **BREAKING**: Removed individual rule exports (use main config only)
- 📝 Simplified README focusing on ESLint v9 usage

### Removed

- ❌ **BREAKING**: ESLint v8 support
- ❌ **BREAKING**: Legacy `.eslintrc` format support
- ❌ **BREAKING**: Individual rule file exports
- ❌ **BREAKING**: `/flat` export path (merged into main export)

### Migration Guide

If you're upgrading from v1.x:

1. **Update to ESLint v9**:

   ```bash
   npm install eslint@^9.0.0 @typescript-eslint/eslint-plugin@^8.29.1 @typescript-eslint/parser@^8.29.1 @stylistic/eslint-plugin@^2.13.0 @eslint/js@^9.0.0
   ```

2. **Migrate to flat config**:

   ```javascript
   // Old (.eslintrc.js) - NO LONGER SUPPORTED
   module.exports = {
     extends: ["ts-strict"],
   };

   // New (eslint.config.js) - REQUIRED
   import tsStrict from "eslint-config-ts-strict";
   export default [...tsStrict];
   ```

3. **Remove `.eslintrc.*` files** and create `eslint.config.js`

4. **Update Node.js** to version 18.18.0 or higher

⚠️ **Note**: This version does NOT support ESLint v8 or legacy configuration formats. If you need ESLint v8 support, continue using v1.x of this package.

## [1.6.0] - Previous Version

Previous versions supported ESLint v8 and the legacy `.eslintrc` configuration format.
