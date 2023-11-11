var readlineSync = require('readline-sync');

let length = parseInt(readlineSync.question('Enter the length of the triangle: '));
let width = parseInt(readlineSync.question('Enter the width of the triangle: '));
let area = 0.5*width*length;

console.log('The area of this triangle is ',area);