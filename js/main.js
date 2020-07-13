$(document).ready(function () {
  var modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    closeBtn = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 10 + bullets.width() + 29);
  bullets.css("left", prev.width() + 10);

  $(".hero__scroll-down").click(function () {
    $('html,body').animate({
      scrollTop: $(".project").offset().top
    }, 1100);
  });
  $('a[href="#projects"]').click(function () {
    $('html,body').animate({
      scrollTop: $(".project").offset().top
    }, 1100);
  });
  $('a[href="#types"]').click(function () {
    $('html,body').animate({
      scrollTop: $(".types").offset().top
    }, 1100);
  });
  $('a[href="#team"]').click(function () {
    $('html,body').animate({
      scrollTop: $(".team").offset().top -= 60
    }, 1100);
  });
  $('a[href="#client"]').click(function () {
    $('html,body').animate({
      scrollTop: $(".client").offset().top -= 60
    }, 1100);
  });
  $('a[href="#footer"]').click(function () {
    $('html,body').animate({
      scrollTop: $(".footer").offset().top -= 300
    }, 1100);
  });

  //Валидация формы
  $(".modal__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      // правило оббект (блок)
      userEmail: {
        required: true,
        email: true,
      },
      checkboxModal: "required",
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв и не более 15",
        maxlength: "Имя не короче 2 букв и не более 15",
      },
      userPhone: "Заполните поле",
      checkboxModal: "Вы не согласны?",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          $('.thanks').addClass('thanks__visible');
        },
      });
    },
  });
  $(".footer__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 16,
      },
      // правило оббект (блок)
      userEmail: {
        required: true,
        email: true,
      },
      checkboxFooter: "required",
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв и не более 15",
        maxlength: "Имя не короче 2 букв и не более 15",
      },
      userPhone: "Заполните поле",
      checkboxFooter: "Вы не согласны?",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass("modal--visible");
          $('.thanks').addClass('thanks__visible');
        },
      });
    },
  });
  $(".control__form").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 17,
      },
      // правило оббект (блок)
      userEmail: {
        required: true,
        email: true,
      },
      checkboxControl: "required",
    }, // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв и не более 15",
        maxlength: "Имя не короче 2 букв и не более 15",
      },
      userPhone: "Заполните поле",
      checkboxControl: "Вы не согласны?",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass("modal--visible");
          $('.thanks').addClass('thanks__visible');
        },
      });
    },
  });
  // маска для номера телефона
  $("[type=tel]").mask("+7(000) 000-00-00", {
    placeholder: "Ваш номер телефона:",
  });

	var player;
	$('.video__play').on('click', function () {
	  if ($(window).width() >= '992') {
	    player = new YT.Player('player', {
	      height: '465',
	      width: '100%',
	      videoId: '8awdQRP816c',
	      events: {
	        'onReady': playVideo
	      }
	    });
	  } else {
	    player = new YT.Player('player', {
	      height: '300',
	      width: '100%',
	      videoId: '8awdQRP816c',
	      events: {
	        'onReady': playVideo
	      }
	    });
	  }
  });
  
  	function playVideo(event) {
  	  event.target.playVideo();
    }
    
  //Ymap start
  var spinner = $(".ymap-container").children(".loader");
  var check_if_load = 0;
  var myMapTemp, myPlacemarkTemp;

  function activateMap() {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [47.244729, 39.723187],
      zoom: 14,
      controls: ["zoomControl", "fullscreenControl"],
    });

    var myPlacemarkTemp = new ymaps.Placemark(
      [47.244729, 39.723187],
      {
        hintContent: "Наш офис",
        balloonContent: "Второй этаж, 5-я дверь справа",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        iconImageHref: "./img/marker.png",
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );

    myMapTemp.geoObjects.add(myPlacemarkTemp);
    // myMap.behaviors
    // 	.disable(['scrollZoom']);
    myMapTemp.behaviors.disable(["scrollZoom"]);
    //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
    waitForTilesLoad(layer).then(function () {
      //Скрываем
      spinner.removeClass("is-active");
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
          layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) {
      //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      //Другие браузеры
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  var ymap = function () {
    $(".ymap-container").mouseenter(function () {
      if (check_if_load == 0) {
        check_if_load = 1;

        spinner.addClass("is-active");

        loadScript(
          "https://api-maps.yandex.ru/2.1/?apikey=c7bc408c-e416-4aa6-ab29-35293852814b&lang=ru_RU&amp;loadByRequire=1",
          function () {
            ymaps.load(activateMap);
          }
        );
      }
    });
  };

  $(function () {
    //Map Yandex
    ymap();
  });

  var btn = $("#scroll");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "100"
    );
  });
  new WOW().init();
});

document.addEventListener('DOMContentLoaded', function (event) {

  document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.modal__dialog') & !e.target.closest('.button')) {
      document.querySelector('.modal').classList.remove('modal--visible');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      document.querySelector('.modal').classList.remove('modal--visible');
    }

  });



});