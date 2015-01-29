'use strict';

var url = 'https://api.wunderground.com/api/152eccaad753eb4b/forecast10day/q/37207.json';

getJSON(url, function(data){
   var list = createList(data.forecast);
   document.querySelector('ul').appendChild(list);
});

function createList(namesArray){
  var docFragment = document.createDocumentFragment();

  namesArray.forEach(function(name){
    var li   = document.createElement('li'),
        name = document.createTextNode(name);

    li.appendChild(name);
    docFragment.appendChild(li);
  });

  return docFragment;
}

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
/////* semi working attempt

var url = 'http://api.wunderground.com/api/5b85b19f7e8c43f1/forecast10day/q/37201.json';
var forecast;

getJSON(url, function(data){
forecast = data.forecast;
});

function getJSON(url, cb) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function () {
if (this.status >= 200 && this.status < 400) {
cb(JSON.parse(this.response));
}
};
xhr.send()
}

forecast.txt_forecast.forecastday[0]

/////** failed attempt two
var url = 'http://api.wunderground.com/api/5b85b19f7e8c43f1/forecast10day/q/37201.json';
var data = res['forecast'];

var weatherByday = _(data).map(function(value){
return txt_forecast;
})
.chunk(2)
.value();

var ul = document.querySelector('ul');
ul.appendChild(createList(weatherByday));
});

function createList(array) {
var docFragment = document.
createDocumentFragment();

_.forEach(array, function(day){
var ol = document.createElement('ol');

_forEach(day, function(weather){
var li = document.createElement('li');
var text = document.createTextNode(
weather);
li.appendChild(text);
ol.appendChild(li);
})
return docFragment;
}

getJSON(url, function(data){
return value.forecastday;
});

function getJSON(url, cb) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function () {
if (this.status >= 200 && this.status < 400) {
cb(JSON.parse(this.response));
}
};
xhr.send()
}
