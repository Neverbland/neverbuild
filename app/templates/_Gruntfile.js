module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            app: '<%= _.slugify(appname) %>',
            assets: '',
            scss: ['<%= project.assets %>scss/app.scss']
        },
        sass: {
            dev: {
                options: {
                    style: 'nested',
                    precision: 5
                },
                files: {
                    '<%= project.assets %>css/app.css': '<%= project.scss %>'
                }
            },
            dist: {
                options: {
                    style: 'nested',
                    precision: 5
                },
                files: {
                    '<%= project.assets %>css/app.css': '<%= project.scss %>'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: '<%= project.assets %>scss/{,**/}*.scss',
                tasks: ['sass:dev']
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);
};