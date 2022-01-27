const { src, dest, series, paralell, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");

//  Only used to compile scss to css since node-sass is depreceated and i
//  can't get it to work on windows without it throwing a tantrum about some
//  python2 bullshit.
const files = "./scss/**/*.scss";
const output = "./app/public/css";
const ext = ".css";

const compileCSS = () => {
  return src("./scss/**/*")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(
      rename((path) => {
        path.extname = ".css";
      })
    )
    .pipe(dest("./app/public/css"));
};

exports.default = watch("./scss/**/*.scss", compileCSS);

exports.default = () => {
  watch(files, (cb) => {
    return src(files)
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(
        rename((path) => {
          path.extname = ext;
        })
      )
      .pipe(dest(output));
  });
};
