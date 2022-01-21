const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const { src, dest } = require('gulp')
const newer = require('gulp-newer'); 
const webp = require('gulp-webp');


const files = './static/img/pandaemonium-asphodelos/**/*';
const output = './minification/';

function minimg() {
    return src('./static/img/pandaemonium-asphodelos/the-third-circle-not-min/**/*')
        .pipe(webp({quality: 50}))
        .pipe(dest(output));
}

exports.default = minimg;