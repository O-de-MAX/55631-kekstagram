'use strict';

var filterElements = document.querySelector('.filters');
var picturesContainer = document.querySelector('.pictures');

var pictures = [];

var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery.js');




function hideFilters() {
  filterElements.classList.add('hidden');
}
function showFilters() {
  filterElements.classList.remove('hidden');
}

function renderPictures() {

  pictures.forEach(function(picture, index) {
    var picture = new Picture(picture, index);
    picturesContainer.appendChild(picture.element);
  });
}

hideFilters();

load('/api/pictures', function(data) {
  pictures = data;
  renderPictures();
  gallery.setPictures(pictures);
  showFilters();
});
