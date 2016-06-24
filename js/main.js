// var searchInput;
$(document).ready(function(){
  // var searchInput = document.getElementById('inputText').value;
    $('#loadGifs').click(function(e) {
      // var collectText;
      var searchInput = $('#inputText').serialize();
      // searchInput = $('.inputText').val();

      // console.log("search input: " + takeOffTen(searchInput));
      e.preventDefault()
        console.log("click noticed")
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=" + takeOffTen(searchInput) + "&api_key=dc6zaTOxFJmzC", //* $('#inputText').val() <--inplace of r gosling
            type: "GET",
            success: function(response) {
              // console.log("This works too")
              $('#ajax').html(response);
              var newb = response.data[0].images.original.url;
              // console.log(newb);

            }
        });
    });
});
takes off
function takeOffTen(string) {
   return string.slice(10);
}
