function pasanganTerbesar(num) {
	var strNum = String(num);
	var i = 0;
	var j = 1;
	var splitedStr = strNum.split('');
	var max = Math.max.apply(Math, splitedStr);
	var maxPlus1 = '';

	while(i < splitedStr.length){
		if (max == splitedStr[i]){
			j = i + 1
			maxPlus1 = maxPlus1 + splitedStr[j];
		}
		i++
	}

	var max2 = maxPlus1.split('')
	max2 = Math.max.apply(Math, max2);
  	var output = max.toString() + max2.toString()

  	return output;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(779187892)); // 99