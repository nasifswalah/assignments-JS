var readlineSync = require('readline-sync');
let first_Number = parseInt(readlineSync.question('enter your first number:  '));
let second_Number = parseInt(readlineSync.question('enter your second number: '));

console.log("The result of ",first_Number ," + " ,second_Number ," = " , first_Number+second_Number);
