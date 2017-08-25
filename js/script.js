'use strict';

var popupWrapper = document.querySelector('.popup');
var popup = popupWrapper.querySelectorAll('.popup__item');
var map = popupWrapper.querySelector('.map');
var feedback = popupWrapper.querySelector('.feedback');
var mapOpen = document.querySelector('.contacts__map-link');
var feedbackOpen = document.querySelector('.contacts__btn');

// var openPopup = function (window) {
//   popupWrapper.classList.remove('visually-hidden');
//   window.classList.remove('hidden');
//   window.addEventListener('click', closePopup);
// };

var closePopup = function (evt) {
  var target = evt.currentTarget;
  var close = evt.target;

  if (close.classList.contains('popup__close-btn')) {
    target.removeEventListener('click', closePopup);
    target.classList.add('hidden');
    popupWrapper.classList.add('visually-hidden');
  }
};

mapOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWrapper.classList.remove('visually-hidden');
  map.classList.remove('hidden');
  map.addEventListener('click', closePopup);
});

feedbackOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWrapper.classList.remove('visually-hidden');
  feedback.classList.remove('hidden');
  feedback.addEventListener('click', closePopup);
});

