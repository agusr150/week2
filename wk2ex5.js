// Soal 1 : Let's Form a Sentences
console.log('--No 1--')

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh)


// Soal 2 : Index Accessing - 1
console.log('--No 2--')

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = 'JavaScript'; // do your own!
var thirdWord = 'is'; // do your own!
var fourthWord = 'so'; // do your own!
var fifthWord = 'cool'; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//Soal 3 : Breaking Sentence (Again) using Substring
console.log('--No 3--')

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4,14); // do your own!
var thirdWord3 = word.substring(15,17); // do your own!
var fourthWord3 = word.substring(18,20); // do your own!
var fifthWord3 = word.substring(21,25); // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


//Soal 4 : Breaking Sentence (yet Again) and Count Each Length
console.log('--No 4--')

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4,14); // do your own!
var thirdWord4 = word.substring(15,17); // do your own!
var fourthWord4 = word.substring(18,20); // do your own!
var fifthWord4 = word.substring(21,25); // do your own!

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
console.log(word4[4])