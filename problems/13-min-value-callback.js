/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:


*******************************************************************************/

//set var for smallest value
//iterate through array to find smallest
//pass smallest into cb

function minValueCallback(array, cb) {
    // Your code here

    let small = Infinity;

    for (i = 0; i < array.length; i++) {
      if (array[i] < small) small = array[i];
    }

    if (typeof cb === 'undefined') return small;
    else return cb(small);


}

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}