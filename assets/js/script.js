
 //Declaring constants for DOM elements

const choice = ["rock", "paper", "scissor", "lizard", "spock"];
const computerImg = document.getElementById("computer-image");
const playerImg = document.getElementById("player-image");
const messages = document.getElementById("messages");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const buttons = document.getElementById("control");


 // Rules for winning combinations
    const rules = {
      rock: { beats: ['scissors', 'lizard'] },
      paper: { beats: ['rock', 'spock'] },
      scissors: { beats: ['paper', 'lizard'] },
      lizard: { beats: ['spock', 'paper'] },
      spock: { beats: ['scissors', 'rock'] }
    };


