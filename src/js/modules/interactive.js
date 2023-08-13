//Меню-гамбургер
const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburger = document.querySelector('.hamburger');

export function hamburgerFunc() {
    //Функция открытия и закрытия меню бургера
    function toggleHamburger() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
        langMenu.classList.remove('display-block');
        document.body.classList.toggle('bodyBlockScroll');
        document.getElementsByTagName('main')[0].classList.toggle('transparency');
        document.getElementsByClassName('header__globe')[0].classList.toggle('unvisible');
    }

    //Открытие меню бургера при клике на кнопку меню
    hamburger.addEventListener('click', () => {
        toggleHamburger();
    });

    //Закрытие меню бургера при клике на один из пунктов
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            toggleHamburger();
        });
    });

    //Закрытие меню бургера при клике за пределами меню
    document.body.addEventListener('click', (e) => {
        if (e.target != menu
            && menu.classList.contains('header__menu_active')
            && e.target != hamburger
            && e.target != document.getElementsByClassName('hamburger__span')[0]
            && e.target != document.getElementsByClassName('hamburger__span')[1]
            && e.target != document.getElementsByClassName('hamburger__span')[2]) {
            toggleHamburger();
        };
    });
};

//Кнопка "наверх" в нижнем правом углу
export function pageUp() {
    window.addEventListener('scroll', () => {
        if(window.scrollTop() > 500) {
            document.querySelector('.pageup').fadeIn();
        } else {
            document.querySelector('.pageup').fadeOut();
        };
    });
};

//Механизм языка
//Необходимые переменные
const langMenu = document.querySelector('.header__lang-menu'),
langKz = document.querySelector('.header__lang-menu-kz'),
langRu = document.querySelector('.header__lang-menu-ru'),
langEn = document.querySelector('.header__lang-menu-en');

let siteLanguage;

export function language() {
    //Определение языка сайта из веб-хранилища при загрузке сайта
    if (location.pathname === '/') {
        if (localStorage.getItem('siteLanguage') === 'ru') {
            siteLanguage = 'ru';
            open('/ru/', '_self');
        } else if (localStorage.getItem('siteLanguage') === 'en') {
            siteLanguage = 'en';
            open('/en/', '_self');
        } else {
            siteLanguage = 'kk';
        };
    };
};

//Кнопка-глобус
export function globus() {
    const buttonGlobus = document.querySelector('.header__globe');

    //Кнопка-глобус вызывает меню переключения языка
    buttonGlobus.addEventListener('click', (e) => {;
        langMenu.classList.toggle('header__lang-menu-open');
    });

    document.body.addEventListener('click', (e) => {
        if (e.target != document.getElementById('globeSvg')
        && e.target != document.getElementById('globePath')
        && e.target != document.getElementsByClassName('header__globe')[0]
        && e.target != document.getElementsByClassName('header__lang-menu-wrapper')[0]
        && langMenu.classList.contains('header__lang-menu-open')) {
            langMenu.classList.toggle('header__lang-menu-open');
        };
    });

    

    //Переключение по клику на казахский язык
    langKz.onclick = () => {
        if (location.pathname === '/ru/' || location.pathname === '/en/') {
            open('../', '_self');
        } else if (location.pathname === '/ru/coding/' || location.pathname === '/en/coding/') {
            open('../../coding/', '_self');
        } else if (location.pathname === '/ru/design/' || location.pathname === '/en/design/') {
            open('../../design/', '_self');
        } else if (location.pathname === '/ru/seo/' || location.pathname === '/en/seo/') {
            open('../../seo/', '_self');
        }  else if (location.pathname === '/ru/hosting/' || location.pathname === '/en/hosting/') {
            open('../../hosting/', '_self');
        } else {
            langMenu.classList.toggle('header__lang-menu-open');
        };
        siteLanguage = 'kk';
        localStorage.setItem('siteLanguage', 'kk');
    };

    //Переключение по клику на русский язык
    langRu.onclick = () => {
        if (location.pathname === '/' || location.pathname === '/en/') {
            open('/ru/', '_self');
        } else if (location.pathname === '/coding/' || location.pathname === '/en/coding/') {
            open('/ru/coding/', '_self');
        } else if (location.pathname === '/design/' || location.pathname === '/en/design/') {
            open('/ru/design/', '_self');
        } else if (location.pathname === '/seo/' || location.pathname === '/en/seo/') {
            open('/ru/seo/', '_self');
        }  else if (location.pathname === '/hosting/' || location.pathname === '/en/hosting/') {
            open('/ru/hosting/', '_self');
        } else {
            langMenu.classList.toggle('header__lang-menu-open');
        };
        siteLanguage = 'ru';
        localStorage.setItem('siteLanguage', 'ru');
    };

    //Переключение по клику на английский язык
    langEn.onclick = () => {
        if (location.pathname === '/' || location.pathname === '/ru/') {
            open('/en/', '_self');
        } else if (location.pathname === '/coding/' || location.pathname === '/ru/coding/') {
            open('/en/coding/', '_self');
        } else if (location.pathname === '/design/' || location.pathname === '/ru/design/') {
            open('/en/design/', '_self');
        } else if (location.pathname === '/seo/' || location.pathname === '/ru/seo/') {
            open('/en/seo/', '_self');
        }  else if (location.pathname === '/hosting/' || location.pathname === '/ru/hosting/') {
            open('/en/hosting/', '_self');
        } else {
            langMenu.classList.toggle('header__lang-menu-open');
        };
        siteLanguage = 'en';
        localStorage.setItem('siteLanguage', 'en');
    };
};