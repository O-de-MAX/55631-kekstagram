'use strict';

(function() {
  var filterElements = document.querySelector('.filters');

  var picturesContainer = document.querySelector('.pictures');
  var template = document.getElementById('picture-template');

  var elementToClone;
  if ('content' in template) {
    elementToClone = template.content.querySelector('.picture');
  } else {
    elementToClone = template.querySelector('.picture');
  }

  var pictures = [];


  function hideFilters() {
    filterElements.classList.add('hidden');
  }

  function showFilters() {
    filterElements.classList.remove('hidden');
  }

  function loadJSONP(url, callback) {
    url += '?callback=JSONPCallback';
    var newScript = document.createElement('script');
    newScript.src = url;
    document.body.appendChild(newScript);

    window.JSONPCallback = function(data) {
      callback(data);
    };
  }

  function getPicturesElement(picture) {
    //debugger;
    var pictureElement = elementToClone.cloneNode(true);
    var imageElement = new Image();
    imageElement.setAttribute('width', 182);
    imageElement.setAttribute('height', 182);

    imageElement.onload = function() {
      template.content.querySelector('img').src = picture.url;
    };
    imageElement.onerror = function() {
      pictureElement.classList.add('picture-load-failure');
    };
    imageElement.src = picture.url;

    return imageElement;
  }

  function renderPictures() {
    pictures.forEach(function(picture) {
      picturesContainer.appendChild(getPicturesElement(picture));
    });
  }

  hideFilters();

  loadJSONP('/api/pictures', function(data) {
    pictures = data;
    console.log(pictures);
    renderPictures();
    showFilters();
  });
})();
