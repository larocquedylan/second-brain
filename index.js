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
    if (s.length = 0 ){
        return ["", 0]
    } else {
        // function sortStr(str1, str2){
        //     return str2.length - str1.length || s.indexOf(str1) - s.indexOf(str2)
        // }
        function sorted(arr){
            for (let i = 0; i < arr.length; i++){
                for (let j = i; j < arr.length; i++){
                    if (arr[j].length > arr[j+1].length){
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
                console.log(arr);
                return arr
            }
    
        }
        
        // let match = s.match(/(\w)\1*/g).sort(sortStr);
        let match = s.match(/(\w)\1*/g);
        console.log(match);

        sorted(match);
    
        // let char = match[0];
        // let charLetter = char[0];
        // let charLength = char.length;
    
        // return [charLetter, charLength]
    }
}

console.log(longestRepetition('bbbaaabaaaa'));
// console.log(longestRepetition("aaaabb"));
// console.log(longestRepetition("aabb"));