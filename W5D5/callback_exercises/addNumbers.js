const readline = require("readline");
// Create the interface from the module
// this will allow us to receive user input
// via the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    const resp = rl.question('Choose A Number', 
    answer => { 
    sum += parseInt(answer);  
    numsLeft--;
    console.log(sum);
    addNumbers(sum, numsLeft, completionCallback) });}
  
  if( numsLeft === 0) {
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
