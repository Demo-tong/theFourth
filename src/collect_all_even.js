function collect_same_elements(collection_a, object_b) {
  var outputArray = [];
  var newArray = [];

  for (var i = 0; i < collection_a.length; ++i) {
    newArray[i] = collection_a[i].key;
  }

  var myObject = object_b.value;
  outputArray = collectEqualValue(newArray, myObject);

  return outputArray;
}

function collectEqualValue(newArray, myObject){
  var newOutput = [];

  for(var i = 0; i < newArray.length; ++i){
    for(var j = 0; j < myObject.length; ++j){
      if(newArray[i] === myObject[j]){

        newOutput.push(newArray[i]);
      }
    }
  }

  return newOutput;
}

module.exports = collect_same_elements;
