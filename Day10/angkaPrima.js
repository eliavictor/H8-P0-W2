function angkaPrima(angka) {
var output;
	if (angka === 2 || angka === 3 || angka === 5|| angka === 7|| angka === 11 || angka === 13 || angka === 17 || angka === 23){
  		output = true
  	} else 
  	if (angka % 2 === 0||angka % 3 === 0||angka % 5 === 0){
  			output = false
  		}
  return output
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false