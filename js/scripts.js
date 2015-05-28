
var numberToRoman = function(number){
  var numerals = {1 : "I", 5 : "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"}
  var finalArray = []


    while (number > 0) {
      if (number / 1000 >= 1){
        var timesDivisibleBy = Math.floor(number/1000)
        for(var i=0; i<timesDivisibleBy; i++){
          finalArray.push("M");
        }
        number = number - (1000*timesDivisibleBy);
      }


      else if (number / 500 >= 1) {
        var timesDivisibleBy = Math.floor(number/500)
        for(var i=0; i<timesDivisibleBy; i++) {
          finalArray.push("D");
        }
        number = number - (500*timesDivisibleBy)
      }

      else if (number / 100 >= 1) {
        var timesDivisibleBy = Math.floor(number/100)
        if (timesDivisibleBy >3) {
          finalArray.push("CD")
        } else {
          for(var i=0; i<timesDivisibleBy; i++) {
          finalArray.push("C");
          }
        }
        number = number - (100*timesDivisibleBy)

      }


      else if (number / 50 >= 1) {
        var timesDivisibleBy = Math.floor(number/50)
        if (number === 90) {
          finalArray.push("XC")
          number = number - 90;
        } else {
          for(var i=0; i<timesDivisibleBy; i++) {
            finalArray.push("L");
          }
        }
        number = number - (50*timesDivisibleBy)
      }


      else if (number / 10 >= 1) {
        var timesDivisibleBy = Math.floor(number/10)
        if (timesDivisibleBy >3) {
          finalArray.push("XL")
        } else {
          for(var i=0; i<timesDivisibleBy; i++) {
            finalArray.push("X");
          }
        }
        number = number - (10*timesDivisibleBy)
      }


      else if (number / 5 >= 1) {
        var timesDivisibleBy = Math.floor(number/5)
        if (number === 9) {
          finalArray.push("IX")
          number = number - 9;
        } else {
        for(var i=0; i<timesDivisibleBy; i++) {
          finalArray.push("V");
        }
      }
        number = number - (5*timesDivisibleBy)
      }

      // ONES
      else if (number / 1 >= 1) {
        var timesDivisibleBy = Math.floor(number/1)
        if (timesDivisibleBy >3) {
          finalArray.push("IV")
        } else {
          for(var i=0; i<timesDivisibleBy; i++) {
            finalArray.push("I");
          }
        }
        number = number - (1*timesDivisibleBy)

      }




// CLOSING WHILE LOOP
    }


  return finalArray.join("");
}
