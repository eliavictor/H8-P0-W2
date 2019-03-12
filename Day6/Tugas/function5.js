function xo(str) {
  var i = 0;
  var cntX = 0;
  var cntO = 0;
  var result = '';
  
  var splitStr = str.split('');

  while (i < str.length){
  	if (str.charAt(i) === 'x'){
  		cntX++;
  	} else if (str.charAt(i) === 'o'){
  		cntO++;
  	}
  	i++;
  }

  if (cntX == cntO){
	result = 'true';
  } else {
  	result = 'false';
  }

  return result

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true