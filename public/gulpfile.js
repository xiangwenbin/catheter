/**
 * 将regular 组件内的css,html拷贝到对应的 ts编译目录
 */
var gulp = require('gulp'),dir=[ 'src/typescript/**/*.html', 'src/typescript/**/*.css' ];
var del = require('del');
 // 我们不希望删掉这个文件，所以我们取反这个匹配模式
 // '!dist/mobile/deploy.json'
gulp.task('clean', function (cb) {
  del([
    'src/javascript/**/*.html',
    'src/javascript/**/*.css'
  ], cb);
});
gulp.task('copyHtmlCss', function() {
	gulp.src(dir).pipe(gulp.dest('src/javascript'));
});
gulp.task('watch', function() {
	  gulp.watch(dir, ['copyHtmlCss']);
});
gulp.task('default', ['clean', 'copyHtmlCss','watch']);