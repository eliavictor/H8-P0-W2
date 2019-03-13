var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling(input){
	var output1 = input.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
	var output2 = '';
	var output3 = '';
	var output4 = '';

	var outSplit = input[3].split('/');
	var month = outSplit[1];

	output3 = outSplit.join('-');
	output4 = input[1].toString();

	switch (month){
		case '01':
			output2 = " Januari "
		break;
		case '02':
			output2 = " Pebruari "
		break;
		case '03':
			output2 = " Maret "
		break;
		case '04':
			output2 = " April "
		break;
		case '05':
			output2 = " Mei "
		break;
		case '06':
			output2 = " Juni "
		break;
		case '07':
			output2 = " Juli "
		break;
		case '08':
			output2 = " Agustus "
		break;
		case '09':
			output2 = " September "
		break;
		case '10':
			output2 = " Oktober "
		break;
		case '11':
			output2 = " November "
		break;
		case '12':
			output2 = " Desember "
		break;
	}

	console.log(input);
	console.log(output2);
	console.log(outSplit.sort(function(a, b){return b-a})); //number(b)>a
	console.log(output3);
	console.log(output4.slice(0,15))
}

dataHandling(input);