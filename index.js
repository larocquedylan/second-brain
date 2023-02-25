const { measureExecutionTime } = require('./performance-test');

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.


// function filterStrForLetter(str, letter){
//     let fltr = str.split("").filter(a => a === letter).length;
//     return fltr;
// }   

// filterStrForLetter("hello", "o");
// filterStrForLetter("hello", "l");
// filterStrForLetter("", "Z");


/// 
// For a given string s find the character c (or C) with longest consecutive repetition and return: [c, l]

// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
// For empty string return: ["", 0]


// function longestRepetition(s) {
//     if (s.length === 0 ){
//         return ["", 0]
//     } else {
//         let match = s.match(/(\w)\1*/g);

//         function sorted(arr){
//             let noSwaps;
//             for (let i = arr.length; i > 0; i--){
//                 noSwaps=true;
//                 for (let j = 0; j < i - 1 ; j++){
//                     if (arr[j].length > arr[j+1].length){
//                         let temp = arr[j];
//                         arr[j] = arr[j+1];
//                         arr[j+1] = temp;
//                         noSwaps = false;
//                     }
//                 }
//                 if(noSwaps) break; 
//             }
//             return arr ;
//         }
        
//         sorted(match);
    
//         let char = match[match.length - 1];
//         let charLetter = char[0];
//         let charLength = char.length;
    
//         return [charLetter, charLength]
//     }
// }


// function longestRepetitionBest(s) {
//     if (s.length === 0 ){
//         return ["", 0]
//     } else {       
//         function sortStr(str1, str2){
//             return str2.length - str1.length || s.indexOf(str1) - s.indexOf(str2)
//         }

//         let match = s.match(/(\w)\1*/g).sort(sortStr);
//         console.log(match);
    
//         let char = match[0];
//         let charLetter = char[0];
//         let charLength = char.length;
    
//         return [charLetter, charLength]
//     }
// }

// console.log(longestRepetitionBest('bbbaaabaaaa'));
// console.log(longestRepetition("aaaabb"));
// console.log(longestRepetition("aabb"));



// write a function that output a structure of # where each row number is equal the number of # printed.

// function pyramid() {
//     for(let i =0; i < 7; i++){
//         console.log(("#".repeat(i)));
//     }
// }
// pyramid();

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// let size = 8;
// let board = "";

// for (let row = 0; row < size; row++) {
//   for (let col = 0; col < size; col++) {
//     if ((row + col) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);



// class Dog {
//     constructor(name, breed, weight) {
//         this.name = name;
//         this.breed = breed;
//         this.weight = weight;
//     }
// }
// class ShowDog extends Dog {
//     constructor(name, breed, weight, handler) {
//         super(name, breed, weight);
//         this.handler = handler;
//     }
// }

// const fido = new ShowDog("Fido", "Mixed", 38, "Bob");
// console.log("🚀 ~ file: index.js:150 ~ fido:", fido);

// ======================
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// function capitalize(s,arr){ 
//     let str = s.split("");
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < str.length){
//             str[arr[i]] = str[arr[i]].toUpperCase();
//         }
//     }
//     return str.join("");
// }

// const capitalize = (string, array) => 
//   string.replace(/./g, (char, index) =>
//     array.includes(index) ? char.toUpperCase() : char
//   );
  
// ======================

// arr type is an array of integers
// function filterList(arr){
//   // create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//   return numbersOnly = arr.filter(element => typeof element === "number");
// }

// console.log(filterList([1,2,'aasf','1','123',123]))

// ======================
function isPangramA(string){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let str = string.toLowerCase();
    let count=0;
    for (let i = 0; i < letters.length; i++){
      if (str.includes(letters[i])){
        count++;
      }
    }
    if (count === 26){
      return true;
    } else{
      return false;
    }
}

function isPangramB(string){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let str = string.toLowerCase();
    for (let i = 0; i < letters.length; i++){
      if (!str.includes(letters[i])){
        return false;
      }
    }
    return true;
}

function isPangramC(string){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let str = string.toLowerCase();
    return letters.split("").every(letter => str.includes(letter));
}

function isPangramD(string){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let str = string.toLowerCase();
    return letters.split("").every(letter => str.indexOf(letter) !== -1);
}

const input = "The quick brown fox jumps over the lazy dog";
measureExecutionTime(isPangramA, input);
measureExecutionTime(isPangramB, input);
measureExecutionTime(isPangramC, input);
measureExecutionTime(isPangramD, input);


