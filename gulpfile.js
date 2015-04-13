
// Require modules
var gulp = require('gulp'), // Gulp
    sass = require('gulp-sass'), // Sass compiler
    sourcemaps = require('gulp-sourcemaps'), // Sass sourcemaps
    jshint = require('gulp-jshint'), // hint that js
    uglify = require('gulp-uglify'), // Make your javascript ugly and small
    markdown = require('markdown'), // Markdown converter
    fileinclude = require('gulp-file-include'), // You want html partials and markdown includes right?
    livereload = require('gulp-livereload'); // Livereload - so that you don't have to pres cmd+R all night long

// Sass task
gulp.task('sass', function () {
    gulp.src(['./app/sass/*.scss', './app/sass/**/*.scss']) // Files to be compiled
        .pipe(sourcemaps.init()) // Sourcemaps so that you don't have to run around blind
        .pipe(sass({errLogToConsole: true})) // Error logging to the console
    .pipe(sourcemaps.write()) // Write sourcemaps
    .pipe(gulp.dest('./public/assets/css')) // Placing the compiled CSS file where it needs to be
    .pipe(livereload()); // Reload that browser
});

// JavaScript task
gulp.task('javascript', function(){
    gulp.src(['./app/js/*.js', './app/js/**/*.js']) // files to compile, check and minify
        /*
	.pipe(jslint({ // Lint that javascript
            node: true, // Read in the official JSLint documentation
            evil: true, // Read in the official JSLint documentation
            nomen: true, // Read in the official JSLint documentation
            global: [], // Global declarations for all source files
            reporter: 'default', // Pass your prefered reporter
            edition: '2014-07-08', // specifiy custom jslint edition  by default, the latest edition will be used
            errorsOnly: false // specify whether or not to show 'PASS' messages for built-in reporter
        }))
        .on('error', function (error) {
            console.error(String(error)); // handle errors
        })
	*/
	.pipe(jshint()) // hint that js
  	.pipe(jshint.reporter('default')) // use the deafult built in reporter
        .pipe(uglify()) // Uglify the Javascript, make it minifyed
        .pipe(gulp.dest('./public/assets/js')) // Destination of the minifyed javascript
	    .pipe(livereload()); // Reload that browser
});

// FileInclude task
gulp.task('fileinclude', function() {
  gulp.src(['./app/html/*.html']) // BASE files to watch
    .pipe(fileinclude({ // Fill your base files with partials and other included files
        prefix: '@@', // Prefix for basepath
        basepath: '@file', // Default basepath
        filters: { // Include filters
            markdown: markdown.parse // Markdown parsing
        }
    }))
    .pipe(gulp.dest('./public/')) // Where to put your basefiles after being processed
    .pipe(livereload()); // Reload that browser
});

// Watch task
gulp.task('watch', function () {
    livereload.listen(); // listen to any livereload triggers
    gulp.watch(['./app/sass/*.scss', './app/sass/**/*.scss'] , ['sass']); // Run the sass task when sass files are being saved in the specified folders
    gulp.watch(['./app/js/*.js', './app/js/**/*.js'], ['javascript']); // Run the javascript task when javascript files are being saved in the specified folders
    gulp.watch(['./app/html/*.html', './app/html/**/*.html', './app/html/*.md', './app/html/**/*.md'], ['fileinclude']); // Run the fileinclude task when html or markdown files are being saved in the specified folders
});

// Run all the default tasks
gulp.task('default', ['sass', 'javascript', 'fileinclude', 'watch']);
