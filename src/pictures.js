'use strict';
var loadUrl = '/api/pictures';
var filters = document.querySelector('.filters');


var picturesContainer = document.querySelector('.pictures');
var footer = document.querySelector('footer');

var pageNumber = 0;
var pageSize = 11;
var throttleTimeOut = 100;

var pictures = [];

var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery.js');


function hideFilters() {
  filters.classList.add('hidden');
}
function showFilters() {
  filters.classList.remove('hidden');
}

function renderPictures() {
  pictures.forEach(function(picture, index) {
    picture = new Picture(picture, index);
    picturesContainer.appendChild(picture.element);
  });
}

hideFilters();

var lastCall = Date.now();

window.addEventListener('scroll', function() {
  if (Date.now() - lastCall >= throttleTimeOut) {
    if (footer.getBoundingClientRect().bottom - window.innerHeight <= 0) {
      load(pageNumber++);
    }

    lastCall = Date.now();
  }
});

filters.addEventListener('change', changeFilters, true);

function changeFilters(evt) {
  picturesContainer.innerHTML = '';
  pageNumber = 0;
  load(evt.target.id);
}

load(loadUrl, {
  from: pageNumber,
  to: pageNumber + pageSize,
  filter: 'default'
}, function(loadedData) {
  pictures = loadedData;
  renderPictures();
  gallery.setPictures(pictures);
  showFilters();
});
