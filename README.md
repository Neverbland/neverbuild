# NEVERBUILD generator

[Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app.

## Features

* Grunt
    - Automagically compile your SCSS
    - Image optimization
* libsass
* Bourbon for Sass - A simple and lightweight mixin library for SASS
* Neat for Bourbon - A lightweight semantic grid framework for SASS and Bourbon
* jQuery
* Basic .editorconfig file for consistency across editors/IDEs
* jscsrc and scss-lint rules

For more information on what `generator-neverbuild` can do for you, take a look at the [Grunt tasks](https://github.com/vslio/generator-neverbuild/blob/master/app/templates/_package.json) used in the `package.json`.


## Getting Started

- Install: `npm install -g generator-neverbuild`
- Create project directory and cd into it: `mkdir project-name && cd $_`
- Run: `yo neverbuild`
- Run `grunt` for building & watch + compile your SCSS files


## License

[MIT license](http://opensource.org/licenses/MIT)