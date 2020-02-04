$(document).ready(function () {
  // WRITE YOUR CODE HERE.
  console.log("hi")

  $('form').on('submit', function (event) {
    event.preventDefault()

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
