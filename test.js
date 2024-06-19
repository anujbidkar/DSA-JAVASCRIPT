function nextGreaterElements(arr) {
  let result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        result[i] = arr[j];
        break;
      }
    }
  }

  return result;
}

// Example usage
// let arr = [4, 5, 2, 25];
// let arr = [10, 9, 25, 32];
// let arr = [11, 22, 33, 44];
// console.log(nextGreaterElements(arr)); // Output: [5, 25, 25, -1]

function areBracesBalanced(expression) {
  let stack = [];
  let matchingBraces = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Loop through each character in the expression using a for loop with an index
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    // If the character is an opening brace, push it onto the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // If the character is a closing brace
    else if (char === ")" || char === "}" || char === "]") {
      // If the stack is empty or the top of the stack does not match the closing brace
      if (stack.length === 0 || stack.pop() !== matchingBraces[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all braces were balanced
  return stack.length === 0;
}

// Example usage
let expression1 = "({[]})";
let expression2 = "({[})";

console.log(areBracesBalanced(expression1)); // Output: true
console.log(areBracesBalanced(expression2)); // Output: false

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const maxsize = 5;
let queue = [];
let front = -1;
let rear = -1;

function insert() {
  if (rear === maxsize - 1) {
    console.log("OVERFLOW");
    mainMenu();
  } else {
    rl.question("Enter the element: ", (item) => {
      item = Number(item);
      if (front === -1 && rear === -1) {
        front = 0;
        rear = 0;
      } else {
        rear = rear + 1;
      }
      queue[rear] = item;
      console.log("Value inserted");
      mainMenu();
    });
  }
}

function deleteElement() {
  if (front === -1 || front > rear) {
    console.log("UNDERFLOW");
  } else {
    const item = queue[front];
    if (front === rear) {
      front = -1;
      rear = -1;
    } else {
      front = front + 1;
    }
    console.log("Value deleted");
  }
  mainMenu();
}

function display() {
  if (rear === -1) {
    console.log("Empty queue");
  } else {
    console.log("Printing values...");
    for (let i = front; i <= rear; i++) {
      console.log(queue[i]);
    }
  }
  mainMenu();
}

function mainMenu() {
  console.log(
    "\n*************************Main Menu*****************************"
  );
  console.log(
    "\n================================================================="
  );
  console.log(
    "\n1. Insert an element\n2. Delete an element\n3. Display the queue\n4. Exit"
  );
  rl.question("Enter your choice: ", (choice) => {
    choice = Number(choice);
    switch (choice) {
      case 1:
        insert();
        break;
      case 2:
        deleteElement();
        break;
      case 3:
        display();
        break;
      case 4:
        rl.close();
        break;
      default:
        console.log("Enter a valid choice");
        mainMenu();
    }
  });
}

mainMenu();
