var url = 'https://api.wunderground.com/api/152eccaad753eb4b/forecast10day/q/37207.json';

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
