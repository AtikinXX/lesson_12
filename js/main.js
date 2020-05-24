/* document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const closeBtn = document.querySelector(".modal__close");
  const switchModal = () => {
    modal.classList.toggle("modal--visible");
  };

  modalBtn.forEach((element) => {
    element.addEventListener("click", switchModal);
  });

  closeBtn.addEventListener("click", switchModal);
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("modal--visible");
    }
  };

  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) modal.classList.remove("modal--visible");
  });
}); */


$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 29)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило оббект (блок)
      userEmail: {
        required: true,
        email: true
      },
      checkboxModal: "required",
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв и не более 15",
        maxlength: "Имя не короче 2 букв и не более 15"
      }, 
      userPhone: "Заполните поле",
      checkboxModal: "Вы не согласны?",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило оббект (блок)
      userEmail: {
        required: true,
        email: true
      },
      checkboxFooter: "required",
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв и не более 15",
        maxlength: "Имя не короче 2 букв и не более 15"
      },
      userPhone: "Заполните поле",
      checkboxFooter: "Вы не согласны?",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило оббект (блок)
      userEmail: {
        required: true,
        email: true
      },
      checkboxControl: "required",
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв и не более 15",
        maxlength: "Имя не короче 2 букв и не более 15"
      },
      userPhone: "Заполните поле",
      checkboxControl: "Вы не согласны?",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});

  // создаем yandex map API
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [47.222531, 39.718705],
        zoom: 9
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/marker.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

      

    myMap.geoObjects
      .add(myPlacemark);
  });
});

var btn = $('#scroll');

$(window).scroll(function () {
  if ($(window).scrollTop() > 1000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '100');
});