<!-- jQuery call to the accordion() method. -->

// Accordion

$(document).ready(function() {
    $("#tabs").accordion();

    // Get today's date

    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10)
    {
        dd='0'+dd;
    }

    if(mm<10)
    {
        mm='0'+mm;
    }

    today = mm +'/'+dd+'/'+yyyy;

    document.getElementById("date").innerHTML = today;

});

// Jquery plugin to slideshow

$(document).ready(function() {

  var dataArray=new Array();
        dataArray[0]="./img/amb.png";
        dataArray[1]="./img/twitter.png";
        dataArray[2]="./img/insta.png";
        dataArray[3]="./img/youtube.png";

  var titles=new Array();
        titles[0]="American Boneyard";
        titles[1]="Follow Jonathan on Twitter";
        titles[2]="Follow Jonathan on Instagram";
        titles[3]="Follow Jonathan on YouTube";

  var hrefs=new Array();
        hrefs[0]="https://americanboneyard.com/";
        hrefs[1]="https://twitter.com/ScienceDigging";
        hrefs[2]="https://www.instagram.com/floridafossils/";
        hrefs[3]="https://www.youtube.com/channel/UCDQUtXg96LToKw0ozC4Gx9w";

  var index = 0;

  window.setInterval(function(){

  $("#image").fadeOut(1000, function(){
    document.getElementById("image").src = dataArray[index];
    document.getElementById("url").href = hrefs[index];
    $("#image").fadeIn(1000);
  });

  $("#caption").fadeOut(1000, function(){
    document.getElementById("caption").innerHTML = titles[index];
    $("#caption").fadeIn(1000);
  });

  if (index == dataArray.length-1)
      {
        index = 0;
      }
      else
      {
        index++;
      }

},6000);

  });

// Fade Header when scrolling and chain plugin to shrink header

$(document).ready(function() {

  $(window).on('scroll', function() {
    var header = $("#header");
    if ($(this).scrollTop() > 50) {
        if (!header.data('faded')) header.data('faded', 1).stop(true).fadeTo(400, 0.1).animate({ height:'25px', queue: false},600);
    } else if (header.data('faded')) {
        header.data('faded', 0).stop(true).fadeTo(400, 1).animate({ height:'40px', queue: false},600);
    }

  });

});

$(document).ready(function() {

  $.getJSON("https://api.myjson.com/bins/1fqvlu", function(json) {

	    	console.log(json.About[0].image); // this will show the info it in firebug console

				var x = document.getElementById("jontitle");
				var z = document.getElementById("para");
				var img = document.getElementById("jonimg");

				x.innerHTML = json.About[0].title;
				z.innerHTML = json.About[0].text;

				img.src = json.About[0].image;

			});
});

$(document).ready(function() {

  function joke(){

  $.getJSON("https://api.myjson.com/bins/1fiayq", function(json) {

	    	console.log(json[0].id); // this will show the info it in firebug console

        var ran = Math.floor(Math.random() * 383);

				var x = document.getElementById("question");
				var z = document.getElementById("joke");

				x.innerHTML = json[ran].setup;
				z.innerHTML = json[ran].punchline;

			});

    }

});

$(document).ready(function() {

        // get the image URL and caption for each image

        var pics = [
          ['./images/1.jpg'],
          ['./images/2.jpg'],
          ['./images/3.jpg'],
          ['./images/4.jpg'],
          ['./images/7.jpg'],
          ['./images/8.jpg'],
          ['./images/9.jpg'],
          ['./images/10.jpg'],
          ['./images/11.jpg'],
          ['./images/12.JPG'],
          ['./images/13.JPG'],
          ['./images/14.jpg'],
          ['./images/16.jpg'],
          ['./images/17.jpg'],
          ['./images/18.jpg'],
          ['./images/19.JPG'],
          ['./images/20.jpg'],
        ]

        var count = pics.length;
        var cur = 1;

        // preload the image for each link

        var $imgs = new Array();
        for (var i =0; i < count - 1; i++){
          var $image = $("<img>").attr('src', pics[i]);
          $imgs.push($('<img>').attr('src', pics[i]));
        }

        // set up the event handlers for each link

        $(".ayy").click(function(evt){

          event.preventDefault();

          $("#image1").fadeOut(1000, function(){
            document.getElementById("image1").src = image;
            $("#image1").fadeIn(1000);
          });

          $("#caption1").fadeOut(1000, function(){
            document.getElementById("caption1").innerHTML = title;
            $("#caption1").fadeIn(1000);
          });

          var image = $(this).attr("href");

          var title = $(this).attr("title");

        });

});
