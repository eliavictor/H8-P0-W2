var input = 'Turpenntine and turtles';
var vowels = ['a','i','u','e','o','A','I','U','E','O'];
var resultArray = [];

for (var i = 0; i < input.length; i++){
  for (var j = 0; j < vowels.length; j++){
    if (input[i]===vowels[j]){
    resultArray.push(input[i]);
    }
  }
  if (input[i]==='e'||input[i]==='u'){
    resultArray.push(input[i]);
  }
}


console.log(resultArray.join('').toUpperCase());