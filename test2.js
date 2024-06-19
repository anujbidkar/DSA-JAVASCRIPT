// Global data structures
let queue = [];
let count = {};

function findFirstNonRepeating(char) {
  // Increase the count for the character in the map
  if (!count[char]) {
    count[char] = 0;
    queue.push(char); // Only push the char if it's not already in the count map
  }
  count[char]++;

  // Check the front of the queue and remove characters with a count greater than 1
  for (let i = 0; i < queue.length; i++) {
    if (count[queue[0]] > 1) {
      queue.shift();
      i--; // Adjust index since we've modified the queue
    } else {
      break; // Exit the loop if the first character is non-repeating
    }
  }

  // Return the first non-repeating character or null if the queue is empty
  return queue.length > 0 ? queue[0] : null;
}

// Example usage
console.log(findFirstNonRepeating("a")); // 'a'
console.log(findFirstNonRepeating("b")); // 'a'
console.log(findFirstNonRepeating("a")); // 'b'
console.log(findFirstNonRepeating("c")); // 'b'
console.log(findFirstNonRepeating("c")); // 'b'
console.log(findFirstNonRepeating("b")); // null
console.log(findFirstNonRepeating("d")); // 'd'
