console.log();
$(function () {


});
$('.section-gallery__img').slice(0,8).show();
$('.section-gallery__show.show').on('click', function (e) {
    $('.section-gallery__img:hidden').slice(0,document.querySelector('.section-gallery__box').children.length).show();
    document.querySelector('.section-gallery__show').innerHTML = '';
    document.querySelector('.section-gallery__show').classList.remove('show');
    document.querySelector('.section-gallery__show').classList.add('hidden');

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



/* let mmm = document.querySelector('.mmm');
let hhh = document.querySelectorAll('.hhh');
let showMore = document.querySelector('.section-reviews__show');

if (mmm.children.length > 20){
    console.log(document.querySelector('.mmm').children.length);
    for (var i = 0; i < mmm.children.length; i++){
        hhh[i].style.display = 'none';
    }
    showMore.innerHTML = 'Показать еще (' + $('.hhh:hidden').length + ')';

    $('.hhh').slice(0,8).show();
    $('.section-reviews__show').on('click', function (e) {
        $('.hhh:hidden').slice(0,8).show();
        showMore.innerHTML = 'Показать еще (' + $('.hhh:hidden').length + ')';
        if($('.hhh:hidden').length < 1){
            showMore.style.display = 'none';
        }

    });
}
*/