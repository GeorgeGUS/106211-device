'use strict';

var popupWrapper = document.querySelector('.popup');
var activePopup;
var map = popupWrapper.querySelector('.map');
var feedback = popupWrapper.querySelector('.feedback');
var feedbackForm = feedback.querySelector('.feedback__form');
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

  activePopup.classList.toggle('hidden');
  activePopup.classList.remove('fade-out');
  activePopup.classList.toggle('fade-in');
  activePopup.addEventListener('click', onCloseBtnClick);
  popupWrapper.classList.toggle('visually-hidden');
  document.addEventListener('keydown', onEscPress);
};

var closePopup = function () {
  activePopup.removeEventListener('click', onCloseBtnClick);
  activePopup.classList.toggle('fade-in');
  activePopup.classList.add('fade-out');
  setTimeout(function () {
    activePopup.classList.toggle('hidden');
    activePopup = undefined;
    popupWrapper.classList.toggle('visually-hidden');
  }, 300);
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

var onFormSubmit = function (evt) {
  var fields = evt.target.elements;
  activePopup.classList.remove('shake');
  if (!fields[1].value || !fields[2].value) {
    evt.preventDefault();
    feedbackForm.classList.remove('shake');
    feedbackForm.offsetWidth;// for reflow
    feedbackForm.classList.add('shake');
  }
};

mapOpen.addEventListener('click', openPopup);
feedbackOpen.addEventListener('click', openPopup);
feedbackForm.addEventListener('submit', onFormSubmit);
popupWrapper.addEventListener('click', onWrapperClick);
