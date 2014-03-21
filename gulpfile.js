'use strict';
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
  return gulp.src('styles/**/*.scss')
    .pipe($.rubySass({
      style: 'compressed'
    }))
    .pipe(gulp.dest('styles'))
    .pipe($.size());
});

gulp.task('scripts', function() {
  return gulp.src('scripts/**/*.js')
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('default'))
    .pipe(gulp.dest('scripts'))
    .pipe($.size());
});

gulp.task('default', ['styles', 'scripts']);
