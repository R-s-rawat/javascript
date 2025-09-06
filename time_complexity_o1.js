// function getFirstElement(arr) {
//   if (arr.length > 0) {
//     return arr[0];
//   } else {
//     return null; //Handle empty array case
//   }
// }

// function retrieves the first element of an array.
// Time Complexity: O(1) - Constant.  The function performs a fixed number of operations regardless of the array's size.
function getFirstElement(arr) {
  // Check if the array is empty.  This is crucial for robustness but doesn't affect the Big O analysis because it's a constant-time operation.
  if (arr.length > 0) {
    // Access the element at index 0 (the first element). This is a single operation, regardless of array size.
    return arr[0];
  } else {
    // Return null to indicate an empty array. This is also a constant-time operation.
    return null;
  }
}


let myArray = [10, 20, 30, 40, 50];
let firstElement = getFirstElement(myArray);
console.log("First element:", firstElement); // Output: First element: 10

let emptyArray = [];
firstElement = getFirstElement(emptyArray);
console.log("First element:", firstElement); // Output: First element: null

//First element: 10:  myArray has elements, and getFirstElement correctly returns the first element (at index 0), which is 10.

//First element: null:  code explicitly handles the case of an empty array (emptyArray). When getFirstElement receives an empty array, the if condition (arr.length > 0) is false, and the function returns null as specified.

// Remember that the empty array check, while important, doesn't change the Big O because it's a constant-time operation.

