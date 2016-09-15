'use strict';

var Gallery = function() {

  this.container = document.querySelector('.gallery-overlay');
  this.preview = document.querySelector('.gallery-overlay-image');
  this.closeGallery = document.querySelector('.gallery-overlay-close');
  this.pictures = [];
  this.activePicture = 0;

  this.closeGalleryOnClick = this.closeGalleryOnClick.bind(this);
  this.closeGallery.addEventListener('click', this.closeGalleryOnClick);

  this.previewOnClick = this.previewOnClick.bind(this);
  this.preview.addEventListener('click', this.previewOnClick);

};

Gallery.prototype.previewOnClick = function() {
  var nextIndex = this.activePicture + 1;
  this.show(nextIndex % this.pictures.length);
};

Gallery.prototype.closeGalleryOnClick = function() {
  this.hide();
};

Gallery.prototype.show = function(index) {
  this.container.classList.remove('invisible');
  this.setActivePicture(index);
};

Gallery.prototype.hide = function() {
  this.container.classList.add('invisible');
};

Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.setActivePicture = function(index) {
  this.activePicture = index;

  this.preview.src = this.pictures[index].url;
  this.container.querySelector('.likes-count').innerHTML = this.pictures[index].likes;
  this.container.querySelector('.comments-count').innerHTML = this.pictures[index].comments;
};

Gallery.prototype.appendPictures = function(pictures) {
  this.pictures = this.pictures.concat(pictures);
};

Gallery.prototype.clear = function() {
  this.pictures = [];
};

module.exports = new Gallery();
