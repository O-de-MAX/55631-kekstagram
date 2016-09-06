'use strict';
var loadUrl = '/api/pictures';
var filters = document.querySelector('.filters');


var picturesContainer = document.querySelector('.pictures');
var footer = document.querySelector('footer');

var activeFilter;
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

function loadPictures(filterID, activePageNumber) {
  load(loadUrl, {
    from: activePageNumber * pageSize,
    to: activePageNumber * pageSize + pageSize,
    filter: filterID
  }, function(loadedData) {
    pictures = loadedData;
    renderPictures();
    gallery.setPictures(pictures);
    showFilters();
  });
}

filters.addEventListener('change', function(evt) {
  changeFilters(evt.target.id);
}, true);

function changeFilters(filterID) {
  picturesContainer.innerHTML = '';
  pageNumber = 0;
  activeFilter = filterID;
  loadPictures(filterID, pageNumber);
}

var lastCall = Date.now();

window.addEventListener('scroll', function() {
  if (Date.now() - lastCall >= throttleTimeOut) {
    if (footer.getBoundingClientRect().bottom - window.innerHeight <= 0) {
      loadPictures(activeFilter, pageNumber++);
    }

    lastCall = Date.now();
  }
});

loadPictures();
