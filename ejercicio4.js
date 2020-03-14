var vowels = ["a", "e", "i", "o", "u"];

function vowelCounter(str) {
  var vCounter = 0;

  for (var i of str.toLowerCase()){
      //console.log(i);
      if (vowels.includes(i)) {
         vCounter++;
      }
  }
  console.log(vCounter);
  return vCounter;
}

vowelCounter('Mis gatos estan esterilizados');