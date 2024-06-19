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
  console.log("\n**********Main Menu**********");
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
