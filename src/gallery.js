'use strict';

var Gallery = function() {
  var galleryContainer = document.querySelector('.gallery-overlay');
  var closeGallery = galleryContainer.querySelector('.gallery-overlay-close');
  var galleryPreview = galleryContainer.querySelector('img');

  var pictures = [];
  var activePicture = pictures[i];


  var setPictures = function() {
    galleryPictures = pictures;
  };

  var show = function() {
    galleryContainer.classList.remove('invisible');
    setActivePicture(picture);
  };

  var hide = function() {
    galleryContainer.classList.add('invisible');
    closeGallery.removeEventListener('click', onCloseGalleryClick);
    galleryPreview.removeEventListener('click', onClickGalleryPreview);
  };

  var setActivePicture = function(picture) {
    galleryPreview.src = picture.url;
  };


  var galleryElement = getPicturesElement(pictures);
  var getPicturesElement = require('./pictures');


  var onCloseGalleryClick = closeGallery.addEventListener('click', hide);
  var onClickGalleryPreview = galleryPreview.addEventListener('click', setActivePicture);

};


module.exports = new Gallery();
