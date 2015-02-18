
// require node mudules
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jslint = require('gulp-jslint'),
    uglify = require('gulp-uglify'),
    markdown = require('markdown'),
    fileinclude = require('gulp-file-include'),
    livereload = require('gulp-livereload');


// Run sass task - compiler + livereload
gulp.task('sass', function () {
    gulp.src(['./app/assets/sass/*.scss', './app/assets/sass/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(livereload());
});


// Run javascript minify and concat
gulp.task('javascript', function(){
    // Run jsLint and then uglify
    gulp.src(['./app/assets/js/*.js', './app/assets/js/**/*.js'])
        .pipe(jslint({
            node: true,
            evil: true,
            nomen: true,
            global: [],
            reporter: 'default',
            edition: '2014-07-08',
            errorsOnly: false
        }))
        .on('error', function (error) {
            console.error(String(error));
        });

    gulp.src(['./app/assets/js/*.js', './app/assets/js/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets/js'))
	.pipe(livereload());
});


// Run html partials task...
gulp.task('fileinclude', function() {
  gulp.src(['./app/html/*.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
        filters: {
            markdown: markdown.parse
        }
    }))
    .pipe(gulp.dest('./public/'));
});


// watch files an do what needs to be done.
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['./app/assets/sass/*.scss', './app/assets/sass/**/*.scss'] , ['sass']);
    gulp.watch(['./app/assets/js/*.js', './app/assets/js/**/*.js'], ['javascript']);
    gulp.watch(['./app/html/*.html', './app/html/**/*.html'], ['fileinclude']);
});


// run the default tasks
gulp.task('default', ['sass', 'javascript', 'fileinclude', 'watch']);
