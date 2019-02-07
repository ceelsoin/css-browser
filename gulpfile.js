var gulp = require('gulp');
const minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            src: '-dev.js',
            min:'-min.js'
        },
        exclude: ['node_modules', 'bin', 'lib', 'tests', '.git'],
        ignoreFiles: ['gulpfile.js']
    }))
    .pipe(gulp.dest('lib'))
});