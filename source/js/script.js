// Карта
let center = [59.93863094299924,30.322875048984045];

function init () {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: [17],
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-pin.png',
    iconImageSize: [113, 106],
    iconImageOffset: [-40, -100]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

// Кнопка вызова навигации

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector('.main-header__burger-menu');
  const navList = document.querySelector('.site-list--open');

  toggleButton.addEventListener("click", function() {
    navList.classList.toggle("site-list--close");
  });
});
