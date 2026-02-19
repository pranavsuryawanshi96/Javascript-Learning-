// const score = {
//   wins: 0,
//   losses: 0,
//   ties: 0,
// };
let score = JSON.parse(localStorage.getItem("score"));
// instead of null we can use also !
// "score" || {
//   wins: 0,
//   losses: 0,
//   ties: 0,
// };

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
//   document.querySelector(".js-score").innerHTML =
//     `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
//  instead  of write this  we can use fn
updateScoreElement();
//second approach to keep object
console.log(JSON.parse(localStorage.getItem("score")));

// by doing the addEventListener we can call the playGame function and pass the player move as an argument
document.querySelector(".js-rock-btn").addEventListener("click", () => {
  playGame("Rock");
});

document.querySelector(".js-paper-btn").addEventListener("click", () => {
  playGame("Paper");
});
document.querySelector(".js-scissors-btn").addEventListener("click", () => {
  playGame("Scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "s") {
    playGame("Scissors");
  }
});
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === computerMove) {
    result = "Tie";
  } else if (playerMove === "Rock") {
    if (computerMove === "Scissors") {
      result = "You win";
    } else {
      result = "You lose";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win";
    } else {
      result = "You lose";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Paper") {
      result = "You win";
    } else {
      result = "You lose";
    }
  }
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
      <img src="../images/${playerMove}-emoji.png" class="move-icon" />
      <img src="../images/${computerMove}-emoji.png" class="move-icon" />
      Computer`;
}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }

  return computerMove;
}
let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }
}

function stopAutoPlay() {
  clearInterval(intervalID);
  isAutoPlaying = false;
}
