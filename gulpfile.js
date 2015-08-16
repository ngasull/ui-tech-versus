'use strict';

var gulp = require('gulp')
var del = require('del')
var eslint = require('gulp-eslint')
var changed = require('gulp-changed')
var browserSync = require('browser-sync')
var browserify = require('browserify')
var watchify = require('watchify')
var gutil = require('gulp-util')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

var paths = {
    css: ['src/css/**'],
    static: ['src/**/*.html']
}

function doBrowserify(watch) {

    var bundler,
        entry = 'versus-app.js',
        props = {
            basedir: 'src',
            cache: {},
            packageCache: {},
            debug: true
        }

    function bundle() {
        return bundler.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(entry))
            .pipe(buffer())
            .pipe(gulp.dest('dist'))
    }

    bundler = browserify(entry, props)
        .transform('babelify', {
            sourceMaps: true
        })
        .transform('brfs')

    if (watch) {
        bundler = watchify(bundler)

        bundler.on('update', bundle)
        bundler.on('bytes', function () {
            browserSync.reload()
        })
    }

    bundler.on('log', gutil.log)
    bundler.on('error', gutil.log)
    return bundle()
}

gulp.task('css', function () {
    return gulp
        .src(paths.css, {
            base: 'src'
        })
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
})

gulp.task('static', function () {
    return gulp
        .src(paths.static, {
            base: 'src'
        })
        .pipe(gulp.dest('dist'))
})

gulp.task('static-reload', ['static'], function () {
    browserSync.reload()
})

gulp.task('browserify', function () {
    return doBrowserify(false)
})

gulp.task('watchify', function () {
    return doBrowserify(true)
})

gulp.task('clean', function () {
    del.sync(['dist/**', '!dist/vendor/**'])
})

gulp.task('default', ['static', 'css', 'watchify'], function () {

    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })

    gulp.watch(paths.css, ['css'])
    gulp.watch(paths.static, ['static-reload'])
})
