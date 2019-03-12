/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

var height = 7;
var z = 1;
var y = 1;
var ganjil = "*";
var genap = "#";

for (z; z <= height; z++) {
  for (y = z; y <= height; y++) {
    var a = '';
      for (var i = 1; i <= height; i++) {
      if (z % 2 == 0) {
        a += genap;
      } else {
        a += ganjil;
      }
    }
  }
console.log(z + " " + a);
}


