# For a given string s find the character c (or C) with longest consecutive repetition and return: [c, l]

where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return: ["", 0]

Splitting this string is where my head initially goes.The split method wants (separator, limit). How do I write the separator using methods. I am used to for loops and the reason I like them, is because it is very easy for me to think of the array and the index of the array that you establish using initialization. The difference between the number the letter is in a sequence and the letter is obvious to me. Think both in and out of the pocket. I haven't quite managed the .method where i am a bit unsure of how it is iterating in visual sense.

Making a for loop visualizer?

The separator I want should be agnostic with respect to the character it gets i.e. "aa" or "bb". how can i specify it to be any and all combinations?

I want the function to split after change in character. for instance
"abcdefggabbcddefff"
this should split into this array
['a', 'b', 'c', 'd', 'e', 'f', 'gg', 'a', 'b', 'c', 'dd', 'e', 'fff'];

if str[i] === str[i+1]{
.join()
}

so I did some digging and I need to use regular expressions

<https://regexr.com> - regex tool - cheat sheet provided and tells what your expression will do

<https://regex101.com> - regex tool to tell you what the expression does

<https://doc.lagout.org/programmation/Regular%20Expressions/Regular%20Expressions%20Cookbook_%20Detailed%20Solutions%20in%20Eight%20Programming%20Languages%20%282nd%20ed.%29%20%5BGoyvaerts%20%26%20Levithan%202012-09-06%5D.pdf> - regex textbook

here is the one we need: /(\w)1\*/g
-'/' and '/g' indicate the start and end of the regular expression pattern, respectively. The g flag at the end of the regular expression means "global", which tells JavaScript to find all matches in the string, rather than stopping after the first match.

- '\w' is a shorthand character class that matches any word character, which includes letters, digits, and underscores.
- '(\w)' is a capturing group that matches a single word character and captures it as a group. The parentheses around \w indicate that it is a capturing group.
- '\1' is a back reference to the first capturing group, which matches the same character that was captured in the first group. In other words, it matches any character that is repeated consecutively in the string.
- '\*' is a quantifier that matches zero or more occurrences of the preceding pattern, which in this case is the back reference \1.

ok, so I have implemented this:

    const pattern = /(\w)\1\*/g;

    function longestRepetition(s) {
        let splitStr = s.split(pattern);
        console.log(splitStr);
        // return ["",0];
    }

    longestRepetition('bbbaaabaaaa');

it returns this:
[
'', 'b', '', 'a',
'', 'b', '', 'a',
''
]

so I think it is finding the pattern from regex and splitting there. It isn't obvious to me why this is the output. But i think I will use a different method now. We will do match. ..

Ok, needed to filter instead of split. with filter we get:

['bbb', 'aa', 'b', 'aaaa'] -- nice

now I just return the value I need, simple if else statement

    if (s.length === 0){
        return ['', 0]
    } else {
        function sortStr(str1, str2){
        return str2.length - str1.length || s.indexOf(str1) - s.indexOf(str2)
    }
        let match = s.match(/(\w)\1*/g).sort(sortStr);
        let match = s.match(/(\w)\1*/g);
        sorted(match);

        let char = match[0];
        let charLetter = char[0];
        let charLength = char.length;

        return [charLetter, charLength]
    }

}

the .sort method on kata is acting up because of the version of node it is running on.... need to make the sort myself..

bubble:

    function bubbleSort(arr, index1, index2){
        for (i = 0; i < arr.length; i++){
            // go through array arr.length - 1 times
            for(j = 0; j < arr.length; i++){
                // go through the loop j-1 times again
                if (arr[j] > arr[j + 1]) {
                    // switch them
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

more efficient:

    function bubbleSort(arr, index1, index2){
        for (i = arr.length ; i > 0; i--){
            // go through array arr.length - 1 times
            for(j = 0; j < i -1; i++){
                // go through the loop j-1 times again
                if (arr[j] > arr[j + 1]) {
                    // switch them
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr
    }

even more efficient -- introduce a variable called no swaps and break the function if it is true

    function bubbleSort(arr, index1, index2){
        // set no swaps to true
        let noSwaps = true;

        for (i = arr.length ; i > 0; i--){
            for(j = 0; j < i -1; i++){

                if (arr[j] > arr[j + 1]) {
                    // switch them
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arry[j] = temp;
                    noSwaps = false;
                }
            }
            // if we arrive at this one, that means that it didn't satisfy the first if statement and therefore doesn't update noSwaps to false.

            if(noSwaps) break;
        }
        return arr
    }
