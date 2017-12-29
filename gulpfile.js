let del = require('del'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path')
    eslint = require('gulp-eslint');

let src = 'src',
    dist = 'dist',
    demo = 'demo';

//clean
gulp.task('clean', function() {
    del.sync(dist);
});

let copySource = [path.join(src, '**/*'), path.join(demo, '**/*'), '!' + path.join(demo, '**/*.wxss')],
    lessSource = [path.join(demo, '**/*.wxss')],
    jsSource = [path.join(src, '**/*.js'), path.join(demo, '**/*.js')]

// copy
gulp.task('copy', function() {
    let stream = gulp.src(copySource);

    return stream.pipe(gulp.dest(dist));
});

// less
gulp.task('less', function() {
    let stream = gulp.src(lessSource);

    return stream.pipe(less()).pipe(gulp.dest(dist));
});

// eslint
gulp.task('eslint', function() {
    let stream = gulp.src(jsSource);

    return stream.pipe(eslint()).pipe(eslint.format());
});

gulp.task('default', ['clean'], function() {
    let tasks = ['copy', 'less'];

    gulp.start.apply(gulp, tasks);
});

gulp.task('watch', function() {
    gulp.start('default');

    gulp.watch(copySource, function() {
        gulp.start('copy');
    });

    gulp.watch(lessSource, function() {
        gulp.start('less');
    });
});
