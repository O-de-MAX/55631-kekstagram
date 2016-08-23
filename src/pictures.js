'use strict';

function loadJSONP(url, callback) {

  url += '?callback=JSONPCallback';
  var newScript = document.createElement('script');
  newScript.src = url;
  document.body.appendChild(newScript);


  window.JSONPCallback = function() {
    callback();
  };
}

var pictures = [];

loadJSONP('/api/pictures', function(data) {
  pictures = data;
  console.log(pictures);
});
