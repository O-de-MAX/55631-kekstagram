'use strict';

var Gallery = function() {

  this.container = document.querySelector('.gallery-overlay');
  this.preview = document.querySelector('.gallery-overlay-image');
  this.closeGallery = document.querySelector('.gallery-overlay-close');
  this.pictures = [];
  this.activePicture = 0;

  var self = this;

  this.closeGallery.addEventListener('click', self.hide);

  this.preview.addEventListener('click', function() {
    var nextIndex = this.activePicture + 1;
    self.show(nextIndex % this.picture.length);
  });

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

module.exports = new Gallery();
