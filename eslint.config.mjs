import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    plugins: ['eslint-plugin-react-compiler'],
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'no-unused-vars': 'off',
      'react-compiler/react-compiler': 'error',
    },
  }),
];

export default eslintConfig;
