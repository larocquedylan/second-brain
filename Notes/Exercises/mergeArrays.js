/* 

Question: Given two arrays, write a function that will combine both arrays into one by alternately taking elements from each.

Test inputs one:
const arrayOne = [a, b, c, d, e]
const arrayTwo = [1, 2, 3, 4, 5]

Expected output: [a, 1, b, 2, c, 3, d, 4, e, 5]

Test inputs two:
const arrayOne = [a, b, c, d, e]
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8]

Expected output:
[a, 1, b, 2, c, 3, d, 4, e, 5, 6, 7, 8]

*/

// declare function mergeArrays that takes two separeate arrays and returns one
function mergeArrays(arr1, arr2) {
  // declare a new array to push to called combined
  let combined = [];
  let long = [];

  if (arr2.length > arr1.length) {
    long = arr2;
  } else {
    long = arr1;
  }

  for (let i = 0; i < long.length; i++) {
    combined.push(arr1[i], arr2[i]);
  }

  let filtered = combined.filter((x) => x != undefined);

  console.log(filtered);

  // return combined
  return filtered;
}

const arrayOne = ['a', 'b', 'c', 'd', 'e'];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8];

mergeArrays(arrayOne, arrayTwo);
