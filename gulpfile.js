var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var minifyJs = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
    return gulp.src('_sass/theme.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('js', function(){
    return gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(sourcemaps.init())
        .pipe(minifyJs())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('assets/js'))
});

gulp.task('default', [ 'css', 'js' ]);