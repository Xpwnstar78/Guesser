function letterGuesser() {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let randomNumber = Math.floor(Math.random() * 25);
  let playerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  let guesser = prompt(`Your letter is ${playerChoice}. Guess ${playerChoice}'s index number.`);
  if (guesser == randomNumber) {
    alert("You definitely know the alphabet!");
  } else {
    alert(`incorrect, you will have to re-learn the abc's. The index of ${playerChoice} is actually ${randomNumber}`);
  }
}
letterGuesser()