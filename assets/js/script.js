//Declaring constants for DOM elements

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const computerImg = document.getElementById("computer-image");
const playerImg = document.getElementById("player-image");
const messages = document.getElementById("messages");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const buttons = document.getElementsByClassName("control");
let playerCount=0;
let computerCount=0;
// Rules for winning combinations
const rules = {
  rock: { beats: ["scissors", "lizard"] },
  paper: { beats: ["rock", "spock"] },
  scissors: { beats: ["paper", "lizard"] },
  lizard: { beats: ["spock", "paper"] },
  spock: { beats: ["scissors", "rock"] },
};

//Add event listener to all buttons
for (let btn of buttons) {
  btn.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-choice");
    console.log(playerChoice);
    gamePlay(playerChoice);
  });
}

/*Function that update player and computer images depending on their choice (computer is a random choice),
 *call a determineWinner function with the selected choices and assign the result of the winner to "result" variable.
 *Then another function is called for update the scores.*/
function gamePlay(playerChoice) {
  //console.log(playerImg);
  //console.log(computerImg);
  playerImg.src = `assets/images/${choices[playerChoice]}.png`;
  playerImg.alt = choices[playerChoice];

  let computerChoice = Math.floor(Math.random() * 5);

  computerImg.src = `assets/images/${choices[computerChoice]}.png`;
  computerImg.alt = choices[computerChoice];

  let result = determineWinner(choices[playerChoice], choices[computerChoice]);
  updateScore(result);
  displayResults(playerChoice,computerChoice,result);
}

// Determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "tie";
  }

  /*rules[player] is an object defined ealier that maps each choice to the option it brats.
   *For each choice, the object have a beats property with list of choice it defeats.
   *e.g[scissor, lizard] for rock. All we need to do is check if rock is contained in that list*/
  if (rules[player].beats.indexOf(computer) !== -1) {
    return "player";
  }
  return "computer";
}
console.log(playerScore);

function updateScore(result) {
  
  if (result === 'player') {
        playerScore.innerText = ++playerCount;
       
      } else if (result === 'computer') {
      computerScore.innerText= ++computerCount;
      }
   
}

function displayResults(player,computer,result){
console.log(messages)
  if(result==='tie'){
    messages.innerText = `It's a tie! Both chose ${choices[player]}`;
  }
  else if(result==='player'){
    messages.innerText = `You win! "${choices[player].toUpperCase()}" beats "${choices[computer].toUpperCase()}".`
  }
  else {
     messages.innerText = `You lost! "${choices[computer].toUpperCase()}" beats "${choices[player].toUpperCase()}".`
  }

}