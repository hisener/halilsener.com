const gulp = require('gulp')
const del = require('del')
const pug = require('gulp-pug')

// use gulp.series when gulp 4 released
gulp.task('build', function () {
  gulp.src(['projects/**', '!projects/personal-portfolio{,/**}', '!projects/**/*.pug'])
    .pipe(gulp.dest('build'))

  gulp.src(['build-html/**', '!build-html/personal-portfolio{,/**}']).pipe(gulp.dest('build'))

  gulp.src(['projects/personal-portfolio/**', 'build-html/personal-portfolio/*', '!projects/personal-portfolio/*.pug'])
    .pipe(gulp.dest('build'))

  gulp.src(['CNAME'])
    .pipe(gulp.dest('build'))
})

gulp.task('build-pug', function () {
  gulp.src(['projects/**/index.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('build-html'))
})

gulp.task('clean', function () {
  return del(['build/**', 'build-html/**'], { force: true })
})

gulp.task('default', ['build'])
