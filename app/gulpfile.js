var gulp = require('gulp');
var scripts = require('./build/javascript.js');
var config = require('./config')();
var path = require('path');

gulp.task('js', function(props) {
    return scripts(props || {});
});

gulp.task('watch', function() {
    gulp.tasks.js.fn({
        watch: true
    });

    gulp.watch(path.join(config.get('path'), 'src') + '/**/*.*', ['js']);
});

gulp.task('default', ['watch']);
