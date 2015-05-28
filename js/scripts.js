var countBy = function(countUpNum, finalNum) {
  var finalArray = []
  if (countUpNum === 0){
    finalArray = null
  }else{
    for(var i = countUpNum; i<= finalNum; i+=countUpNum) {
    finalArray.push(i);
  }}
  
  return finalArray;
};
