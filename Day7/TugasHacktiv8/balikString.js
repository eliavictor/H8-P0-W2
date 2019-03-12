var kata = 'Hello World!'
var tampung = ''
for (var i = kata.length-1; i >= 0; i--) {
	tampung = tampung + kata[i];
}
console.log(tampung);