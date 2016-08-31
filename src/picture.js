'use strict';

var gallery = require('./gallery.js');

var Picture = function(picture, index) {

  this.data = picture;

  this.template = document.getElementById('picture-template');
  this.templateContainer = 'content' in this.template ? this.template.content : this.template;

  this.element = this.templateContainer.querySelector('.picture').cloneNode(true);


  this.element.querySelector('img').src = this.data.url;


  this.element.addEventListener('click', function() {
    gallery.show(index);
  });

};


Picture.prototype.remove = function() {
  this.element.removeEventListener('click');
};

module.exports = Picture;
