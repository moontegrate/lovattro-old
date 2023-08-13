import * as isWebp from "./modules/isWebp.js";
import * as interactive from "./modules/interactive.js";
import * as modal from "./modules/modal.js";
import * as animation from "./modules/animation.js";
import * as form from "./modules/form.js";

interactive.language();
if (document.querySelector('.promo__title')) {
    animation.typedAnimation();
};

document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();
    isWebp.isWebp();
    animation.serviceCardAnimation();
    animation.pageUp();
    interactive.hamburgerFunc();
    interactive.globus();
    form.formValidating();
    modal.modalWindows();
});