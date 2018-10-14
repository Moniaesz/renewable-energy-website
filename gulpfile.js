
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const del = require('del');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');

gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});


gulp.task('serve', function() {

    browserSync.init({
        server: 'src/'
    });
});


gulp.task('watch', function() {

    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch(['src/*.html', 'src/**/*.js'], browserSync.reload);
});



gulp.task('clean', function() {

    return del('dist/');

});


gulp.task('images', function() {

    return gulp.src('dist/assets/**/', {

        base: "dist/"
    })

        .pipe(imagemin())
        .pipe(gulp.dest('dist/'));
});


gulp.task('copy', function() {

    return gulp.src([ 'src/*.html', 'src/css/**/*.css', 'src/assets/**/', 'src/**/*.js'], {

        base: 'src'
    })

    .pipe(gulp.dest('dist/'));

});


gulp.task('build', function(callback) {

    runSequence('clean', 'copy', 'images', callback);

});


gulp.task('default', ['sass', 'serve', 'watch']);