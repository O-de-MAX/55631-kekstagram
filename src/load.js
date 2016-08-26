'use strict';

module.exports = function(url, callback) {
  url += '?callback=JSONPCallback';
  var newScript = document.createElement('script');
  newScript.src = url;
  document.body.appendChild(newScript);

  window.JSONPCallback = function(data) {
    callback(data);
  };
};
