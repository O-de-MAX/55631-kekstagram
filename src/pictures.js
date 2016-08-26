'use strict';

var template = document.getElementById('picture-template');

var elementToClone;
if ('content' in template) {
  elementToClone = template.content.querySelector('.picture');
} else {
  elementToClone = template.querySelector('.picture');
}

module.exports = function(picture) {
  var pictureElement = elementToClone.cloneNode(true);
  var imageElement = new Image();

  imageElement.onload = function() {
    pictureElement.querySelector('img').src = picture.url;
  };
  imageElement.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };
  imageElement.src = picture.url;

  return pictureElement;
};
