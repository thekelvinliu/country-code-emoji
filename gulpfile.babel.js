'use strict';

import path from 'path';
import del from 'del';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
const $ = plugins();

const SRC = 'src/*.js';
const DEST = 'build';
const GULPFILE = '*.babel.js';

// default task builds and tests code
gulp.task('default', ['test']);

// test code
gulp.task('test', ['build'], () =>
  gulp.src(path.join(DEST, 'test.js'), {read: false})
    .pipe($.mocha())
);

// watch code and automatically transpile
gulp.task('watch', ['build'], () => {
  gulp.watch(SRC, ['babel']);
  gulp.watch(GULPFILE, ['lint:gulpfile']);
});

// build generator by transpiling es6 code
gulp.task('build', ['babel']);

// transpile es6 code
gulp.task('babel', ['lint'], () =>
  gulp.src(SRC)
    .pipe($.changed(DEST))
    .pipe($.babel())
    .pipe(gulp.dest(DEST))
    .pipe($.print(file => `babel'd: ${file}`))
);

// returns a function that lints code
const lintTask = (src) =>
  () =>
    gulp.src(src)
      .pipe($.plumber({
        errorHandler: function(err) { this.emit('end'); }
      }))
      .pipe($.eslint())
      .pipe($.eslint.format())
      .pipe($.eslint.failAfterError());
// lint code
gulp.task('lint', ['lint:gulpfile'], lintTask(SRC));
gulp.task('lint:gulpfile', lintTask(GULPFILE));

// cleanup directory
gulp.task('clean', () => del(DEST));
