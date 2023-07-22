/*
Variable randomNumber = Math.floor(Math.random() * 8) uses 2 methods from the Math library and generates a random number from 0 to 8.

If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on.

*/



let userName = "John";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
let userQuestion = "Will it rain today?";
console.log(`${userName} asks: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
let userName = "John";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
let userQuestion = "Will it rain today?";
console.log(`${userName} asks: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Unknown";
    break;
};
console.log(`The Magic 8 Ball says: ${eightBall}`);

