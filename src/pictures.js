'use strict';

var filterElements = document.querySelector('.filters');
var picturesContainer = document.querySelector('.pictures');

var pictures = [];

var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery.js');

var pageNumber = 0;
var pageSize = 11;


function hideFilters() {
  filterElements.classList.add('hidden');
}
function showFilters() {
  filterElements.classList.remove('hidden');
}

function renderPictures() {

  pictures.forEach(function(picture, index) {
    picture = new Picture(picture, index);
    picturesContainer.appendChild(picture.element);
  });
}

hideFilters();

load('/api/pictures', {
  from: pageNumber,
  to: pageNumber + pageSize,
  filter: 'default'
}, function(loadedData) {
  pictures = loadedData;
  renderPictures();
  gallery.setPictures(pictures);
  showFilters();
});
