module.exports = function () {
	$.gulp.task('img:dev', function () {
		return $.gulp.src('src/static/img/**/*.{jpg,png,gif}')
			.pipe($.gulp.dest('build/static/img/'))
	});

	$.gulp.task('img:build', function () {
		return $.gulp.src('src/static/img/**/*.{jpg,png,gif}')
			.pipe($.gp.tinypng('API_KEY'))
			.pipe($.gulp.dest('build/static/img/'))
	});
}

// API_KEY tinypng.com
