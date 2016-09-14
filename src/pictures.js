'use strict';
var loadUrl = '/api/pictures';
var filters = document.querySelector('.filters');


var picturesContainer = document.querySelector('.pictures');
var footer = document.querySelector('footer');

var activeFilter = localStorage.getItem('filter');
var isLoading = false;
var isEndReached = false;
var pageNumber = 0;
var pageSize = 11;
var throttleTimeOut = 100;

var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery.js');


function hideFilters() {
  filters.classList.add('hidden');
}
function showFilters() {
  filters.classList.remove('hidden');

  if (activeFilter) {
    var filterNode = document.getElementById(activeFilter);
  }
  if (filterNode) {
    filterNode.checked = true;
  }
}

function renderPictures(pictures) {
  pictures.forEach(function(picture, index) {
    picture = new Picture(picture, index);
    picturesContainer.appendChild(picture.element);
  });
}

hideFilters();

function loadPictures(filterID, activePageNumber) {
  isLoading = true;

  if (activeFilter) {
    filterID = activeFilter;
  }

  load(loadUrl, {
    from: activePageNumber * pageSize,
    to: activePageNumber * pageSize + pageSize,
    filter: filterID
  }, function(pictures) {
    renderPictures(pictures);
    gallery.appendPictures(pictures);
    showFilters();
    isLoading = false;
    if (pictures.length === 0) {
      isEndReached = true;
    }
  });
}

filters.addEventListener('change', function(evt) {
  changeFilters(evt.target.id);
}, true);

function changeFilters(filterID) {
  picturesContainer.innerHTML = '';
  pageNumber = 0;
  activeFilter = filterID;
  localStorage.setItem('filter', activeFilter);
  isEndReached = false;
  gallery.clear();
  loadPictures(filterID, pageNumber);
}


var lastCall = Date.now();

function nextPage() {

  if (isLoading || isEndReached) {
    return;
  }
  if (Date.now() - lastCall >= throttleTimeOut) {
    if (footer.getBoundingClientRect().bottom - window.innerHeight < 100) {
      loadPictures(activeFilter, ++pageNumber);
    }

    lastCall = Date.now();
  }
}

window.addEventListener('scroll', nextPage);

loadPictures(activeFilter, pageNumber);
