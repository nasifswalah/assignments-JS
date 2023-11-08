var readlineSync = require ('readline-sync');
let first_Number = parseInt(readlineSync.question("Enter your first number: "))
let second_Number = parseInt(readlineSync.question("Enter your second number: "))

console.log("The result of ", first_Number, " % ", second_Number, " = ", first_Number%second_Number);