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

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

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

// Кнопка меню навигации

const toggleButton = document.getElementById("toggleButton");
const openIcon = document.querySelector(".main-header__svg--open");
const closeIcon = document.querySelector(".main-header__svg--close");
let isOpen = false;

toggleButton.addEventListener("click", function () {
  if (isOpen) {
    openIcon.style.opacity = 1;
    closeIcon.style.opacity = 0;
  } else {
    openIcon.style.opacity = 0;
    closeIcon.style.opacity = 1;
  }
  isOpen = !isOpen;
});

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector('.main-header__burger-menu');
  const navList = document.querySelector('.site-list--nojs');

  if (navList) {
    navList.classList.remove('site-list--nojs')
  }
});
