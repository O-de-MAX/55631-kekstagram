'use strict';

var Gallery = function() {

  var galleryContainer = document.querySelector('.gallery-overlay');
  var closeGallery = galleryContainer.querySelector('.gallery-overlay-close');
  var galleryPreview = galleryContainer.querySelector('img');

  var galleryPictures = [];
  var activePicture = 0;


  onCloseGalleryClick = function() {
    hide();
  };

  galleryPreview.onclick = function() {
    setActivePicture();
  };


  function setPictures(pictures) {
    galleryPictures = pictures;
  }

  function show(picture) {
    galleryContainer.classList.remove('invisible');
    setActivePicture(picture);
  }

  function hide() {
    galleryContainer.classList.add('invisible');
  }

  function setActivePicture(picture) {
    activePicture = picture;
    galleryPreview.src = activePicture.url;
    galleryContainer.querySelector('.likes-count').innerHTML = activePicture.likes;
    galleryContainer.querySelector('.comments-count').innerHTML = activePicture.comments;
  }

  closeGallery.onclick = onCloseGalleryClick;

  setActivePicture(activePicture);

}();


module.exports = new Gallery();
