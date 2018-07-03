# Neverbuild

## Features

- Built with NextJS
- Styled Components
- Apollo Client
- ESLint
- Prettier
- EditorConfig
- SVG optimisation

## Getting started

Install dependencies:

```bash
npm i
```

Run in development mode:

```bash
npm run dev
```

The project will run on `http://localhost:3000`. To use another port, you can run `npm run dev -- -p <your port here>`.

## SVG

You can use the following npm task to clean up your SVGs after exporting them from Sketch/Illustrator:

```bash
npm run svg:pretty
```

## Polyfills

In the advent of needing a polyfill, please refer to [polyfill.io](https://polyfill.io/g).

## Recommended Tools

- ESLint ([Atom Plugin](https://atom.io/packages/linter-eslint)/[Sublime Plugin](https://github.com/roadhump/SublimeLinter-eslint))
- EditorConfig ([Atom Plugin](https://atom.io/packages/editorconfig)/[Sublime Plugin](https://github.com/sindresorhus/editorconfig-sublime))

## License

[MIT](http://opensource.org/licenses/MIT)
