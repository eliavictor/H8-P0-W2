var userChoice = 'rock';
var computerChoice;
var temp;
var temp2;

userChoice = userChoice.toLowerCase();


function getComputerChoice(){
  randomNumber = Math.floor(Math.random()*3);

  switch(randomNumber)
    {
      case 0: computerChoice = 'rock'; break;
      case 1 : computerChoice = 'paper'; break;
      case 2 : computerChoice = 'scissors'; break;
    }
//console.log(computerChoice);
}

(getComputerChoice());

function determineWinner(userChoice, computerChoice){
if(userChoice =='bomb')
  {
    temp2 ='User Win';
  }else if(userChoice =='rock'){//user input rock
  if(computerChoice =='paper')
    {
      temp2 ='Computer Win';
    }else if(computerChoice =='rock')
  {
    temp2 ='Draw';
  }else if(computerChoice =='scissors')
    {
      temp2 ='User Win';
    }
}else if(userChoice =='paper')//user input paper
    {
      if(computerChoice =='paper')
    {
      temp2 ='Draw';
    }else if(computerChoice =='rock')
  {
    temp2 ='User Win';
  }else if(computerChoice =='scissors')
    {
      temp2 ='Computer Win';
    }
}else if(userChoice == 'scissors')//user input scissor
 {
      if(computerChoice =='paper')
    {
      temp2 ='User Win';
    }else if(computerChoice =='rock')
  {
    temp2 ='Computer Win';
  }else if(computerChoice =='scissors')
    {
      temp2 ='Draw';
    }
 }console.log(temp2);
}
//console.log(temp2);

function playGame()
{
 // var userChoice = userInput;
   // var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  determineWinner(userChoice, computerChoice);
}

playGame();