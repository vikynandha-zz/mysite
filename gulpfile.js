var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    inlineSource = require('gulp-inline-source'),
    minifyHTML = require('gulp-minify-html'),

    src = {
        html: ['index.html'],
        images: ['images/*'],
        css: ['stylesheets/less/style.less'],
        fonts: ['fonts/**/*'],
        js: ['js/script.js']
    },

    dest = {
        html: 'build/',
        images: 'build/images/',
        css: 'build/stylesheets/css/',
        fonts: 'build/fonts/',
        js: 'build/js/'
    };


gulp.task('html', function () {
    gulp.src(src.html)
        .pipe(inlineSource())
        .pipe(minifyHTML())
        .pipe(gulp.dest(dest.html));
});


gulp.task('images', function () {
    gulp.src(src.images)
        .pipe(gulp.dest(dest.images));
});


gulp.task('css', function () {
    gulp.src(src.css)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(dest.css));
});


gulp.task('fonts', function () {
    gulp.src(src.fonts)
        .pipe(gulp.dest(dest.fonts));
});


gulp.task('js', function () {
    gulp.src(src.js)
        .pipe(gulp.dest(dest.js));
});


gulp.task('watch', function() {
    gulp.watch(src.html, ['html']);
    gulp.watch(src.images, ['images']);
    gulp.watch(src.css, ['css']);
    gulp.watch(src.fonts, ['fonts']);
    gulp.watch(src.js, ['js']);
});


gulp.task('default', ['html', 'images', 'css', 'fonts', 'js', 'watch'], function () {
});
