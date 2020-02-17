const gulp = require('gulp');
const babel = require('babel');

// Gulp dependencies go here

gulp.task('defualt', function() {
    // Gulp tasks go here
    // Node source
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    // browser source
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});