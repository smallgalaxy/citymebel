$(document).ready(function() {
  $('.slider').slick({
    slidesToShow:3, // количество показываемых картинок в слайдере.
    slidesToScroll:1, // количество картинок при свайпе.
    adaptiveHeight: true,
    speed: 1000, // скорость.
    autoplay: true, // втопролистывание.
    autoplaySpeed: 1500, // пауза при автопролистывании.
    draggable:false, // отключение возможности листать слайдер мышкой.
  	LazyLoad:true, // для разгрузки картинок только в нужнйы момент.
  	mobileFirst: true, // модильная адаптация.
  	pauseOnFocus: false,
  	pauseOnHover: false,
  	pauseOnDotsHover: false,
  	waitForAnimate:false
  });
});