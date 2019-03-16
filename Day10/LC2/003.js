/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

function arrayMerge (firstData, secondData) {
var output = [];
var j = 0;
var k = 0;
var l = 0;
var tampung = '';
var tampung2= '';
var tampung3= '';

for (var i = 0; i < firstData.length; i++) {
  output.push(firstData[i])
}

while (j < secondData.length){
    if (secondData[j] !== output[k]) {
      if (secondData[j] !== output[k+1]) {
        if (secondData[j] !== output[k+2]) {
          output.push(secondData[j])
        }
      }
    } 
    else {
      k++
    }
  j++
}
return output
}

// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// // ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// // ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// // ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// // ['hwoarang']

console.log(arrayMerge([], []));
// // []

 // while (k < secondData.length){
  //   while (j < output.length){
  //     var tampung = output[j];
  //     if (tampung === secondData[k]) {
  //       console.log('ini adalah tampung = ' + output[k])
  //       console.log('ini adalah secondData = ' + secondData[j])
  //       k++
  //     // } else 
  //     //   {
  //     //     output.push(tampung)
  //     } 
  //   }
  //   j++

// return output

// for (var j = 0; j < secondData.length; j++) {
//   tampung.push(secondData[j])
//     if (tampung[j] === output[j]) {
//       break;
//     } else {
//       output.push(tampung[j])
//     }
// }
// return output.length
// }

// while (j < secondData.length){
// tampung = secondData[j];
//     while (k < output.length){
//     tampung2 = output[k]
//       // if (tampung !== tampung2){
//         k++ 
//       tampung3 = 'secondData = ' + tampung + ' output = ' + tampung2;
//       console.log(tampung3)
//       j++
//       //}
//     }
// } 
  // console.log(j)