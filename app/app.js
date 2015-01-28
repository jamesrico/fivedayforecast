var url = 'http://api.wunderground.com/api/5b85b19f7e8c43f1/forecast/q/37201.json';

getJSON(url, function(data){
  console.log(data);
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
