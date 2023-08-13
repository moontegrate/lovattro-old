import { openModalThanks } from "./modal.js";
import { loadAnimSubmitOn } from "./modal.js";
import { loadAnimSubmitOff } from "./modal.js";

export function formValidating() {
  function sendForm(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const request = new XMLHttpRequest();
      alert('Sorry, the form sending is not working now9')
    });
  };

  $("#order-request-form-kz").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      checkbox: "required"
    },
    messages: {
      name: "Өтінеміз, есіміңізді жазыңыз",
      phone: "Өтінеміз, телефон нөміріңізді жазыңыз",
      email: {
        required: "Өтінеміз, электрондық поштаңызды жазыңыз",
        email: "Электронды пошта дұрыс емес"
      },
      checkbox: "Әрі қарай жалғастыру үшін құсбелгіні қойыңыз"
    },
    submitHandler: function() {
      sendForm(document.getElementById('order-request-form-kz'));
    }
  });

  $("#order-request-form-ru").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      checkbox: "required"
    },
    messages: {
      name: "Пожалуйста, введите свое имя",
      phone: "Пожалуйста введите свой номер телефона",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введен адрес почты"
      },
      checkbox: "Чтобы продолжить, поставьте галочку"
    },
    submitHandler: function() {
      sendForm(document.getElementById('order-request-form-ru'));
    }
  });

  $("#order-request-form-en").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      checkbox: "required"
    },
    messages: {
      name: "Please, enter your name",
      phone: "Please, enter your phone number",
      email: {
        required: "Please, enter your e-mail",
        email: "Wrong e-mail"
      },
      checkbox: "Check the box to continue"
    },
    submitHandler: function() {
      sendForm(document.getElementById('order-request-form-en'));
    }
  });

  $("#aboutus-request-form-kz").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      checkbox: "required"
    },
    messages: {
      name: "Өтінеміз, есіміңізді жазыңыз",
      phone: "Өтінеміз, телефон нөміріңізді жазыңыз",
      email: {
        required: "Өтінеміз, электрондық поштаңызды жазыңыз",
        email: "Электронды пошта дұрыс емес"
      },
      checkbox: "Әрі қарай жалғастыру үшін құсбелгіні қойыңыз"
    },
    submitHandler: function() {
      sendForm(document.getElementById('aboutus-request-form-kz'));
    }
  });

  $("#aboutus-request-form-ru").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      checkbox: "required"
    },
    messages: {
      name: "Пожалуйста, введите свое имя",
      phone: "Пожалуйста введите свой номер телефона",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введен адрес почты"
      },
      checkbox: "Чтобы продолжить, поставьте галочку"
    },
    submitHandler: function() {
      sendForm(document.getElementById('aboutus-request-form-ru'));
    }
  });

  $("#aboutus-request-form-en").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      checkbox: "required"
    },
    messages: {
      name: "Please, enter your name",
      phone: "Please, enter your phone number",
      email: {
        required: "Please, enter your e-mail",
        email: "Wrong e-mail"
      },
      checkbox: "Check the box to continue"
    },
    submitHandler: function() {
      sendForm(document.getElementById('aboutus-request-form-en'));
    }
  });
};