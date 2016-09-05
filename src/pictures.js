'use strict';

var filterElements = document.querySelector('.filters');
var picturesContainer = document.querySelector('.pictures');
var footer = document.querySelector('footer');

var pageNumber = 0;
var pageSize = 11;

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
    picture = new Picture(picture, index);
    picturesContainer.appendChild(picture.element);
  });
}

hideFilters();

window.addEventListener('scroll', function() {
  if (footer.getBoundingClientRect().bottom - window.innerHeight <= 0) {
    load(pageNumber++);
  }
});

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
