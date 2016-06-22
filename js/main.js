$(document).on('ready', function() {
  // giphy api variables
  var giphyApi = "http://api.giphy.com/v1/gifs/search?";
  var giphyApiKey = "&api_key=dc6zaTOxFJmzC&limit=5";
  var giphyQuery = "&q=";
  var collectedInputValue;

  function gifGrab(e) {
    e.preventDefault();
    var collectedInputValue = document.getElementById('inputText').value;
    return false;
  }

  collectedInputValue = $('#giphyForm').submit(console.log(gifGrab));

  var xhr = $.get(giphyApi + giphyQuery + collectedInputValue + giphyApiKey);
  xhr.done(function(data) {
     console.log("success got data", data);
   });
});
