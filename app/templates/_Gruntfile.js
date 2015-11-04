module.exports = function(grunt) {
    grunt.project = {
        name: '<%= slugName %>',
        assetsFolder: ''
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            dist: {
                options: {
                    port: 8888,

                    // Change this to '0.0.0.0' to access the server from outside
                    hostname: 'localhost'
                }
            }
        },
        sass: {
            dev: {
                options: {
                    outputStyle: 'nested',
                    sourcemap: true
                },
                files: [{
                    expand: true,
                    cwd: grunt.project.assetsFolder + 'scss',
                    src: ['app.scss'],
                    dest: grunt.project.assetsFolder + 'css',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourcemap: false
                },
                files: [{
                    expand: true,
                    cwd: grunt.project.assetsFolder + 'scss',
                    src: ['app.scss'],
                    dest: grunt.project.assetsFolder + 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: grunt.project.assetsFolder + 'scss/{,**/}*.scss',
                tasks: ['sass:dev']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: grunt.project.assetsFolder + 'images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: grunt.project.assetsFolder + 'images'
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
