const gulp = require('gulp'),
nodemon = require('gulp-nodemon'),
eslint = require('gulp-eslint');

/*
tasks
 */

gulp.task('start', () => {
  nodemon({
    script: './src/server',
    ext: 'js html',
    tasks: ['lint'],
  });
});

gulp.task('lint', () => (
  gulp.src(['src/**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
));

/*
default
 */

gulp.task('default', ['start', 'lint']);
