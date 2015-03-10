module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            app: '<%= _.slugify(appname) %>',
            assets: '',
            scss: ['<%= project.assets %>scss/app.scss']
        },
        connect: {
            dist: {
                options: {
                    port: 8888,
                    // change this to '0.0.0.0' to access the server from outside
                    hostname: 'localhost'
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'nested',
                    precision: 5,
                    sourcemap: 'none'
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
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= project.assets %>images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= project.assets %>images'
                }]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);

    grunt.registerTask('serve', [
        'sass:dev',
        'connect:dist',
        'watch'
    ]);
};