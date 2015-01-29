
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

