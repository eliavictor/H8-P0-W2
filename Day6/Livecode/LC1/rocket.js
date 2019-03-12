/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/


var virusCode = '**#*##' // 50% *, 50% #
// var virusCode = '**######'// 75% #, 25% *
// var virusCode = '**##@' // 40% *, 40% #, 20% @
// var virusCode = '@' // 100% @
// var virusCode = '#$*@' // 25% #, 25% $, 25% *, 25% @
var loop = 0;
var char = '';
var result = '';
var length = virusCode.length;

var char1= '*';
var char2= '#';
var char3= '$';
var char4= '@';
var cntChar = 0;
var cntChar1 = 0;
var cntChar2 = 0;
var cntChar3 = 0;
var count=0;
var count1=0;
var count2=0;
var count3=0;
var a = '';

while (loop <= length){
   char = virusCode.charAt(loop);
   console.log(char)
   if (char == char1){
   	cntChar++
   } else if (char == char2){
   	cntChar1++
   } else if (char == char3){
   	cntChar2++
   } else if (char == char4){
   	cntChar3++
   }
loop++;
}

	count = cntChar/length*100
	count1 = cntChar1/length*100
	count2 = cntChar2/length*100
	count3 = cntChar3/length*100

	result = char1 + ' = ' + count + '%, ' + char2 + ' = ' + count1 + '%, ' + char3 + ' = ' + count2 + '%, ' + char4 + ' = ' + count3 + '% '

// if (char1 == 0||char2 == 0||char3 == 0||char4 == 0){
	
// }
console.log(result)