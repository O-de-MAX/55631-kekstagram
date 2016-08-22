'use strict';

var createCallback = function(src, loadPicturesCallback) {
  var elem = document.createElement('script');
  elem.src = src;
  document.head.appendChild(elem);

  var pictures = [];
  window.loadPicturesCallback = function(data) {
    pictures = data;
    console.log(pictures);
  };
  loadPicturesCallback();
};

createCallback('http://localhost:1506/api/pictures?callback=loadPicturesCallback');
