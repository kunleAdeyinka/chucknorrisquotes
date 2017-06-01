$(document).ready(function(){

    $("#randomQuote").text(function(){
      //make ajax request to icndb
      $.ajax({
        url: 'http://api.icndb.com/jokes/random'
      }).done(function(quote){

        var newQuote = "\"";
        newQuote += quote.value.joke;
        newQuote += "\"";
        $("#randomQuote").text(newQuote);
      });
    });

    $('#newQuote').on('click', function(e){
        //make ajax request to icndb
        $.ajax({
          url: 'http://api.icndb.com/jokes/random'
        }).done(function(quote){

          var newQuote = "\"";
          newQuote += quote.value.joke;
          newQuote += "\"";
          $("#randomQuote").text(newQuote);
        });
    });

    $('#tweetQuote').on('click', function(e){
        var quote = document.getElementById('randomQuote').innerText;
        var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(quote) + '.';
        window.open(tweetUrl);
    });
});
