var removePunctuation = function(string){
    var regex = new RegExp (/[^0-9a-zA-Z\s]/g)
    var newString = string.toLowerCase()
    var puncuation = newString.match(regex)
    while (puncuation !== null) {
      newString = newString.replace(regex, "")
      puncuation = newString.match(regex)
    }
    return newString;

}

var wordCount = function(string) {
  string = removePunctuation(string);
  var wordHash = {};
  var wordArray = string.split(" ")
  wordArray.forEach(function(word) {
    if (wordHash[word] === undefined) {
      wordHash[word] = 1
    } else {
      wordHash[word] +=1
    }
  })
  return wordHash;
}

// var sortHash = function(string) {
//   var wordHash = wordCount(string);
//   var wordArray = []
//
//   wordHash.forEach(function(element){
//     wordArray.push(element);
//
//   })
// }

$(document).ready(function(){

  $("#string-form").submit(function(event){
    var inputString = $('#string-input').val()
    console.log(inputString)
    var resultHash = wordCount(inputString)
    console.log(resultHash)

    for(var key in resultHash) {
      $("#results").append([key, "  ", resultHash[key], "<br />"])
    };


    event.preventDefault();
  })


});
