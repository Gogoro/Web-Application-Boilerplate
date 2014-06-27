module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'true',
          //compass: 'true'
        },
        files: {
          'app/assets/css/main.css': 'app/assets/sass/main.scss'
        }
      }
    },

    clean: ['build'],

    processhtml: {
      production: {
        files: {
          'app/index.html': ['app/html/index.html']
        }
      }
    },

    prettify: {
      options: {
        indent: 4,
        indent_char: ' ',
        indent_scripts: "normal",
        brace_style: 'expand',
        unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
      },
      all: {
        expand: true,
        cwd: 'app/build/html/',
        ext: '.html',
        src: ['*.html'],
        dest: ''
      }
    },

    watch: {
      sass: {
        files: ['app/assets/sass/*.{scss,sass}', 'app/assets/sass/**/*.{scss,sass}'],
        tasks: ['build-sass']
      },
      html: {
          files: ['app/html/**/*.html'],
          tasks: ['build-html']
      },
      livereload: {
        files: [
          'Gruntfile.js',
          'app/assets/css/*.css',
          'app/assets/js/**',
          'app/assets/**',
          'app/*.html',
          'app/*.php'
        ],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-prettify');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['watch', 'build']);

  grunt.registerTask('build', ['build-sass', 'build-js', 'build-html']);
  grunt.registerTask('build-sass', ['sass']);
//  grunt.registerTask('build-js', ['uglify', 'clean']);
  grunt.registerTask('build-html', ['processhtml', 'prettify', 'clean']);
};
