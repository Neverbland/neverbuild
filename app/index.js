'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');

var NEVERGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');
    },

    app: function() {
        this.slugName = _s.slugify(this.appname);

        this.imagesFolder = 'images';
        this.scssFolder = 'scss';
        this.cssFolder = 'css';
        this.jsFolder = 'javascript';

        this.log(chalk.magenta(
            '[ Creating the structure. ]' +
            ' '
        ));

        // Creating all the project folders
        mkdirp(this.imagesFolder);
        mkdirp(this.scssFolder);
        mkdirp(this.cssFolder);
        mkdirp(this.jsFolder);

        // Moving the right files/folders to the right folders
        this.template('_package.json', 'package.json');
        this.copy('_Gruntfile.js', 'Gruntfile.js');
        this.copy('_gitignore', '.gitignore');
        this.copy('_editorconfig', '.editorconfig');
        this.copy('_jscsrc', '.jscsrc');
        this.copy('_scss-lint.yml', '.scss-lint.yml');
    },

    projectfiles: function() {
        this.template('_index.html', 'index.html');
        this.directory('_scss', this.scssFolder);
    },

    install: function() {
        this.log(chalk.green(
            '[ Cool. ]'
        ));

        this.installDependencies();
    }
});

module.exports = NEVERGenerator;
