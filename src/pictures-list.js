'use strict';


(function() {
  var filterElements = document.querySelector('.filters');

  var picturesContainer = document.querySelector('.pictures');

  var pictures = [];

  var load = require('./load');

  var getPicturesElement = require('./pictures');


  function hideFilters() {
    filterElements.classList.add('hidden');
  }
  function showFilters() {
    filterElements.classList.remove('hidden');
  }

  function renderPictures() {
    pictures.forEach(function(picture) {
      picturesContainer.appendChild(getPicturesElement(picture));
    });
  }

  hideFilters();

  load('/api/pictures', function(data) {
    pictures = data;
    console.log(pictures);
    renderPictures();
    showFilters();
  });
})();
