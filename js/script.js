'use strict';

var popupWrapper = document.querySelector('.popup');
var activePopup;
var map = popupWrapper.querySelector('.map');
var feedback = popupWrapper.querySelector('.feedback');
var mapOpen = document.querySelector('.contacts__map-link');
var feedbackOpen = document.querySelector('.contacts__btn');

var openPopup = function (evt) {
  evt.preventDefault();
  var target = evt.currentTarget.classList;
  if (target.contains('contacts__map-link')) {
    activePopup = map;
  } else if (target.contains('contacts__btn')) {
    activePopup = feedback;
  }
  activePopup.classList.remove('hidden');
  activePopup.addEventListener('click', onCloseBtnClick);
  popupWrapper.classList.remove('visually-hidden');
  document.addEventListener('keydown', onEscPress);
};

var closePopup = function () {
  activePopup.removeEventListener('click', onCloseBtnClick);
  activePopup.classList.add('hidden');
  activePopup = undefined;
  popupWrapper.classList.add('visually-hidden');
  document.removeEventListener('keydown', onEscPress);
};

var onCloseBtnClick = function (evt) {
  if (evt.target.classList.contains('popup__close-btn')) {
    closePopup();
  }
};

var onWrapperClick = function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
};

var onEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

mapOpen.addEventListener('click', openPopup);
feedbackOpen.addEventListener('click', openPopup);
popupWrapper.addEventListener('click', onWrapperClick);
