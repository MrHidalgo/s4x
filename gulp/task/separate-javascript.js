const gulp        = require('gulp'),
  plumber         = require('gulp-plumber'),
  concat          = require('gulp-concat'),
  order           = require("gulp-order"),
  babel           = require('gulp-babel'),
  changedInPlace  = require('gulp-changed-in-place');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 *
 * @type {*[]}
 */
const srcPath = [
  configPath.src.separateJs + '/*.js'
];


/**
 * @description Gulp Javascript - converting files to current standards.
 */
gulp.task('separate-js', function() {
  return gulp
    .src(srcPath)
      .pipe(plumber(configOption.pipeBreaking.err))
      // .pipe(concat('app.js'))
      .pipe(babel(configOption.es6))
      .pipe(changedInPlace(configOption.changed))
      .pipe(gulp.dest(configPath.dest.js))
});


/**
 * @description Gulp Javascript watch - keeps track of changes in files.
 */
gulp.task('separate-js:watch', function() {
  gulp.watch(
    configPath.src.separateJs + '/**',
    ['separate-js']
  );
});
