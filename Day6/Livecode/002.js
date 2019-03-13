/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'dimitri', output: 'Masuk group pertama'
- `name` = 'icha', output: 'Masuk group kedua'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'

*/

var name = 'Stupid'; // Isi nama disini

// Code disini
var FL = name.charAt(0)
if (FL == 'a' || FL == 'A'|| FL == 'b'|| FL == 'B'|| FL == 'c'|| FL == 'C'|| FL == 'd'|| FL == 'D') {
	console.log('Masuk group pertama')
} else if (FL == 'e' || FL == 'E'|| FL == 'f'|| FL == 'F'|| FL == 'g'|| FL == 'G'|| FL == 'h'|| FL == 'H') {
	console.log('Masuk group kedua')
} else {
	console.log('Masuk group terakhir')
}