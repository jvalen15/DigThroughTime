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
