function angkaPalindrome(num) {
  
  while (true) {
    num++;
    var strNum = String(num);
 	var strRev = strNum.split('').reverse().join('');
    if (strNum === strRev) {
      return Number(strNum);
    }
  }
  return num
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001