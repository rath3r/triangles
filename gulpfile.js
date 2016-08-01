'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  twig = require('gulp-twig'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean');

gulp.task('webserver', function() {
  connect.server({
      livereload: true,
      root: ['dist']
  });
});

gulp.task('livereload', function() {
  gulp.src([
      'assest/styles/*.less',
      'views/*.twig'
    ]).pipe(watch())
    .pipe(connect.reload());
});

gulp.task('clean', function () {
    gulp.src('dist/*', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('twig', function () {
    return gulp.src('views/index.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ]
            }
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('less', function() {
  gulp.src('assets/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('assets/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('assest/styles/*.less', ['less']);
    gulp.watch('views/**/*.twig', ['twig']);
});

gulp.task('default', [
  'clean',
  'twig',
  'less',
  'scripts',
  'webserver',
  'watch'
]);
