var input = document.querySelector('input'),
    ul    = document.querySelector('ul'),
    url   = 'http://api.wunderground.com/api/5b85b19f7e8c43f1/forecast10day/q/37201.json';

getJSON(url, function(data){
  document.querySelector('.dayone').innerHTML = data.forecast.txt_forecast.forecastday[0].title;
  document.querySelector('.daytwo').innerHTML = data.forecast.txt_forecast.forecastday[1].title;

});

function createdForecastList(){
var docFragment = document.createDocumentFragment();

var li = document.createElement('li');
docFragment.appendChild(li);
var text = document.createTextNode(data.txt_forecast.forecastday.title);
li.appendChild(text);

function createList(array) {
  var docFragment = document.createDocumentFragment();
    
  _.forEach(day, function (dayWeather) {
       var li = document.createElement('li');
       li.appendChild(text);
       ul.appendChild(li);
   document.appendChild(ul);

  document.querySelector('body').appendChild('ul');
})
  return docFragment;
}
}

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



