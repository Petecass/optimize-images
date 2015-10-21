'use-strict'

var     gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
         del = require('del');

var config = {
  src : './src/',
  dist : './dist/',
  imgType : '.png'
}


gulp.task('default',['clean'], function () {
    return gulp.src(config.src + '**/**' + config.imgType ,{ base: config.src })
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({quality: '65-80', speed: 4})]
        }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('clean', function(){
  del(config.dist);
});
