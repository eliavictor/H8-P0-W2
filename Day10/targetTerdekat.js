function targetTerdekat(arr) {
	var awal = 0
	var output = [];
	var last = [];

	if(!arr.includes('x')){
		return 0;
	}
	else {
	  	for (var i = 0; i < arr.length; i++) {
	  	switch(arr[i]) {
			case 'o':
				awal = i;
				break;
			case 'x':
			  	output.push(i)
			  	break;
			}
		}
	}

	for (var j = 0; j < output.length; j++) {
		var hsl = output[j] - awal;
		last.push(Math.abs(hsl));
	}

  var a = last.sort(function(a, b){return a-b})[0];
  return a

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2