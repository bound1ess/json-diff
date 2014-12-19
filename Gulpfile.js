var gulp = require("gulp");
var util = require("gulp-util");
var sass = require("gulp-ruby-sass");
var minifyCSS = require("gulp-minify-css");

gulp.task("sass", function() {
	util.log("Compiling and minifying SASS files...");
	gulp.src("assets/sass/main.sass")
		.pipe(sass({"sourcemap=none": true, quiet: true, noCache: true}))
		.pipe(minifyCSS({}))
		.pipe(gulp.dest("public/css"));
	util.log("Done.");
});

gulp.task("default", ["sass"], function() {
	util.log("All done, good sir.");	
});
