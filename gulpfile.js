const gulp = require('gulp');
const server = require('gulp-webserver');

function serve() {
    gulp.src('public')	// <-- your app folder
        .pipe(server({
            livereload: true,
            open: true,
            port: 8080	// set a port to avoid conflicts with other local apps
        }));
};

module.exports.default = serve;