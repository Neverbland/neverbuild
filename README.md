# Neverbuild

Kickstarts a new React app

## Features

* React
* React Router
* Webpack
* SCSS

## Getting started

- Install: `npm install`
- Start dev: `npm start`
- Production build: `npm run build`

## Production Server

## Testing
Run `npm run build` followed by `node server.js`.

- Lint SCSS: `npm run lint:scss`

## Server-side rendering
This branch is a PoC for prerender.io support using nginx. To test it locally do the following:
- Install prerender.io locally: `git clone https://github.com/prerender/prerender.git`
- `npm install`
- `cd prerender`
- `node server.js`
- Install nginx (`brew install nginx`)
- Use the nginx.conf file as your local config
- Start nginx `sudo nginx`
- Visit http://localhost using Facebook, Google, Twitter, etc. UA and enjoy the prerendered React app!

## Writing CSS

We use [BEM](https://en.bem.info/) across our projects.

## Recommended Tools

- ESLint ([Atom Plugin](https://atom.io/packages/linter-eslint)/[Sublime Plugin](https://github.com/roadhump/SublimeLinter-eslint))
- SASS Lint ([Atom Plugin](https://atom.io/packages/linter-sass-lint)/[Sublime Plugin](https://github.com/skovhus/SublimeLinter-contrib-sass-lint))
- Beautifier ([Atom Plugin](https://atom.io/packages/atom-beautify))

## License

[MIT license](http://opensource.org/licenses/MIT)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
