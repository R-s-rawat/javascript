function printNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

printNTimes(5); // Prints 0, 1, 2, 3, 4

// time complexity

// Time Complexity: O(n) - Linear.
// 

//The for loop iterates n times. The time it takes to execute this function grows linearly with the input n.

//  The time taken increases directly proportionally to the input n. If you increase n to 100, it will take approximately 100 times longer (though the exact time will depend on your system)

// Big O focuses on the trend

// trend = n, log n, n², etc.