const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

//Зависимости Gulp будут здесь
gulp.task('default', function (done) {
	//Задачи Gulp будут здесь

	//Исходны код для Node
	gulp.src("src/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("src/dist"));
	//Исходный код для браузера
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
	//Запуск Eslint
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	done();
});