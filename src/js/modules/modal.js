//Функция появления модального окна
export function fade(e) {
    e.classList.toggle('fade-in');
};

//Кнопка открытия модального окна формы заявки/заказа.
const 
    modalOverlay = document.querySelector('.overlay'),
    modalThanks = document.getElementById('thanks'),
    modalClose = document.querySelectorAll('.modal__close'),
    modalCloseX = document.querySelectorAll('.modal__close-x'),
    modalBody = document.querySelector('.modal'),
    formOrder = [
        document.getElementById('order-request-form-kz'),
        document.getElementById('order-request-form-ru'),
        document.getElementById('order-request-form-en')
    ],
    formAboutus = [
        document.getElementById('aboutus-request-form-kz'),
        document.getElementById('aboutus-request-form-ru'),
        document.getElementById('aboutus-request-form-en')
    ],
    modalOpenBtns = [
        {
            name: "Header order modal button",
            button: document.querySelector('.button_header'),
            modal: document.getElementById('order')
        },
        {
            name: "Promo order modal button",
            button: document.querySelector('.button_promo'),
            modal: document.getElementById('order')
        },
        {
            name: "Service page order modal button",
            button: document.querySelector('.button_service'),
            modal: document.getElementById('order')
        },
        {
            name: "Footer privacy modal button",
            button: document.querySelector('.button_privacy'),
            modal: document.getElementById('privacy')
        },
        {
            name: "Order privacy modal button",
            button: document.querySelector('.button_order-form-privacy'),
            modal: document.getElementById('privacy'),
        },
        {
            name: "About us privacy modal button",
            button: document.querySelector('.button_aboutus-form-privacy'),
            modal: document.getElementById('privacy'),
        }
    ];
let currentModal,
    prevModal;
let multiModalMode = false;

export function modalWindows() {
    //Новый механизм открытия модальных окон
    for (let i = 0; i < modalOpenBtns.length; i++) {
        if (modalOpenBtns[i].button) {
            modalOpenBtns[i].button.addEventListener('click', () => {
                if (!currentModal) {
                    fade(modalOverlay);
                    document.body.style.overflow = 'hidden';
                } else if (currentModal) {
                    prevModal = currentModal;
                    multiModalMode = true; 
                };
                fade(modalOpenBtns[i].modal);
                currentModal = modalOpenBtns[i].modal;
            });
        };
    };

    function closeAllModal() {
        fade(currentModal);
        currentModal = '';
        fade(modalOverlay);
        document.body.style.overflow = '';
        if (multiModalMode === true) {
            fade(prevModal);
            prevModal = '';
            multiModalMode = false;
        };
    };

    //Закрытие модальных окон нажатием на крестик
    modalClose.forEach(btn => {
        btn.addEventListener('click', () => {
            if (multiModalMode === false) {
                fade(currentModal);
                currentModal = '';
                fade(modalOverlay);
                document.body.style.overflow = '';
            } else if (multiModalMode === true) {
                fade(currentModal);
                currentModal = prevModal;
                prevModal = '';
                multiModalMode = false;
            };
        });
    });

    //Закрытие всех модальных окон при клике на внешнюю область
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModal();
        };
    });

    //Закрытие всех модальных окон при клике на клавишу escape
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            closeAllModal();
        };
    });

    //Маска для телефона в форме заявки.
    $('input[name=phone]').mask("+7 (999) 999-99-99");
};

export function openModalThanks() {
    fade(currentModal);
    fade(modalThanks);
    currentModal = modalThanks;
};

const sendBtns = document.querySelectorAll('.button_submit');

export function loadAnimSubmitOn() {
    sendBtns.forEach(btn => {
        btn.innerHTML =  '<div class="loader"></div>'
    })
}

export function loadAnimSubmitOff() {
    sendBtns.forEach(btn => {
        if (localStorage.getItem('siteLanguage') === 'ru') {
            btn.innerHTML =  'Отправить'
        } else if (localStorage.getItem('siteLanguage') === 'en') {
            btn.innerHTML =  'Send'
        } else {
            btn.innerHTML =  'Жіберу'
        };
    })
}