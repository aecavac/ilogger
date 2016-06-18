var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
	rename = require("gulp-rename");
	
gulp.task('minify', function () {
   gulp.src('src/ilogger.js')
      .pipe(uglify())
      .pipe(rename({
		  suffix: '.min'
	  }))
      .pipe(gulp.dest('dist'))
});	

gulp.task('copy', function () {
    gulp.src(['./src/**/*'])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['copy', 'minify']);