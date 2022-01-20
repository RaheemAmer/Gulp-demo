Gulp:
a gulp file is a node Js script, we first require gulp as a dependency, then we set up a default task
-----------------------------------------------------------------------------------------
Streams in Gulp and difference between gulp and grunt?
- to understand gulp, you have to understand node streams. All gulp plugins are jus through streams that read and output data
- everything can be processed in memory, with the output of one stream piped as input to another. much like unix pipes
- grunt make a temporary place where they make some change on them, as a result every task happens make a penalty for i/o in file system operation
- gulp on the other hand, converts input files into an in memory stream, so the i/o is only done initially and at the very end of all tasks
- gulp is way faster than grunt
-----------------------------------------------------------------------------------------
Why Use Autoprefixer?

Since different browsers tend to use different vendor prefixes, making sure your CSS is compatible across different browsers can get messy quickly. Autoprefixer streamlines writing CSS by automatically adding vendor prefixes! For example, this allows you to simply write:

.navigation {
display: flex
}

Autoprefixer will then take the above code and produce this in the compiled CSS:

.navigation {
display: -webkit-box;
display: -ms-flexbox;
display: flex
}
-----------------------------------------------------------------------------------------
Gulp comes with an automatic trigger called watch something like nodemon
(Watch)
gulp.task("default", function() {
  gulp.watch("sass/**/*.scss", ["styles"]);
});

/*
Note that the function that gulp.watch takes is the same
kind of first argument as grunt.source, and that’s the path
and the type of file. So, we can copy that from the “styes”
task that we did a little bit earlier say say “watch all of 
these SCSS files.”

The second argument can either be a callback like in the 
“task” function, or an array with a set of tasks. In this 
case, we want to  execute the “styles” task when a Sass
file is changed, so this is what we’ll do.
*/