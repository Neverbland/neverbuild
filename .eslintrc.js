module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['import', 'jsx-a11y', 'react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        moduleDirectory: ['node_modules', 'src', 'src/js', 'src/css']
      }
    }
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': [0],
    'class-methods-use-this': [0],
    'comma-dangle': ['error', 'never'],
    'function-paren-newline': [0],
    'global-require': [0],
    'import/no-dynamic-require': [0],
    'import/prefer-default-export': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'max-len': [0],
    'no-console': [1],
    'no-plusplus': [0],
    'no-underscore-dangle': [0],
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'react/prop-types': [0],
    'react/jsx-curly-brace-presence': [0],
    'react/no-array-index-key': [0],
    radix: [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/jsx-no-bind': [0],
    'react/no-danger': [0],
    'react/react-in-jsx-scope': [0],
    'react/style-prop-object': [0],
    'space-before-function-paren': ['error', 'never']
  }
};
