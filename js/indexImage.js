$(document).ready(function () {
  var jsonURL = "https://clarkhacks.com/f/feed.json";
  $.getJSON(jsonURL, function (json) 
  {
    var postBlock= "";
    $.each(json, function () {
      postBlock += '<article><h1>' + this.title + '</h1><p>' + this.content + '</p><a href="' + this.url + '">[ Read ]</a></article>';
    });

   $('#wrapper').append(postBlock);
  });
});