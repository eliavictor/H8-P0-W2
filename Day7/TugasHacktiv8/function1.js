//Function1.js

//Tugas 1
console.log('---Hasil Tugas 1---')
function shoutOut(){
	var halo = 'Halo Function!'
	return halo
}
console.log(shoutOut())

//Tugas 2
console.log('---Hasil Tugas 2---')
var num1 = 5;
var num2 = 6;

function calculateMultiply(num1,num2){
	return num1 * num2
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log('Hasil Perkalian = ' + hasilPerkalian);

//Tugas 3
console.log('---Hasil Tugas 3---')
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name,age,address,hobby){
	return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"