
console.log("hi")

$('#Ctext').on('click', function () {

  //The new text that we want to show.
  var newText = ['This text has been changed!',
    'new text 2',
    'really new text 3'



  ];
// console logs between each step can tell you what your doing

var arraySize = newText.length // arraySize is finding length of newText

var randomNumber = (Math.random()*arraySize )  // .random picks from 0 to 1 * multiplies newText.length which is now arraySize


var indexed = Math.floor(randomNumber); // math.floor rounds down 
console.log("indexed is"+indexed)

var selectedValue = newText[indexed] ; // anything [] are numbers 



  //Change the text using the text method.
  $('#Mbox').text(selectedValue);

});












/*
function showMessage() {
    alert( 'Hello ' );

  }

  document.getElementById("btn btn-outline-primary").onclick=showMessage */