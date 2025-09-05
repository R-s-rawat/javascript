function findPowerOfTwo(n) {
    let power = 1;
    let count = 0;
    while (power < n) {
        power *= 2;
        count++;
    }
    return count;
}

console.log(findPowerOfTwo(16)); // Output: 4
console.log(findPowerOfTwo(1024)); // Output: 10

// This findPowerOfTwo function determines the smallest power of 2 that is greater than or equal to the input n.

// Time Complexity: O(log n) - Logarithmic. The while loop continues as long as power is less than n. In each iteration, power is doubled. This means the number of iterations is roughly proportional to the logarithm (base 2) of n. If you double n, the number of iterations only increases by one.

// This illustrates a logarithmic relationship: the time doesn't increase linearly with n but rather much more slowly

//  This is a significant advantage for large values of n.

// Big O focuses on the trend — how the run-time (or space) usage changes relative to the input size—not the absolute values. 

// trends = n, log n, n², etc.