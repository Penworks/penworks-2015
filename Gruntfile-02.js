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
        src: [
            'assets/styles/vendor/*.css',  // All vendor CSS
            'assets/styles/boilerplate/stylesheets/skeleton.css',  // Boilerplate CSS
            'assets/styles/boilerplate/stylesheets/layout.css',  // Boilerplate CSS
            'assets/styles/boilerplate/stylesheets/base.css'  // Boilerplate CSS
        ],
        dest: 'assets/styles/build/global.css',
        },
    },  
    cssmin: {
        css:{
          src: 'assets/styles/build/global.css',
          dest: 'assets/styles/build/global.min.css'
        },
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
                dest: 'images/build/'
            }]
        },
    },
    watch: {
        scripts: {
            files: ['assets/js/*.js','assets/styles/*.css' ],
            tasks: ['concat', 'cssmin', 'uglify'],
            options: {
                spawn: false,
            },
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
    css: {
        files: ['assets/styles/*.scss','assets/styles/*.css' ],
        tasks: ['sass'],
        options: {
            spawn: false,
        }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
   // grunt.registerTask('default', ['concat']);
   // grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'cssmin']);

};