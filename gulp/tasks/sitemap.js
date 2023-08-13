export const sitemap = () => {
    return app.gulp.src(app.path.src.sitemap)
    .pipe(app.gulp.dest(app.path.build.sitemap))
}