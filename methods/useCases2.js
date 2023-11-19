let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
// .split creates an array from a string
//  The .split() method separates the story string by the space character (' ') and stores each word as an element of the array.
let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

// if (word) as a parameter is a function =  callback function.

//console.log(storyWords) check the starting array
// counts words
let count = 0;
storyWords.forEach((word) => {
  count++;
});
console.log(count);

// creates an array without unnecessaryWord
// Set  (word) as a parameter of .filter()‘s callback function.
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});
//The strict inequality operator (!==) can be used to check if two values are not equal.

//Be sure to use the return keyword in the body of the callback function to return the necessary words!

// replacing words
//
// Set  (word) as a parameter of .map()‘s callback function.
storyWords = storyWords.map((word) => {
  // conditionToCheck ? expressionIfTrue : expressionIfFalse
  return word === misspelledWord ? "beautiful" : word;
});
// apply the .findIndex() method to storyWords to find the index of the bad word.
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
//  log badWordIndex to the console.
console.log(badWordIndex);
// Access the element inside the storyWords array that has the index of badWordIndex
// reassign to really
storyWords[78] = "really";

// make sure every word in the story is 10 characters or less using the .every() method.
// logs true or false
let lengthCheck = storyWords.every((word) => {
  return word.length < 10;
});
console.log(lengthCheck);

// check which word has more than 10 letters
storyWords.forEach((word) => {
  word.length > 10 && console.log(word);
});

// To change the storyWords array back into a readable string, we can invoke the .join() method on storyWords.
console.log(storyWords.join(" "));
