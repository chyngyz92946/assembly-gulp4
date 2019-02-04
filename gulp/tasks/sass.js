module.exports = function () {
	$.gulp.task('sass:dev', function () {
		return $.gulp.src('src/static/sass/main.scss')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer({
				browsers: ['last 5 versions', 'ie >= 7'],
			}))
			.on("error", $.gp.notify.onError({
				title: "Error style"
			}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});

	$.gulp.task('sass:build', function () {
		return $.gulp.src('src/static/sass/main.scss')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer({
				browsers: ['last 5 versions', 'ie >= 7'],
			}))
			.on("error", $.gp.notify.onError({
				title: "Error style"
			}))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css/'))
	});
}