/*
program that will register runners for the race and give them instructions on race day.

first line assigns a random race number with Math.floor(Math.random() * 1000).
second line would check if he is late or not.
in third line assign number, that would decide in which race person would compete

next is a control flow statement that checks whether the runner is an adult AND registered early, if true, adds 1000, because adult numbers start from 1000. For people under 18 numbers are under 1000.

then a separate control flow statement below the first that checks age and registration time to determine race time
else prints out text for 18 year olds, doesnt matter whether early or not

prints it together with racenumber
*/

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
} else if (!early && age > 18) {
  console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
} else {
  console.log(`Please approach the registration desk, thanks!`);
}
