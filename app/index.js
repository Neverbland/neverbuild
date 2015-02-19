'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var NEVERGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');
    },

    askFor: function() {
        var done = this.async();
        var yosay = require('yosay');

        this.log(yosay('Ey, Lad. I\'m here to help you kickstart your new NB project. Grunt, SASS, Bourbon and Neat are included.'));

        var prompts = [{
            type: 'confirm',
            name: 'sassOption',
            message: 'Would you like to install the SASS gem?',
            default: false
        }];

        this.prompt(prompts, function(props) {
            this.sassOption = props.sassOption;

            done();
        }.bind(this));
    },

    app: function() {
        this.imagesFolder = 'images';
        this.scssFolder = 'scss';
        this.cssFolder = 'css';
        this.jsFolder = 'javascripts';

        // Creating all the project folders
        this.mkdir(this.imagesFolder);
        this.mkdir(this.scssFolder);
        this.mkdir(this.cssFolder);
        this.mkdir(this.jsFolder);

        // Moving the right files/folders to the right folders
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.copy('_Gruntfile.js', 'Gruntfile.js');
        this.copy('_gitignore', '.gitignore');
    },

    projectfiles: function() {
        this.template('_index.html', 'index.html');
        this.directory('_scss', this.scssFolder);
    },

    install: function() {
        if (!this.options['skip-install']) {
            if (this.sassOption) {
                var gemSpawn;

                this.log(chalk.magenta('[ Installing the SASS gem ]'));

                gemSpawn = this.spawnCommand('sudo', ['gem', 'install', 'sass', '-v', '3.3.8']);

                gemSpawn.on('close', function(code) {
                    if (code) {
                        this.log(chalk.red('Gem couldn\'t be installed! WAT! Error: ' + code));
                    } else {
                        this.log(chalk.green('Gem installed successfully! Amazing.'));
                        this.installDependencies();
                    }
                }.bind(this));
            } else {
                this.installDependencies();
            }
        }
    },

    end: function() {
        this.spawnCommand('ln', ['-s', this.destinationPath('bower_components/normalize.css/normalize.css'), this.destinationPath('bower_components/normalize.css/_normalize.scss')]);
    }
});

module.exports = NEVERGenerator;