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

    /*compass: {
      production: {
        options: {
          sassDir: 'app/assets/scss',
          cssDir: 'public/css',
          outputStyle: 'compress',
          noLineComments: true,
          force: true,
          sourcemap: true
        }
      }
    },*/

    watch: {
//      sass: {
//        files: ['app/assets/sass/*.{scss,sass}', 'app/assets/sass/**/*.{scss,sass}'],
//        tasks: ['sass']
//      },
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

  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['watch', 'build']);
};
