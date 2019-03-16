/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/

/*

Start
Input Array Scores
Create variable lulus equals to 0, and output equals to 0
If Array scores length equals to 0, then output 'Data Kosong'
For i equals to 0, until Array scores length, i plus 1
if  scores bigger and equal than 75, add counter plus 1
If counter equals to 0, output 'Tidak ada yang lulus', 
Else if counter not equals to Array scores length ouput counter plus ' orang lulus',
Else output 'Semua orang lulus'
Return output
End

*/

function graduatesCount (scores) {
var lulus = 0;
var output = '';
scores.sort(function(a, b){return a - b});
if (scores.length === 0) {
		output = 'Data kosong'
	}
for (var i = 0; i < scores.length; i++) {

	if (scores[i] >= 75) {
		lulus++
	}
	
	if (lulus === 0) {
			output = 'Tidak ada yang lulus';
		} else  if (lulus !== scores.length){
			output = lulus + ' orang lulus'
		} else {
			output = 'Semua orang lulus'
		}
}

return output
}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
