module.exports = {
  root: true,
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'max-len': [0],
    'no-plusplus': [0],
    'radix': [0]
  }
};
