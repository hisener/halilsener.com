const gulp = require('gulp')
const del = require('del')

gulp.task('build', ['clean'], function () {
  gulp.src(['projects/**', '!projects/personal-portfolio{,/**}'])
    .pipe(gulp.dest('build'))
  gulp.src(['projects/personal-portfolio/*'])
    .pipe(gulp.dest('build'))
  gulp.src(['CNAME'])
    .pipe(gulp.dest('build'))
})

gulp.task('clean', function () {
  return del('build/**', { force: true })
})

gulp.task('default', ['build'])
