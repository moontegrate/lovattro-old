export function pageUp() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    new WOW().init();
};

//Анимация главного заголовка в разделе promo
export function typedAnimation() {
  if (location.pathname === '/') {
    let typedKz = new Typed('#typed-kz', {
      strings: ["тағы да басқасы"],
      typeSpeed: 45,
    });
  } else if (location.pathname === '/ru/') {
    let typedRu = new Typed('#typed-ru', {
      strings: ["многое другое"],
      typeSpeed: 45,
    });
  } else if (location.pathname === '/en/') {
    let typedEn = new Typed('#typed-en', {
      strings: ["more"],
      typeSpeed: 45,
    });
  }
}

//Анимация рисунка карточек услуг
export function serviceCardAnimation() {
  const serviceCard = document.querySelectorAll('.services__slide'),
  serviceCardPicture = document.querySelectorAll('.services__slide-icon');

  serviceCard.forEach( (card, i) => {
      card.addEventListener('mouseover', () => {
          serviceCardPicture[i].style= "transform: scale(0.95)";
      });

      card.addEventListener('mouseout', () => {
          serviceCardPicture[i].style= "transform: scale(1)";
      });
  });
};