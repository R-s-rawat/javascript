function processArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    //Simulate a logarithmic time operation on each element.  Replace this with your actual operation
    let num = arr[i];
    let count = 0;
    while (num > 1) {
      num = Math.floor(num / 2); //Repeated halving simulates logarithmic time
      count++;
    }
     console.log(`For element ${arr[i]}, inner loop ran ${count} times`);
  }
}

let myArray = [10, 100, 500, 1000];
processArray(myArray);

// trend = n log n (simulated)

// An algorithm demonstrating O(n log n) time complexity characteristics.  Note: This is a *simulation* of n log n behavior and not a true n log n algorithm like merge sort.

// The processArray function iterates through each element of the input array and performs a simulated logarithmic time operation on each element.

// The inner while loop repeatedly halves the value of 'num', resulting in a roughly logarithmic number of iterations for each element. This simulates the logarithmic part of n log n.

// Time Complexity: O(n log n) - Linearithmic (simulated). The outer loop iterates 'n' times (linear). The inner while loop, for each element, performs approximately log₂(num) operations (logarithmic). Combining these gives us an overall time complexity that demonstrates characteristics of O(n log n). This is a more efficient growth rate than O(n²) but slower than O(n) for large n.

// Key takeaway: it demonstrates the combination of a linear pass over the data (n) and a simulated logarithmic operation on each element (log n), illustrating the characteristics of O(n log n) time complexity without the complexities of a full sorting algorithm.