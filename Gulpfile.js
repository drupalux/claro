const gulp = require('gulp');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const svgmin = require('gulp-svgmin');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const filter = require('gulp-filter');
const gcmq = require('gulp-group-css-media-queries');
const eol = require('gulp-eol');
const del = require('del');
const replace = require('gulp-replace');

// Define variables for our paths
const paths = {
  style: {
    sourceFiles: ['source/scss/**/*.scss'],
    destPath: './dist/css'
  },
  img: {
    sourceFiles: ['source/images/**/*.{jpg,png,gif,svg}'],
    destPath: './dist/images'
  }
};

// Autoprefixer.
const browsers = [
  'last 2 versions',
  'not dead',
  'cover 95%', // higher coverage: duped `transition`.
  'ie >= 9',
  'edge >= 13',
  'firefox >= 16', // autoprefixer dups `transition` if `firefox >= 5`.
  'opera >= 15', // autoprefixer dups `transition` if `opera >= 12`.
  'safari >= 5',
  'chrome >= 56'
];

// Libsass (and sass as well) inserts linebreak before inline comments.
// To get back them, use the pattern [/*** your comment */] for line end
// comments.
// @code
// .some-selecor {
//   property: value; /*** Comment */
// }
// @endcode
const inlineCommentRegex = /\;\n[ ]{2,}\/\*\*\*(.*?)\*\/$/gm;

// There are two `@-moz-document url-prefix()` workaround for Firefox to fix
// fieldset widths.
// Sadly, Autoprefixer adds an extra whitespace before the rule's opening brace.
// The key Mozilla bug is fixed.
// If the workarounds are removed from the project, this regex hack should be
// removed as well.
// See https://bugzilla.mozilla.org/show_bug.cgi?id=504622
// See `components/form.(s)css`.
const mozDocBraceRegex = /(@-moz-document url-prefix\(\))[ ]{2,}(\{)$/gm;

//
// Sass (dev) task.
//
// Compiles sources with source maps and pipe break prevention.
//
gulp.task('sass', () => {
  return gulp.src(paths.style.sourceFiles)
    .pipe(plumber())
    .pipe(changed(paths.style.destPath))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: false,
      errLogToConsole: false,
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: browsers,
      cascade: false
    }))
    .pipe(gcmq())
    .pipe(eol('\n'))
    .pipe(replace(inlineCommentRegex, '; /*$1*/'))
    .pipe(replace(mozDocBraceRegex, '$1 $2'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.style.destPath))
    .pipe(filter('**/*.css'));
});

//
// Sass dist task.
//
// Compiles sources. SCSS assets are processed without source maps and pipe
// break prevention.
//
gulp.task('sassdist', () => {
  return gulp.src(paths.style.sourceFiles)
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: false,
      errLogToConsole: false
    }))
    .pipe(autoprefixer({
      browsers: browsers,
      cascade: false
    }))
    .pipe(gcmq())
    .pipe(eol('\n'))
    .pipe(replace(inlineCommentRegex, '; /*$1*/'))
    .pipe(replace(mozDocBraceRegex, '$1 $2'))
    .pipe(gulp.dest(paths.style.destPath));
});

// Clear the gulp cache - run `gulp clear`.
gulp.task('clear', (done) => {
  cache.clearAll()
  done();
});

//
// Cleanup task.
//
// Removes every file from destination directories.
//
gulp.task('cleanup', ['clear'], (done) => {
  del.sync([
    paths.style.destPath + '/*',
    paths.img.destPath + '/*'
  ]);
  done();
});

//
// Image minify and optimization task.
//
// Minify images and set up the folder for livereload. First run will minify all
// images, subsequent runs will minify only new or modified files.
//
gulp.task('img', () => {
  return gulp.src(paths.img.sourceFiles)
    .pipe(cache(imagemin({ optimizationLevel: 9, verbose: true })))
    .pipe(gulp.dest(paths.img.destPath))
});

//
// Watch task.
//
// Watches source assets and applies development compile if any of them changes.
//
gulp.task('watch', () => {
  gulp.watch(paths.style.sourceFiles, ['sass']);
  gulp.watch(paths.img.sourceFiles, ['img']);
});

//
// Watch dist task.
//
// Watches source assets and applies distributive build if any of them changes.
//
gulp.task('watch-dist', () => {
  gulp.watch(paths.style.sourceFiles, ['sassdist']);
  gulp.watch(paths.img.sourceFiles, ['img']);
});

// Build task.
gulp.task('dist', ['cleanup', 'sassdist', 'img']);

// Alias default task to the dist build task.
gulp.task('default', ['dist']);
