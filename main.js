let gallery__box = document.querySelector('.section-gallery__box');
let gallery__show = document.querySelector('.section-gallery__show');
let img = document.querySelectorAll('.section-gallery__img');
gallery__box.style.height = 2 * (img[0].offsetHeight +11) + 'px';

window.onresize = function(){
    gallery__box.style.height = 2 * (img[0].offsetHeight +11) + 'px';

}

gallery__show.addEventListener('click', function () {
    if (this.classList[1] === 'show') {
        gallery__box.style.height = (gallery__box.children.length / 4) * (img[0].offsetHeight +11) + 'px';
        gallery__show.innerHTML = 'Скрыть фото';
        gallery__show.classList.remove('show');
        gallery__show.classList.add('hidden');
    } else {
        gallery__box.style.height = 2 * (img[0].offsetHeight +11) + 'px';
        gallery__show.innerHTML = 'Показать все фото';
        gallery__show.classList.remove('hidden');
        gallery__show.classList.add('show');
    }
});
ymaps.ready(init);
function init(){
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        center: [55.75234524, 37.59940878],
        zoom: 13,
        controls:[],
        behaviors:[]
    });
    let myPlacemark1 = new ymaps.Placemark([55.76152918, 37.62414757], {
        hintContent: 'Встречаемся тут!',
        balloonContent: 'Встречаемся тут!'
    });
    myMap.geoObjects.add(myPlacemark1);
}

let reviews = document.querySelector('.reviews');
let item = document.querySelectorAll('.section-reviews__item');
let showMore = document.querySelector('.section-reviews__show');

if(reviews.children.length > 3){
    let showMoreCount = reviews.children.length - 3;
    showMore.innerHTML = 'Показать Все (' + showMoreCount  + ')';
    $('.section-reviews__show').on('click', function () {
        let height = $(reviews).height();
        height+= 317.5 * 3;
        if(height < 317.5 * reviews.children.length){
            showMoreCount -= 3;
            $(reviews).css({'height' : height + 'px'});
            showMore.innerHTML = 'Показать Все (' + showMoreCount  + ')';

        } else {
            $(reviews).css({'height' : 317.5 * reviews.children.length + 'px'});
            showMore.classList.remove('show');
            showMore.classList.add('hidden');

        }
    })
}

$(document).ready(function(){

});
$(function() {
    var owl = $('.section-gallery__box'),
        owlOptions = {
            loop: true,
            margin: 11,
            autoWidth: true
        };

    if ( $(window).width() < 1214 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 1214 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});
$('.owl-carousel').css({
    'display':'block'
});
$(function() {
    var owl = $('.article-map__wrap'),
        owlOptions = {
            loop: true,
            items:1,
            nav: true,
            pagination : true,
            navText: ['<img src="img/Arrow.svg" alt="" class="nav-left">', '<img src="img/Arrow.svg" alt="" class="nav-right">'],

        };

    if ( $(window).width() < 684) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 684) {
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
