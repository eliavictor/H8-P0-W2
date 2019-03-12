function hasUppercase(input){
  for (var i = 0; i <= input.length; i++){
    if (input[i] === input[i].toUpperCase()){
      return true
    }
    }
  }

function hasLowerCase(input){
  for (var i = 0; i <= input.length; i++){
    if (input[i] === input[i].toLowerCase()){
      return true
    }
  }
}

function isLongEnough(input){
  return input.length >= 8;
}

function hasSpecialChar(input){
  var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length;i++){
    for (var j = 0; j < specialChar.length; j++){
      if(input[i] === specialChar[j]){
        return true;
      }
    }
  }
}

function isPasswordValid(input){
  console.log(hasUppercase(input),isLongEnough(input),hasSpecialChar(input),hasLowerCase(input))
  if (hasUppercase(input) === true && isLongEnough(input) === true && hasSpecialChar(input) === true && hasLowerCase(input) === true){
    console.log('Password is Valid')
  } else {
    console.log('Password is not Valid')
  }
  
}

isPasswordValid('a!Bcd1234')

