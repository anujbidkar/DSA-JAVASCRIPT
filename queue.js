const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let queue = [];
let front = -1;
let rear = -1;

function mainMenu() {
  console.log("************* Main Menu ************* ");
  console.log(
    "\n 1) Insert an Element. \n 2) Delete an Element \n 3) Display the Queue"
  );
  rl.question("\n Enter your Choice : ", (choice) => {
    if (choice === "1") {
      insert();
    } else if (choice === "2") {
      deleteQ();
    } else if (choice === "3") {
      display();
    } else {
      console.log("Pls Enter Valid Entry");
    }
  });
}

function display() {
  console.log(
    "\n************************ Display Operation Called ***************************"
  );
  for (let i = front; i <= rear; i++) {
    console.log(queue[i]);
  }
  mainMenu();
}
function insert() {
  rl.question("Enter the Element You Want to insert : ", (element) => {
    if (element) {
      if (front === -1 && rear === -1) {
        front = 0;
        rear = 0;
      } else {
        rear = rear + 1;
      }
      queue[rear] = element;
      console.log("Value is inserted \n");
      mainMenu();
    } else {
      console.log("Error : Please Enter Value");
      mainMenu();
    }
  });
}

function deleteQ() {
  if (front === -1 || front > rear) {
    console.log("Error  Underflow");
  }
  const item = queue[front];
  if (front === rear) {
    front = -1;
    rear = -1;
  } else {
    front = front + 1;
  }
  console.log("Element is Deleted :", item);
  mainMenu();
}
mainMenu();
