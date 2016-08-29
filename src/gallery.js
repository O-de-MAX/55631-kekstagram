'use strict';

var Gallery = function() {

  var self = this;

  this.container = document.querySelector('.gallery-overlay');
  this.preview = this.container.querySelector('img');
  this.pictures = [];
  this.activePicture = 0;

  this.onGalleryclick = function() {
    self.show();
  };

  this.closeGallery = this.container.querySelector('.gallery-overlay-close');
  this.closeGallery.addEventListener('click', self.hide);

  this.gallery.addEventListener('click', new Gallery());

}();

Gallery.prototype.show = function(index) {
  this.container.classList.remove('invisible');
  Gallery.prototype.setActivePicture(index);
};

Gallery.prototype.hide = function() {
  this.container.classList.add('invisible');
};

Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.setActivePicture = function(index) {
  this.activePicture = index;
  this.preview.src = this.activePicture.url;
  this.container.querySelector('.likes-count').innerHTML = this.activePicture.likes;
  this.container.querySelector('.comments-count').innerHTML = this.activePicture.comments;
};

module.exports = new Gallery();
