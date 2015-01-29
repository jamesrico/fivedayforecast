'use strict';

var customUrl;

document.querySelector('#submitButton').addEventListener('click', function() {
  var userZipCode = document.querySelector('#userZipCode').value;
  var strUrl = 'https://api.wunderground.com/api/152eccaad753eb4b/forecast10day/q/37207.json';
    customUrl = strUrl.replace('37207', userZipCode);
    console.log(userZipCode);
    console.log(customUrl);
  var zipCodeUrl = 'https://api.wunderground.com/api/152eccaad753eb4b/forecast10day/q/37207.json';
    console.log(zipCodeUrl);
});

function getJSON(url, cb){
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  }

  request.send();
}




