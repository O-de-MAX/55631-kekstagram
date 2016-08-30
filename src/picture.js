'use strict';

var gallery = require('./gallery.js');

var template = document.getElementById('picture-template');

var elementToClone;
if ('content' in template) {
  elementToClone = template.content.querySelector('.picture');
} else {
  elementToClone = template.querySelector('.picture');
}

var getPicturesElement = function(picture, index) {
  var pictureElement = elementToClone.cloneNode(true);
  var imageElement = new Image();

  imageElement.onload = function() {
    pictureElement.querySelector('img').src = picture.url;
  };
  imageElement.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };
  imageElement.src = picture.url;

  pictureElement.addEventListener('click', function() {
    gallery.show(index);
  });

  return pictureElement;
};

module.exports = getPicturesElement;
