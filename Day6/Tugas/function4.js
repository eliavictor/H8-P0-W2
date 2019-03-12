function konversiMenit(mnt) {
  // you can only write your code here!
  var jam = mnt/60;
  var mnt = mnt%60;
  
  if (mnt < 10){
  	mnt = "0" + mnt;
  }

  return Math.floor(jam) + ':' + mnt;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00