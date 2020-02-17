var api = "55d4f7e164b50a23056cf030f55ae99c"; //api key

var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Toronto&appid=" + api

console.log(weatherUrl) 




$(document).ready(function () {
  // WRITE YOUR CODE HERE.
  console.log("hi")

  $("#results").hide()



  $('form').on('submit', function (event) {
    event.preventDefault()


    //take info from api weather link + what's in iField 
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + $("#iField").val() + "&appid=" + api 


    $.get(weatherUrl, function (data) {
      //console.log(data)

      $("#results").html("<h3>Current Conditions For " + data.name + "</h3>" +
        "<ul> <li>Temperature </li>" + "<li>" + data.main.temp + "</li>" +
        " <li>conditions </li>" + "<li>" + data.weather[0].description + "</li>" + "</ul>")
      $("#results").slideDown(2000)


    })



    console.log($("#iField").val())

    $("#again").click(function () {
      $("#results").slideUp(2000)
    });
  })

  $(function () {

    $("#toggle").click(function () {
      $("#theDiv").toggle("slow");
    });
  });

  $('input').focus(  //when click border green
    function () {
      $(this).css('border', '3px solid #00cc00');
    })

    .blur(
      function () { //when not clicked border black
        $(this).css('border', '3px solid #000');
      });


  $('#change').on('click', function () {
    $('.circle').toggleClass('color');
  })







});
