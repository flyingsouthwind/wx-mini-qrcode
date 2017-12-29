let gulp = require('gulp'),
    path = require('path'),
    eslint = require('gulp-eslint');

let src = 'src',
    dest = 'demo/lib/qrcode';

let jsSource = [path.join(src, '**/*.js')];

// copy
gulp.task('copy', function () {
    let stream = gulp.src(jsSource);

    return stream.pipe(gulp.dest(dest));
});

// eslint
gulp.task('eslint', function () {
    let stream = gulp.src(jsSource);

    return stream.pipe(eslint()).pipe(eslint.format());
});

gulp.task('watch', ['copy'], function () {
    gulp.watch(jsSource, function () {
        gulp.start('copy');
    });
});
