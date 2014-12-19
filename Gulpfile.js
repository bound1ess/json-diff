var gulp = require("gulp");
var util = require("gulp-util");
var sass = require("gulp-ruby-sass");
var minifyCSS = require("gulp-minify-css");
var concat = require("gulp-concat");
var uglifyJS = require("gulp-uglify");

gulp.task("sass", function() {
	util.log("Compiling and minifying SASS files...");
	gulp.src("assets/sass/main.sass")
		.pipe(sass({"sourcemap=none": true, quiet: true, noCache: true}))
		.pipe(minifyCSS({}))
		.pipe(gulp.dest("public/css"));
	util.log("Done.");
});

gulp.task("js", function() {
	util.log("Concatenating and minifying JavaScript files...");
	gulp.src("assets/js/*.js")
		.pipe(uglifyJS({mangle: false, preserveComments: "all"}))
		.pipe(concat("main.js"))
		.pipe(gulp.dest("public/js"));
	util.log("Done.");
});

gulp.task("default", ["sass", "js"], function() {
	util.log("All done, good sir.");	
});
