var gulp = require('gulp');
gulp.task('copy-html', function(){
	return gulp.src('html/*.html')
	.pipe(gulp.dest('dist/html'))
	.pipe(connect.reload());
})

gulp.task('images', function(){
	return gulp.src('images/**/*')
	.pipe(gulp.dest('dist/images'))
	.pipe(connect.reload());
})

gulp.task('scripts', function(){
	return gulp.src(['*.js','!gulpfile.js'])
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
})

var scss = require('gulp-sass-china');
gulp.task('scss', function(){
	return gulp.src('style/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})

gulp.task('data', function(){
	return gulp.src(['*.json','json/*.json','!package.json','!package-lock.json'])
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload());
})

gulp.task('build', ['copy-html','scss','data','images','scripts'],function(){
	console.log('编译完成')
})

gulp.task('watch',function(){
	gulp.watch('html/*.html',['copy-html']);
	gulp.watch('images/**/*',['images']);
	gulp.watch(['*.js','!gulpfile.js'],['scripts']);
	gulp.watch(['*.json','json/*.json','!package.json','!package-lock.json'],['data']);
	gulp.watch('style/*.scss',['scss']);
})



var connect = require('gulp-connect')
gulp.task('server', function(){
	connect.server({
		root:'dist',
		port:8888,
		livereload:true
	})
})

gulp.task('default',['server','watch']);


