var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('less/style.less')
          .pipe(less())
          .pipe(gulp.dest('css/'));
});

gulp.task('watch:less', function () {
  gulp.watch('less/*.less', ['less']);
});
