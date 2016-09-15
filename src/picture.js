'use strict';

var gallery = require('./gallery.js');

var Picture = function(picture) {

  this.data = picture;

  this.template = document.getElementById('picture-template');
  this.templateContainer = 'content' in this.template ? this.template.content : this.template;

  this.element = this.templateContainer.querySelector('.picture').cloneNode(true);

  this.element.querySelector('img').src = this.data.url;

  var img = this.element.querySelector('img');

  img.onerror = function() {
    img.parentNode.classList.add('picture-load-failure');
  };

  img.src = this.data.url;

  this.showGallery = this.showGallery.bind(this);
  this.element.addEventListener('click', this.showGallery);

};


Picture.prototype.showGallery = function(index) {
  gallery.show(index);
};

Picture.prototype.remove = function() {
  this.element.removeEventListener('click', this.showGallery);
};

module.exports = Picture;
