
//////////////////////////////////////////////////////
/// your failed code here
//////////////////////////////////////////////////////


var url = "http://api.wunderground.com/api/5b85b19f7e8c43f1/forecast10day/q/37217.json";
var data;

getJSON(url, function(thisIsTheDataFromTheApi) {
  thisIsTheDataFromTheApi.simpleforecast.forecastday
});


//Display JSON data




//getJSON data

function getJSON(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {

      callback(this.response);

    }
  };
  request.send();
}


//Make document fragement


function display(response) {

  data = response.forecast.simpleforecast.forecastday;

var docFragment = document.createDocumentFragment(); // contains all gathered nodes

var div = document.createElement('DIV');
div.setAttribute("class", "day");
docFragment.appendChild(div);
var text = document.createTextNode(day[0]);
div.appendChild(text);

var img = document.createElement('IMG');
img.setAttribute("src", "IMG_URL");
docFragment.appendChild(img);

var div_0 = document.createElement('DIV');
div_0.setAttribute("class", "condition");
docFragment.appendChild(div_0);
var text_0 = document.createTextNode("Condition");
div_0.appendChild(text_0);

var div_1 = document.createElement('DIV');
div_1.setAttribute("class", "highlow");
docFragment.appendChild(div_1);
var text_1 = document.createTextNode("HighLow");
div_1.appendChild(text_1);

};









///////////////////////////////////////////////
/////////////////////////////////////////////////

var customUrl;
var zipCodeUrl = 'https://api.wunderground.com/api/152eccaad753eb4b/forecast10day/q/37207.json';
var userZipCode;
var response;
var data;


document.querySelector('#submitButton').addEventListener('click', function() {
  userZipCode = document.querySelector('#userZipCode').value;
  customUrl = zipCodeUrl.replace('37207', userZipCode);
    console.log(userZipCode);
    console.log(customUrl);
    console.log(zipCodeUrl);


//////////////////////////////////
 
  function display(callback) {
    var day = {
      "dayOfWeek": response.forecast.forecastday.title
    }



///////////////////////////////////////////////////////////
///// from app.js thursday jan 29 11:55 pm
///////////////////////////////////////////////////


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

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


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


/* browser: true */

'use strict';

document.querySelector('h1').classList.add('red');

var h2s = document.querySelectorAll('h2');
for (var i=0; i < h2s.length; i++) {
  h2s[i].classList.add('blue');
}

// h3s toUpperCase(); 'hello'.toUpperCase() => 'HELLO'
var h3s = document.querySelectorAll('h3');
// for (i=0; i < h3s.length; i++) {
//   h3s[i].textContent = h3s[i].textContent.toUpperCase();
// }

// [] = Array.prototype
[].forEach.call(h3s, function(el){
  el.textContent = el.textContent.toUpperCase();
})

var target = document.querySelector('.target');
var elementString = '<h2>OMG <a href="http://google.com">GOOG</a></h2>'
var imgCat = '<img src="http://www.washingtonpost.com/news/morning-mix/wp-content/uploads/sites/21/2014/09/Grumpy_Cat_Endorsement-017d7-ULFU.jpg">

document.querySelector('#add-element').addEventListener('click', function(){
  target.insertAdjacentHTML('afterend', elementString);
  target.appendChild(createSuperLimeDiv("OMG OMG OMG"));
});

function createSuperLimeDiv(text){
  var docFragment = document.createDocumentFragment();

  var supergreen = document.createElement('div');
  supergreen.setAttribute("class", "supergreen");
  docFragment.appendChild(supergreen);

  var superyellow = document.createElement('div');
  superyellow.setAttribute("class", "superyellow");
  supergreen.appendChild(superyellow);
  var superyellow_text = document.createTextNode(text);
  superyellow.appendChild(superyellow_text);

  return docFragment;
}




setInterval(function () {
  setRandomColor(document.querySelector('h1'))
}, 1000)

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function setRandomColor(element){
  element.style.backgroundColor = randomColor();
}

function randomColor() {
  var red = getRandomColor();
  var green = getRandomColor();
  var blue = getRandomColor();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}



document.querySelector('#add-image').addEventListener('click', function(){
  target.insertAdjacentHTML('afterend', imgCat);
  target.appendChild(createSuperLimeDiv("New Image Created!"));
});


