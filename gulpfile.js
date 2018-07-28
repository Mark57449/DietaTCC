var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/*.scss', 'ASSETS/SCSS/*.scss']) // Caminho dos arquivos SCSS
  .pipe(sass()) // Converte o SASS em CSS
  .pipe(gulp.dest('ASSETS/STYLE')); // Destino
});

gulp.task('watch', function() {
  gulp.watch(['node_modules/bootstrap/scss/*.scss', 'ASSETS/SCSS/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch']);
