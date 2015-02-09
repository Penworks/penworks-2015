module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    concat: {
            js: {
                    // 2. Configuration for concatinating files goes here.
                dist: {
                src: [
                    'assets/js/libs/*.js', // All JS in the libs folder
                    'assets/js/global.js'  // This specific file
                ],
                dest: 'assets/js/build/production.js',
                },
                },
                
            css: {
                // dist: {
                src: [
                    'assets/styles/boilerplate/stylesheets/base.css',  // Boilerplate CSS
                    'assets/styles/boilerplate/stylesheets/skeleton.css',  // Boilerplate CSS
                    'assets/styles/boilerplate/stylesheets/layout.css'  // Boilerplate CSS
                ],
                dest: 'assets/styles/build/boilerplate.css',
                },
          //  },
    },  
    uglify: {
         build: {
         src: 'assets/js/build/production.js',
         dest: 'assets/js/build/production.min.js',
        },
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'img/build/'
            }]
        },
    },
    sass: {
        dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'assets/styles/build/global.css': 'assets/styles/sass/mainstyles.scss'
            },
        },
    },   
    cssmin: {
        css:{
          src: [/*'assets/styles/build/boilerplate.css',*/'assets/styles/build/global.css', 'assets/styles/vendor/*.css'],
          dest: 'assets/styles/build/global.min.css'
        },
      },   
    
        watch: {
        scripts: {
            files: ['assets/js/*.js','assets/styles/*.css', 'assets/styles/sass/*.scss' ],
            tasks: ['concat', 'sass', 'cssmin', 'uglify'],
            options: {
                spawn: false,
            },
        }, 
    },             
    fontAwesomeVars: {
        main: {
            variablesSassPath: 'assets/styles/sass/_variables.scss',
            fontPath: '../assets/styles/fonts/font-awesome'      //NOTE: this must be relative to FINAL, compiled .css file - NOT the variables.less file! For example, this would be the correct path if the compiled css file is main.css which is in 'src/build' and the font awesome font is in 'src/bower_components/font-awesome/fonts' - since to get from main.css to the fonts directory, you first go back a directory then go into bower_components > font-awesome > fonts. 
        }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-font-awesome-vars');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.

    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'cssmin', 'fontAwesomeVars', 'watch']);

};