var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var merge = require('merge-stream');
var livereload = require('gulp-livereload');

gulp.task('less', function(){
	return gulp.src('./less/main.less')
			.pipe(less())
			.pipe(cleanCSS())
			.pipe(gulp.dest('./css/'))
			.pipe(livereload());
});

gulp.task('bootstrap', function(){
	var bootstrapCSS = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
			.pipe(gulp.dest('./css'));

	var bootstrapFonts = gulp.src('./node_modules/bootstrap/dist/fonts/**/*.*')
			.pipe(gulp.dest('./fonts'));

	var bootstrapJS = gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
			.pipe(gulp.dest('./js'));

	return merge(bootstrapCSS, bootstrapJS, bootstrapFonts);
});

gulp.task('jquery', function(){
	return gulp.src('./node_modules/jquery/dist/jquery.min.js')
			.pipe(gulp.dest('./js'));
});

gulp.task('watch', function(){
	livereload();
	gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'bootstrap', 'jquery']);