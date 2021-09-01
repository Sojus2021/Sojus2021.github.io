///// * BURNING BUSH - A BIBLE TRIVIA GAME * /////

// WHAT THE PLAYERS WILL DO //

// 1. Hit the 'next' button to get the game started.
// 2. Read the question. Select their answer. Answer selection will turn the page.
// 3. Keep going till they've answered the 24th question.
// ** What should happen if they abandon the game midway? Should it time out? **
// 4. Players who score >= 20 will get an award - call it the 'Badge of Honor'. Those who get 24/24 will get the 'Shield of Faith'.
// 5. All players will be congratulated for getting to the 24th question. They will see a 'Game Over' message and a 'reset' button, which would allow them to play another round.

// WHAT THE COMPUTER WILL DO //

// 1. The trivia questions and answers are contained in an array of objects. Array methods will be used to manipulate the array.

// *METHODS/TECHNIQUES*
// correctAnswer.forEach or for loop to iterate?

// 2. The 'next' button will be connected to an Event Listener (which, predictably, will 'listen' for the player's click). This will load and turn the pages.

// *METHODS/TECHNIQUES*
// addEventListener

// 3. The score will increment by one point for each correct answer. The scoreboard will be set to zero at the start of each game.

//*METHODS/TECHNIQUES*
// Function with Boolean: if userClick === correctAnswer { score ++}

// 4. Answering all 24 questions will trigger the "game over" and "thanks for playing" messages.

//*METHOS/TECHNIQUES*
// Function with Boolean: if userClick === 24 { message alerts = "game over", and "thanks for playing"}.

// 5. The scoreboard getting to 20 will trigger the Badge of Honor prize.

//*METHODS/TECHNIQUES*
// Function with Boolean: if score === 20 {message alert = "Congratulations! You have won the Badge of Honor!"}

// 6. The scoreboard getting to 24 will trigger the Shield of Faith prize.

//*METHODS/TECHNIQUES*
// Function with Boolean: if score === 24 {message alert = "Congratulations! You have earned the Shield of Faith!"}

// 7. There will be no functionality for showing players the correct answers for the questions they missed.

// 8. "Game over" page will also feature a 'reset' button.

//*METHODS/TECHNIQUES*
// addEventListener - take player back to first page.
// ?? - reset scoreboard to 0.

//** STYLING **//

// MODAL, use Flexbox.
