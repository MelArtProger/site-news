const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');
// const rename = require('gulp-rename');

gulp.task('copyJS', async () => {
    return gulp.src('app/script/*.js')
        .pipe(gulp.dest('public/script'));
})

gulp.task('copyCSS', async () => {
    return gulp.src('app/css/*.css')
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        ovverideBrowserlist: ['last 10 versions'],
        cascade: false
    }))
    // .pipe(cleanCSS())
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
    gulp.watch('app/script/*.js', gulp.series('copyJS'));
})

gulp.task('default', gulp.parallel('watch', 'server'));