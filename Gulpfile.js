var gulp = require("gulp");
var util = require("gulp-util");
var sass = require("gulp-ruby-sass");
var minifyCSS = require("gulp-minify-css");
var concat = require("gulp-concat");
var uglifyJS = require("gulp-uglify");
var minifyHTML = require("gulp-minify-html");

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
		.pipe(uglifyJS({mangle: false, preserveComments: "some"}))
		.pipe(concat("main.js"))
		.pipe(gulp.dest("public/js"));
	util.log("Done.");
});

gulp.task("html", function() {
	util.log("Minifying the main HTML page...");
	gulp.src("index.html")
		.pipe(minifyHTML())
		.pipe(gulp.dest("public"));
});

gulp.task("watch", function() {
	util.log("Watching for JS/SASS file changes...");
	gulp.watch(["assets/sass/*.sass"], ["sass"]);
	gulp.watch(["assets/js/*.js"], ["js"]);	
	gulp.watch(["index.full.html"], ["html"]);
});

gulp.task("default", ["sass", "js", "watch"], function() {
	util.log("All done, good sir.");	
});
