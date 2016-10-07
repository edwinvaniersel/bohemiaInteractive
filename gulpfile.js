var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

// minify js
gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// SASS procesor
gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write('maps'))
      .pipe(gulp.dest('dist/css'));
});

// webserver
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      port: 8080,
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// watch task
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'scripts', 'webserver', 'watch']);