"use strict";

const again = document.querySelector(".again");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score__number");
const highestScore = document.querySelector(".highest-score__number");
const guess = document.querySelector(".guess-number");
const check = document.querySelector(".check");

const messageInitialValue = message.textContent;
const messageInitialColor = message.style.color;
const numberInitialColor = number.style.color;
const scoreInititalValue = Number(score.textContent);

let scoreNumber = scoreInititalValue;

const randomNumber = function () {
  return Math.floor(Math.random() * 100 + 1);
};

let takenNumber = randomNumber();

check.addEventListener("click", function () {
  if (scoreNumber > 0) {
    let guessNumber = guess.value;
    if (guessNumber === "") {
      message.textContent = "اول باید یک عدد وارد کنی";
    } else {
      guessNumber = Number(guessNumber);
      scoreNumber--;
      score.textContent = scoreNumber;
      if (guessNumber !== takenNumber) {
        if (scoreNumber > 0) {
          message.textContent =
            guessNumber > takenNumber
              ? "عدد من از این کوچکتره"
              : "عدد من از این بزرگتره";
        } else if (scoreNumber === 0) {
          message.textContent = "متاسفانه نتونستی عدد رو حدس بزنی";
          number.textContent = takenNumber;
          message.style.color = "#e03131";
          number.style.color = "#e03131";
        }
      } else {
        message.textContent = "آفرین درست حدس زدی";
        number.textContent = takenNumber;
        message.style.color = "#2f9e44";
        number.style.color = "#2f9e44";
        const highestScoreNumber = Number(highestScore.textContent);
        if (scoreNumber > highestScoreNumber) {
          highestScore.textContent = scoreNumber;
        }
        scoreNumber = 0;
      }
    }
  }
});

again.addEventListener("click", function () {
  number.textContent = "؟";
  number.style.color = numberInitialColor;
  message.textContent = "حدس بزن";
  message.style.color = messageInitialColor;
  guess.value = "";
  score.textContent = scoreInititalValue;
  scoreNumber = scoreInititalValue;
  takenNumber = randomNumber();
});
