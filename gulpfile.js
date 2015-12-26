var gulp = require('gulp'),
	gutil = require('gulp-util')
	jshint = require('gulp-jshint');

gulp.task('default',function(){
	return gulp.src('*.js')
			   .pipe(jshint())
			   .pipe(jshint.reporter('jshint-stylish'));
});
