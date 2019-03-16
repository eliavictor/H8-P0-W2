function groupAnimals(animals) {
  var output = [[],[],[],[]];

  for (var i = 0; i < animals.length; i++) {
  	  	switch(animals[i][0]) {
	  case 'a':
	    output[0].push(animals[i]);
	    break;
	  case 'c':
	    output[1].push(animals[i]);
	    break;
	  case 'k':
	    output[2].push(animals[i]);
	    break;
	  case 'u':
	    output[3].push(animals[i]);
	    break;
	}
  }

  if (output.length != 3){

  }

  // output[0].push(animals)

  return  output
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]