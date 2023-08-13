import * as nodePath from 'path';
const rootFolder = nodePath. basename (nodePath. resolve () );   //Получаем имя папки проекта
const buildFolder = `./dist`;   //Папка с результатами
const srcFolder = `./src`;   //Папка с исходниками

export const path = {   //Создаем общий объект path
    build: {
        images: `${buildFolder}/img/`,
        favicon: `${buildFolder}/favicon/`,
        fonts: `${buildFolder}/fonts/`,
        js: `${buildFolder}/js/`,
        libs: `${buildFolder}/libs/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        sitemap: `${buildFolder}/`
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
        svg: `${srcFolder}/img/**/*.svg`,
        favicon: `${srcFolder}/favicon/**/*.*`,
        js: `${srcFolder}/js/script.js`,
        libs: `${srcFolder}/libs/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/**/index.html`,
        files: `${srcFolder}/files/**/*.*`,
        sitemap: `${srcFolder}/sitemap.xml`
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        favicon: `${srcFolder}/favicon/**/*.*`,
        js: `${srcFolder}/js/**/*.js`,
        libs: `${srcFolder}/libs/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        sitemap: `${srcFolder}/sitemap.xml`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}