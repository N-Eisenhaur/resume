 /* var api  = {"55d4f7e164b50a23056cf030f55ae99c"} */


var junk = {

  base: "stations",
  clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
    lon: -79.38
  },
  dt: 1507510380,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
  sys: {
    type: 1,
    id: 2117,
    message: 0.0041,
    country: 'CA',
    sunrise: 1507548290,
    sunset: 1507589027,
    type: 1
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: "Clear"
    }

  ],
  wind: {
    deg: 170, speed: 1.5
  }
}



$(document).ready(function () {
  // WRITE YOUR CODE HERE.
  console.log("hi")

  $("#results").hide()

  $('form').on('submit', function (event) {
    event.preventDefault()
    $("#results").html("<h3>Current Conditions For " + junk.name + "</h3>" + 
    "<ul> <li>Temperature </li>" + "<li>"+ junk.main.temp + "</li>" +
    " <li>conditions </li>" + "<li>" +junk.weather[0].description + "</li>" +"</ul>" )
    $("#results").slideDown(2000)

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

  $('input').focus(
    function () {
      $(this).css('border', '3px solid #00cc00');
    })

    .blur(
      function () {
        $(this).css('border', '3px solid #000');
      });


  $('#change').on('click', function () {
    $('.circle').toggleClass('color');
  })







});
