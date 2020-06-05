const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
// Global Variables Assigned Here
let answer

// Promise Function
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
// Return Random Number Funciton
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// Return Mid Value Function (whole number)
function midValue(min, max) {
  return Math.floor((min + max) / 2)
}
// Start Game Function
start()
async function start() {
  console.log('Welcome to my Guessing Game!')
  let gameChoice = await ask('To Start Please Choose either Computer Guesses or Human Guesses\n')
  gameChoice = gameChoice.trim().toLowerCase()
  //console.log('You Have Chosen ' + gameChoice + '\n')
  if (gameChoice == 'computer guesses') {
    computerGuesses()
  }
  if (gameChoice == 'human guesses') {
    humanGuesses()
  }
}
// Computer Guess Game Function
async function computerGuesses() {
  console.log('\nYou have now entered Mode: Computer Guesses\n' + 'To play this game please choose a numerical range for the game(ex. 1 to 100)')
  let userMinRange = parseInt(await ask('What is your desired low end range?\n'));
  let userMaxRange = parseInt(await ask('What is your desired top end range?\n'));
  console.log('You entered: ' + userMinRange + ' to ' + userMaxRange)
  let computerGenNum = randomNum(userMinRange, userMaxRange)
  console.log("Please choose your secret number within your specifed range now and remember it")
  let answer = await ask('Is your number ' + computerGenNum + ' (yes / no)' + '?\n')
  
  while (answer !== 'yes') {
    let highLow = await ask('Is your number lower or higher or correct?\n'); {
      if (highLow.toLowerCase() === 'higher') {
        userMinRange = computerGenNum + 1
        computerGenNum = midValue(userMinRange, userMaxRange)
        console.log('My next guess is ' + computerGenNum + '\n')
      } else if (highLow.toLowerCase() === 'lower') {
        userMaxRange = computerGenNum - 1
        computerGenNum = midValue(userMinRange, userMaxRange)
        console.log('My next guess is ' + computerGenNum + '\n')
      } else if (highLow.toLowerCase() === 'correct') {
        console.log('I have Won!\n' + 'Skynet Activated')
        humanGuesses()
      } else {
        console.log('Unrecognized input, please start over')
        process.ext()
      }
      if (userMaxRange < userMinRange) {
        console.log('Cheater! Start Over')
        process.exit()
      }
    }
  } if (answer.toLowerCase() === 'yes') {
    console.log('I have Won!\n' + 'Skynet Activated')
    humanGuesses()
  }
}
// Human Guess Game Function
async function humanGuesses() {
  console.log('\nYou have now entered Mode: Human Guesses\n' + 'To play this game please choose a numerical range for the game(ex. 1 to 100)')
  let userMinRange = parseInt(await ask('What is your desired low end range?\n'));
  let userMaxRange = parseInt(await ask('What is your desired top end range?\n'));
  console.log('You entered: ' + userMinRange + ' to ' + userMaxRange)
  let computerGenNum = randomNum(userMinRange, userMaxRange)
  console.log("I have chosen a secret number within that range for you to guess,")

  while (answer !== computerGenNum) {
    let humanAnsw = await ask('Please make a guess\n'); {
      if (humanAnsw < computerGenNum) {
        console.log('My mumber is higher\n')
      } else if (humanAnsw > computerGenNum) {
        console.log('My number is lower\n')
      }
    } if (humanAnsw == computerGenNum) {
      console.log('You have Won!' + '\n' + 'Computer Termnated\n' + 'Skynet Destoryed\n')
      computerGuesses()
    }
  }
}