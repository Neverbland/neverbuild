module.exports = function(grunt) {
    grunt.project = {
        name: '<%= slugName %>',
        assetsFolder: ''
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            options: {
                watchTask: true,
                // you can proxy an existing local server
                // proxy: "local.dev",
                server: './'
            },
            dev: {
                bsFiles: {
                    src : [
                        grunt.project.assetsFolder + 'css/{,**/}*.css',
                        grunt.project.assetsFolder + 'js/{,**/}*.js',
                        grunt.project.assetsFolder + '*.html'
                    ]
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
        stripCssComments: {
            dist: {
                files: {
                    'css/app.css': 'css/app.css'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: grunt.project.assetsFolder + 'scss/{,**/}*.scss',
                tasks: ['sass:dev']
            },
            js: {
                files: grunt.project.assetsFolder + 'js/**/*.js',
                tasks: ['concat:dev']
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            dist: {
                files: {
                    'css/app.css': 'css/app.css'
                }
            },
        },
        concat: {
            options: {
                separator: ';'
            },
            dev: {
                src: [
                    grunt.project.assetsFolder + 'js/_vendors/**/*.js',
                    grunt.project.assetsFolder + 'js/vendors/**/*.js',
                    grunt.project.assetsFolder + 'js/custom/**/*.js'
                ],
                dest: grunt.project.assetsFolder + 'js/app.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                src: grunt.project.assetsFolder + 'js/app.js',
                dest: grunt.project.assetsFolder + 'js/app.js'
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

    grunt.registerTask('dist', [
        'sass:dist',
        'autoprefixer:dist',
        'stripCssComments:dist',
        'uglify:dist'
    ]);

    grunt.registerTask('serve', [
        'sass:dev',
        'browserSync:dev',
        'watch'
    ]);
};
