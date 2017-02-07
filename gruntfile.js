module.exports = function(grunt) {
    grunt.project = {
        name: '<%= slugName %>',
        assetsFolder: 'src/',
        buildFolder: 'build/'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        php: {
            test: {
                options: {
                    base: '',
                    port: 8010,
                    keepalive: true,
                    open: true
                }
            }
        },
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
                    cwd: grunt.project.assetsFolder + 'css',
                    src: ['app.scss'],
                    dest: grunt.project.buildFolder + 'css',
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
                    cwd: grunt.project.assetsFolder + 'css',
                    src: ['app.scss'],
                    dest: grunt.project.buildFolder + 'css',
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
                files: grunt.project.assetsFolder + 'css/{,**/}*.scss',
                tasks: ['sass:dev']
            },
            concat: {
                files: grunt.project.assetsFolder + 'js/{,**/}*.js',
                tasks: ['concat']
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                  require('autoprefixer')({browsers: ['last 4 versions']}),
                  require('postcss-flexbugs-fixes')
                ]
            },
            dist: {
                files: {
                    'css/app.css': 'css/app.css'
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    grunt.project.assetsFolder + 'js/_vendors/**/*.js',
                    grunt.project.assetsFolder + 'js/vendors/**/*.js',
                    grunt.project.assetsFolder + 'js/custom/**/*.js'
                ],
                dest: grunt.project.buildFolder + 'js/app.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                src: grunt.project.buildFolder + 'js/app.js',
                dest: grunt.project.buildFolder + 'js/app.min.js'
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

    grunt.registerTask('dist', [
        'sass:dist',
        'autoprefixer:dist',
        'stripCssComments:dist',
        'concat:dist',
        'uglify:dist'
    ]);

    grunt.registerTask('serve', [
        'sass:dev',
        'browserSync:dev',
        'watch'
    ]);
};
