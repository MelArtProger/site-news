const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('copyJS', async () => {
    return gulp.src('app/js/*.js')
        .pipe(gulp.dest('public/js'));
})

gulp.task('copyCSS', async () => {
    return gulp.src('app/css/*.css')
    .pipe(css({
        errorLogToConsole: true
        // outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        ovverideBrowserlist: ['last 10 versions'],
        cascade: true
    }))
    .pipe(cleanCSS())
    // .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('public/css'));
})

gulp.task('server', async () => {
    browserSync.init({
        server: 'public'
    })
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
})

gulp.task('watch', async () => {
    gulp.watch('app/css/*.css', gulp.series('copyCSS'));
    gulp.watch('app/js/*.js', gulp.series('copyJS'));
})

gulp.task('default', gulp.parallel('watch', 'server'));