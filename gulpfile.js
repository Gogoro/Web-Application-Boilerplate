var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
    gulp.src('./app/assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./app/assets/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);