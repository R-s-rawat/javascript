function countPairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //This line does something with each pair; the specific operation isn't crucial for complexity analysis
      // count++; // Uncomment this for a simpler example counting the pairs
      //console.log(`Pair: [${arr[i]}, ${arr[j]}]`); //Uncomment this to print all the pairs
    }
  }
  return count; //or return nothing
}

let myArray = [1, 2, 3, 4, 5];
let numberOfPairs = countPairs(myArray);
console.log("Number of pairs:", numberOfPairs); // Output: 10 (if you uncomment count++)


//  an algorithm with O(n²) time complexity.

// This is a common complexity for algorithms that involve nested loops iterating over the entire input.

// countPairs function counts the number of unique pairs that can be formed from elements within the input array arr

// Time Complexity: O(n²) - Quadratic. The outer loop runs n times, and for each iteration of the outer loop, the inner loop runs approximately n/2 times on average. This results in a total of roughly n * (n/2) operations, which simplifies to O(n²). The time taken grows proportionally to the square of the input size.

// trend = quadratic i.e O(n²)

// Doubling the input size will roughly quadruple the run-time. 

// While simple, this pattern appears in many algorithms, highlighting the importance of understanding and avoiding O(n²) complexity when dealing with large datasets.