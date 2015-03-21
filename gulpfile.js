'use strict';

var gulp        = require('gulp');
var connect     = require('gulp-connect');
var browserify  = require('gulp-browserify');
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');

gulp.task('webserver', function() {
  connect.server({
    root: [__dirname],
    livereload: true
  });
});

gulp.task('browserify', function() {
  gulp.src('./logo.js')
    .pipe(plumber())
    .pipe(browserify())
    //.pipe(uglify())
    .pipe(rename('logo.min.js'))
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./logo.js', ['browserify']);
  gulp.watch('./index.html', function() {
    connect.reload();
  });
});

gulp.task('build', ['browserify']);
gulp.task('default', ['build', 'webserver', 'watch']);