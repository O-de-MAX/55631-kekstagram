'use strict';
(function() {

var filterElements = document.querySelector('.filters');
function hideFilters() {
  filterElements.classList.add('hidden');
}
hideFilters();

function loadJSONP(url, callback) {

  url += '?callback=JSONPCallback';
  var newScript = document.createElement('script');
  newScript.src = url;
  document.body.appendChild(newScript);

  window.JSONPCallback = function(data) {
    callback(data);
  };
}

var pictures = [];

loadJSONP('/api/pictures', function(data) {
  pictures = data;
  console.log(pictures);
});

var picturesContainer = document.querySelector('.pictures');
var templateElement = document.getElementById('picture-template');
var elementToClone;

if ('content' in templateElement) {
  elementToClone = templateElement.content.querySelector('.picture');
} else {
  elementToClone = templateElement.querySelector('.picture');
}

var getPicturesElement = function(data, container) {
  var element = elementToClone.cloneNode(true);
  container.appendChild(element);

  var picturesElement = new Image();

  picturesElement.onload = function() {
    templateElement.content.querySelector('img').src = data.url;
  };
  picturesElement.onerror = function() {
    element.classList.add('picture-load-failure');

  picturesElement.src = data.url;

  return element;
};

pictures.forEach(function(picture) {
  getPicturesElement(picture, picturesContainer);
});


})();
