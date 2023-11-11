// write a program that takes user input for their name and prints a personalized greeting

var readlineSync = require('readline-sync');

let name = readlineSync.question('Enter your name: ');

console.log('Hi, ',name,' Welcome to javascript');