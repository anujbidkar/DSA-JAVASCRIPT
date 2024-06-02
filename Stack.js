//readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let stack = [];
function mainMenu() {
  console.log(
    "\n************************ Stack Operations Using Array ***************************"
  );
  console.log("Choose one from the below options.....");
  console.log("1.Push \n2.Pop \n3.Show \n4.Exit");
  rl.question("Enter Your Choice : ", (choice) => {
    if (choice === "1") {
      push();
    } else if (choice === "2") {
      pop();
    } else if (choice === "3") {
      show(true);
    } else {
      console.log("You have entered incorrect choice");
    }
  });
}

function push() {
  console.log(
    "\n************************ Push Operation Called ***************************"
  );
  rl.question("Enter Element You Want to Push : ", (element) => {
    stack.push(element);
    console.log("Element Pushed Successfully!!!!!!!!!");
    show(false);
    mainMenu();
  });
}
function pop() {
  console.log(
    "\n************************ Pop Operation Called ***************************"
  );
  stack.pop();
  console.log("Element Poped Successfully!!!!!!!!!");
  show(false);
  mainMenu();
}
function show(isDisplayMenu) {
  console.log(
    "\n************************ Show Operation Called ***************************"
  );
  //   for (let i = 0; i <= stack.length - 1; i++) {
  //     console.log(stack[i]);
  //   }

  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(stack[i]);
  }
  if (isDisplayMenu === true) {
    mainMenu();
  }
}

mainMenu();
