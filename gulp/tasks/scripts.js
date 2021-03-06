module.exports = function () {
	$.gulp.task('scripts:lib', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 
				'node_modules/slick-carousel/slick/slick.min.js',
				'node_modules/popper.js/dist/umd/popper.min.js',
				'node_modules/bootstrap/dist/js/bootstrap.min.js'])
			.pipe($.gp.uglifyjs('libs.min.js', {
				outSourceMap : true 
			}))
			.pipe($.gulp.dest('build/static/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});

	$.gulp.task('scripts:dev', function () {
		return $.gulp.src('src/static/js/main.js')
			.pipe($.gp.concat('main.min.js'))
			.pipe($.gulp.dest('build/static/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});

	$.gulp.task('scripts:build', function () {
		return $.gulp.src('src/static/js/main.js')
			.pipe($.gp.concat('main.min.js'))
			.pipe($.gp.uglifyjs())
			.pipe($.gulp.dest('build/static/js/'))
	});
}