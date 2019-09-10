$(document).ready(function(){
    $('.video__hidden').on('click', function() {//при клике на картинку с "видео"
        $('.video__hidden').html(''); //картинка скрывается
        $('.right__wrapper ').removeClass('video__hidden');
        $('.video').attr('src', 'https://www.youtube.com/embed/Ouih11mn4V8?rel=0&autoplay=1&controls=0'); //видео добавляется ссылка с автовоспроизведением
    });

    $('.section-gallery__box').css({
        'height' : 2 * ($('.section-gallery__img')[0].offsetHeight +11) + 'px' //назначение "скрытого" размера блока галлереи
    });

    window.onresize = function(){
        $('.section-gallery__box').css({
            'height' : 2 * ($('.section-gallery__img')[0].offsetHeight +11) + 'px'
        });
    };

    $('.section-gallery__show').on('click', function () {

        if (this.classList[1] === 'show') {
            $('.section-gallery__box').css({
                'height' : $('.section-gallery__box').children('.section-gallery__img').length/4 * ($('.section-gallery__img')[0].offsetHeight +11) + 'px' // назначение размера развернутого блока галлереи
            });

            $(this).html('Скрыть фото');// Изменение кнопки для "скрытия" галлереи
            $(this).addClass('hidden');// Изменение кнопки для "скрытия" галлереи
            $(this).removeClass('show');// Изменение кнопки для "скрытия" галлереи

        } else {
            $('.section-gallery__box').css({
                'height' : 2 * ($('.section-gallery__img')[0].offsetHeight +11) + 'px' //скрытие галлереи
            });

            $(this).html('Показать все фото');//Изменение кнопки для "показа" галлереи
            $(this).addClass('show');//Изменение кнопки для "показа" галлереи
            $(this).removeClass('hidden');//Изменение кнопки для "показа" галлереи
        }
    });

    ymaps.ready(init); //Яндекс карты
    function init(){
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            center: [55.75234524, 37.59940878],
            zoom: 13,
            controls:[],
            behaviors:[],
            autoFitToViewport: 'always'
        });
        let myPlacemark1 = new ymaps.Placemark([55.76152918, 37.62414757], {
            hintContent: 'Встречаемся тут!',
            balloonContent: 'Встречаемся тут!'
        });
        myMap.geoObjects.add(myPlacemark1);
        $(window).resize(function () {
            if ($(window).width() < 935) {
                myMap.setCenter([55.75424549, 37.62280950]); //Изменение центра карты при изменении размера браузера
            } else {
                myMap.setCenter([55.75234524, 37.59940878]);
            }
        });
        if ($(window).width() < 935) {
            myMap.setCenter([55.75424549, 37.62280950]);//Изменение центра карты при загрузке
        } else {
            myMap.setCenter([55.75234524, 37.59940878]);
        }
    }

    $('.section-reviews__item').slice(0, 3).css({'display':'flex'}); // Добавление первых трех комментариев на страницу

    if($('.reviews').children('.section-reviews__item').length > 3){
        $('.section-reviews__show').html('Показать Все (' + $('.section-reviews__item:hidden').length  + ')');

        $('.section-reviews__show').on('click', function () {
            $('.section-reviews__item:hidden').slice(0,$('.reviews').children('.section-reviews__item').length).css({'display':'flex'}); // Добавление остальных комментариев на страницу при клике на кнопку
            $(this).html('Показать Все (' + $('.section-reviews__item:hidden').length  + ')');

            if($('.section-reviews__item:hidden').length===0){
                $(this).removeClass('show');
                $(this).addClass('hidden');
            }
        })

    } else if($('.reviews').children('.section-reviews__item').length <= 3){
                $('.section-reviews__show').removeClass('show');
                $('.section-reviews__show').addClass('hidden');
    }

    $('.owl-carousel.section-gallery__box').css({
        'display':'flex'
    });

    var owl = $('.section-gallery__box'), //настройки слайдера галлереи
    owlOptions = {
        loop: true,
        margin: 11,
        autoWidth: true
    };

    if ( $(window).width() < 1214 ) { //при ширине экрана меньше 1214 px "включать" слайдер галлереи
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() { // если ширина браузера меньше 1214 px, то при изменеии его ширину "включается" слайдер галлереи
        if ( $(window).width() < 1214 ) {
            if ( $('.section-gallery__box').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.section-gallery__box').hasClass('off') ) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });

    $(function() {
        $('.owl-carousel.article-map__wrap').css({
            'display':'block'
        });
        var owl = $('.article-map__wrap'), //настройки слайдера карты
            owlOptions = {
            loop: true,
                items:1,
                nav: true,
                pagination : true,
                navText: ['<img src="img/Arrow.svg" alt="" class="nav-left">', '<img src="img/Arrow.svg" alt="" class="nav-right">'],
            };

        if ( $(window).width() < 684) {//при ширине экрана меньше 684 px "включать" слайдер галлереи
            var owlActive = owl.owlCarousel(owlOptions);

        } else {
            owl.addClass('off');
        }

        $(window).resize(function() {
            if ( $(window).width() < 684) { // если ширина браузера меньше 1214 px, то при изменеии его ширину "включается" слайдер галлереи
                if ( $('.article-map__wrap').hasClass('off') ) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if ( !$('.article-map__wrap').hasClass('off') ) {
                        owl.addClass('off').trigger('destroy.owl.carousel');
                        owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });

    $('.popup__btn ').on('click', function () {

        if($('.input-date').val().length > 0 && $('.input-mail').val().length > 0 && $('.input-name').val().length > 0 &&
            $('.input-surname').val().length > 0 && $('.input-phone').val().length > 0 && $('.input-num-card').val().length > 0 &&
            $('.input-date-card').val().length > 0 && $('.input-cvv-card').val().length > 0 && $('.checkbox').prop('checked')===true){ //если input НЕ пустые, а также нажат чекбокс, то отправить форму

            alert('Спасибо, форма отправлена!');
            $('.popup-form').addClass('popup_hidden');// скрыть popup
            $('.popup-form').removeClass('popup_show');// скрыть popup

        } else { //если input пустые
            alert('Пожалуйста, введите все данные!');
            return false; //отмена отправки формы
        }
    });

    $('.input-num-card').on('input', function () {
        if (this.value.length > 16) this.value = this.value.slice(0, 16); // Запрет на ввод данных после достижения 16 символов
    });

    $('.input-phone').on('input', function () {
        if (this.value.length > 11) this.value = this.value.slice(0, 11);// Запрет на ввод данных после достижения 11 символов
    });

    $('.input-date-card').on('input', function () {
        if (this.value.length > 8) this.value = this.value.slice(0, 8);// Запрет на ввод данных после достижения 8 символов
    });

    $('.input-date').on('input', function () {
        if (this.value.length > 8) this.value = this.value.slice(0, 8);// Запрет на ввод данных после достижения 8 символов
    });

    $('.section-buy__btn, .header__btn').on('click', function () { //при клике на кнопку "выбрать" открывается popup
        $('.popup-form').addClass('popup_show');
        $('.popup-form').removeClass('popup_hidden');
    });

    $('.popup_bg').on('click', function () { //при клике за пределами popup`а - он скрывается
        $('.popup-form').addClass('popup_hidden');
        $('.popup-form').removeClass('popup_show');
    });

    $('.popup_close').on('click', function () { //закрытие popup`а при клике на кнопку "закрыть"
        $('.popup-form').addClass('popup_hidden');
        $('.popup-form').removeClass('popup_show');
    });

    let textOne = document.querySelector('.section-organizer__span').innerHTML;  //"запоминание" текста в исходном варианте
    let textTwo = document.querySelector('.textTwo').innerHTML;//"запоминание" текста в исходном варианте

    document.querySelector('.section-organizer__span').innerHTML = textOne.slice(0,155) + '...'; // обрезание текста
    document.querySelectorAll('.section-organizer__show')[0].onclick = function () { //при клике на "читать еще" показывается исходный вариант текста
        document.querySelector('.section-organizer__span').innerHTML = textOne;
        document.querySelectorAll('.section-organizer__show')[0].style.display = 'none'; //а сама кнопка удаляется
    };
    document.querySelector('.textTwo').innerHTML = textTwo.slice(0,155) + '...'; // обрезание текста
    document.querySelectorAll('.section-organizer__show')[1].onclick = function () {//при клике на "читать еще" показывается исходный вариант текста
        document.querySelector('.textTwo').innerHTML = textTwo;
        document.querySelectorAll('.section-organizer__show')[1].style.display = 'none';//а сама кнопка удаляется
    };

});

