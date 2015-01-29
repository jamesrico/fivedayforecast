
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


