$(document).ready(function(){

  alert("Hello! I am an alert box!!");

  var d = new Date();
  document.getElementById("date").innerHTML = d.toLocaleDateString("en-US");

  $( function() {
      $( "#accordion" ).accordion();
  } );

}
