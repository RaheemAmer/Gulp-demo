var gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css')

gulp.task('default', function(done) {
    console.log("hello from gulp");
    done();
});

gulp.task('styles', function(transform) {
    gulp
        .src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer({ overrideBrowserslist: ["Last 2 versions"] }))
        .pipe(gulp.dest('dist/css'));
    // pipe(browserSync.stream());
    transform();
});
gulp.task("watch", function() {
    gulp.watch("sass/**/*.scss", gulp.series('styles'));
    browserSync.init({
        server: "./"
    });
});

gulp.task('imagemin', function() {
    var imgSrc = 'src/images/*.+(png|jpg|gif)',
        imgDst = 'build/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

gulp.task('default', ['imagemin'], function() {});

gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts/'));
});

gulp.task('css', function() {
    gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('build/styles/'));
});

gulp.task('default', ['js', 'css'], function() {});