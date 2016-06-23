var giphyApi = "http://api.giphy.com/v1/gifs/search?";
var giphyApiKey = "&api_key=dc6zaTOxFJmzC&limit=5";
var giphyQueryType = "&q=";

var xhr = new XMLHttpRequest();
xhr.open('GET', giphyApi + giphyQueryType + 'ryan-gosling' + giphyApiKey);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    document.getElementById('ajax').innerHTML = xhr.responseText;
  }
};

function sendAJAX() {
  xhr.send();
  document.getElementById('loadGifs');
}
