'use strict';

var gallery = require('./gallery.js');

var Picture = function(picture) {

  this.data = picture.url;

  this.template = document.getElementById('picture-template');
  this.templateContainer = 'content' in this.template ? this.template.content : this.template;

  this.element = this.templateContainer.querySelector('.picture').cloneNode(true);


  this.element.querySelector('img').src = this.data;


  this.element.addEventListener('click', gallery.onGalleryClick);

};


Picture.prototype.remove = function() {
  this.element.removeEventListener('click', gallery.onGalleryClick);
};

module.exports = new Picture();
