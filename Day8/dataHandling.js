var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];
var i = 0;

while (i < input.length){
	var j = 0;  
	while (j < input[i].length - 1){
		console.log('')
		console.log('Nomor ID: ' + input[i][j])
		j++
		console.log('Nama Lengkap: ' + input[i][j])
		j++
		var k = j + 1;
		console.log('TTL: ' + input[i][j] + ' ' + input[i][k])
		j = j + 2;
		console.log('Hobi: ' + input[i][j])
	}
	i++
}
