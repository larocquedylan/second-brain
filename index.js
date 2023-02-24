// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.


function filterStrForLetter(str, letter){
    let fltr = str.split("").filter(a => a === letter).length;
    return fltr;
}   

// filterStrForLetter("hello", "o");
// filterStrForLetter("hello", "l");
// filterStrForLetter("", "Z");


/// 
// For a given string s find the character c (or C) with longest consecutive repetition and return: [c, l]

// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
// For empty string return: ["", 0]


function longestRepetition(s) {
    if (s.length === 0 ){
        return ["", 0]
    } else {
        let match = s.match(/(\w)\1*/g);

        function sorted(arr){
            let noSwaps;
            for (let i = arr.length; i > 0; i--){
                noSwaps=true;
                for (let j = 0; j < i - 1 ; j++){
                    if (arr[j].length > arr[j+1].length){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                        noSwaps = false;
                    }
                }
                if(noSwaps) break; 
            }
            return arr ;
        }
        
        sorted(match);
    
        let char = match[match.length - 1];
        let charLetter = char[0];
        let charLength = char.length;
    
        return [charLetter, charLength]
    }
}


function longestRepetitionBest(s) {
    if (s.length === 0 ){
        return ["", 0]
    } else {       
        function sortStr(str1, str2){
            return str2.length - str1.length || s.indexOf(str1) - s.indexOf(str2)
        }

        let match = s.match(/(\w)\1*/g).sort(sortStr);
        console.log(match);
    
        let char = match[0];
        let charLetter = char[0];
        let charLength = char.length;
    
        return [charLetter, charLength]
    }
}

// console.log(longestRepetitionBest('bbbaaabaaaa'));
// console.log(longestRepetition("aaaabb"));
// console.log(longestRepetition("aabb"));



// write a function that output a structure of # where each row number is equal the number of # printed.

function pyramid() {
    for(let i =0; i < 7; i++){
        console.log(("#".repeat(i)));
    }
}
pyramid();

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

let size = 8;
let board = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);