# Neverbuild

Kickstarts a new React app

### The Webpack configuration sits in [our Create React App fork](https://github.com/Neverbland/create-react-app/tree/master/packages/react-scripts) for easier maintainability.
This repository is intended to replace the `/template` folder of Create React App.

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.


## Features

* [Every Create React App features](https://github.com/facebookincubator/create-react-app#whats-inside)
* React Router
* SCSS
* SVG sprites
* Assets optimisation (png, jpg, svg, ...)
* Automatic polyfilling (using Polyfill.io)

## Getting started

### `npm install` or `yarn start`
Install the project.

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

## Writing JS

We use [EditorConfig](http://editorconfig.org/) for code consistency. Please see below to add support to your editor.

## Writing CSS

We use [BEM](https://en.bem.info/) across our projects.

## Testing

- Lint SCSS: `npm run lint:scss`

## Polyfills

We use [Polyfill.io](https://polyfill.io/v2/docs/) to polyfill missing Javascript functionality. Simply add any missing functionality by appending the polyfill.io url in `src/public/index.html` with the feature you need.

## Recommended Tools

- ESLint ([Atom Plugin](https://atom.io/packages/linter-eslint)/[Sublime Plugin](https://github.com/roadhump/SublimeLinter-eslint))
- SASS Lint ([Atom Plugin](https://atom.io/packages/linter-sass-lint)/[Sublime Plugin](https://github.com/skovhus/SublimeLinter-contrib-sass-lint))
- EditorConfig ([Atom Plugin](https://atom.io/packages/editorconfig)/[Sublime Plugin](https://github.com/sindresorhus/editorconfig-sublime))
- Beautifier ([Atom Plugin](https://atom.io/packages/atom-beautify))

## License

[MIT license](http://opensource.org/licenses/MIT)
