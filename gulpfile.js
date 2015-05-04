
//  Require modules
var gulp = require('gulp'), 
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'), 
    markdown = require('markdown'),
    fileinclude = require('gulp-file-include'),
    livereload = require('gulp-livereload');


/*  Sass task
 *  1. Find the files that is going to be compiled
 *  2. Sourcemaps so that you don't have to run around blind
 *  3. Error logging to the console
 *  4. Write sourcemaps
 *  5. Placing the compiled CSS file where it needs to be
 *  6. Reload the browser
 */
gulp.task('sass', function () {
    gulp.src(['./app/sass/*.scss', './app/sass/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(livereload());
});


/*  JavaScript task
 *  1. Find the files that is going to be compiled
 *  2. JsHint checks for errors in your code
 *  3. JsHint reports what it found to the console with the default reporter + stylish reporter
 *  4. Uglify the code, by making it minifyed
 *  5. Set the destination of the code
 *  6. Reload the browser
 */
gulp.task('javascript', function(){
    gulp.src(['./app/js/*.js', './app/js/**/*.js'])
	.pipe(jshint())
    .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter(stylish))
	.pipe(uglify())
    .pipe(gulp.dest('./public/assets/js'))
    .pipe(livereload());
});


/*  FileIncluder task
 *  1. Find the base file(s) to watch
 *  2. Fill the watched file with partials and other included files
 *  3. Set settings and filters for the FileIncluder
 *  4. Set the destination of the code
 *  5. Reload the browser
 */
gulp.task('fileinclude', function() {
  gulp.src(['./app/html/*.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
        filters: {
            markdown: markdown.parse
        }
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload());
});


/*  Watch task
 *  1. Listen to any livereload triggers
 *  2. Set watch tasks on files that should trigger a task in this script
 */
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['./app/sass/*.scss', './app/sass/**/*.scss'] , ['sass']);
    gulp.watch(['./app/js/*.js', './app/js/**/*.js'], ['javascript']);
    gulp.watch(['./app/html/*.html', './app/html/**/*.html', './app/html/*.md', './app/html/**/*.md'], ['fileinclude']);
});

// Run default tasks when typing gulp in the cmd/terminal
gulp.task('default', ['sass', 'javascript', 'fileinclude', 'watch']);
