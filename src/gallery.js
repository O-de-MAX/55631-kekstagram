'use strict';

var getPicturesElement = require('./pictures');

var galleryContainer = document.querySelector('.gallery-overlay');
var galleryPreview = galleryContainer.querySelector('img');
var galleryPictures = [];
var activePicture = 0;

var Gallery = function(data) {

  this.data = data;
  this.gallery = getPicturesElement(this.data, galleryContainer);

  var self = this;

  this.onGalleryclick = function() {
    self.show();
  };

  this.closeGallery = galleryContainer.querySelector('.gallery-overlay-close');
  this.closeGallery.onclick = function() {
    self.hide();
  };

  this.gallery.onclick = function() {
    self.setActivePicture();
  };

}();

Gallery.prototype.show = function(index) {
  galleryContainer.classList.remove('invisible');
  Gallery.prototype.setActivePicture(index);
};

Gallery.prototype.hide = function() {
  galleryContainer.classList.add('invisible');
};

Gallery.prototype.setPictures = function(pictures) {
  galleryPictures = pictures;
};

Gallery.prototype.setActivePicture = function(index) {
  activePicture = index;
  galleryPreview.src = activePicture.url;
  galleryContainer.querySelector('.likes-count').innerHTML = activePicture.likes;
  galleryContainer.querySelector('.comments-count').innerHTML = activePicture.comments;
};

module.exports = new Gallery();
