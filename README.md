# Neverbuild

Kickstarts a new React app

## Features

- [x] Server Side Rendering
- [x] React Router
- [x] Automatic polyfilling (using Polyfill.io)
- [ ] Prettier & ESLint
- [ ] Stylelint
- [ ] SVG sprites
- [ ] Assets optimisation (png, jpg, svg, ...)
- [ ] SCSS

## Getting started

Below is a list of commands you will probably find useful.

### `npm start`

Runs the project in development mode.   
You can view your application at `http://localhost:3000`

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the build folder.      

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run start:prod`

Runs the compiled app in production.

You can again view your application at `http://localhost:3000`

### `npm test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm start -- --inspect`

To debug the node server, you can use `razzle start --inspect`. This will start the node server and enable the inspector agent. For more information, see [this](https://nodejs.org/en/docs/inspector/).

## Writing JS

We use [EditorConfig](http://editorconfig.org/) for code consistency. Please see below to add support to your editor.

## Writing CSS

We use [BEM](https://en.bem.info/) across our projects.

## Polyfills

We use [Polyfill.io](https://polyfill.io/v2/docs/) to polyfill missing Javascript functionality. Simply add any missing functionality by appending the polyfill.io url in `src/server.js` with the feature you need.

## Recommended Tools

- ESLint ([Atom Plugin](https://atom.io/packages/linter-eslint)/[Sublime Plugin](https://github.com/roadhump/SublimeLinter-eslint))
- SASS Lint ([Atom Plugin](https://atom.io/packages/linter-sass-lint)/[Sublime Plugin](https://github.com/skovhus/SublimeLinter-contrib-sass-lint))
- EditorConfig ([Atom Plugin](https://atom.io/packages/editorconfig)/[Sublime Plugin](https://github.com/sindresorhus/editorconfig-sublime))
- Beautifier ([Atom Plugin](https://atom.io/packages/atom-beautify))

## License

[MIT license](http://opensource.org/licenses/MIT)
