'use strict';

var filterElements = document.querySelector('.filters');
var picturesContainer = document.querySelector('.pictures');

var pictures = [];

var load = require('./load');
var getPicturesElement = require('./picture');
var gallery = require('./gallery.js');


function hideFilters() {
  filterElements.classList.add('hidden');
}
function showFilters() {
  filterElements.classList.remove('hidden');
}

function renderPictures() {
  pictures.forEach(function(picture, index) {
    picturesContainer.appendChild(getPicturesElement(picture, index));
  });
}

hideFilters();

load('/api/pictures', function(data) {
  pictures = data;
  renderPictures();
  gallery.setPictures(pictures);
  showFilters();
});
