let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
// Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();
//You can check your work by logging the .length of the array.
// At this point, the length should be 1 less than the original length.
console.log(secretMessage.length);
//Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push("to", "Program");
console.log(secretMessage);
// Change the word easily to the word right by accessing the index and replacing it.
secretMessage[7] = "right";
console.log(secretMessage);
// Use an array method to remove the first string of the array.
secretMessage.shift();
console.log(secretMessage);
// Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift("Programming");
console.log(secretMessage);
//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
// array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6, 5, "know, ");
console.log(secretMessage);
// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));

// After all this prints: Programming is not about what you know,  it is about what you can figure out. -2015, Chris Pine, Learn to Program
