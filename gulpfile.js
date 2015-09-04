var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring')
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer-core');
var cssnext = require('cssnext');

gulp.task('styles', function() {
    var processors = [
        autoprefixer({browsers:['last 2 version']}),
        cssnext({})
    ];

    return gulp.src('styles.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function() {
    gulp.watch('**/*.css', ['styles']);
});
