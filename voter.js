var readlineSync = require('readline-sync');

let age = parseInt(readlineSync.question('Enter your age: '));


if(age>=18){
    console.log('You are eligible for voting');
}
else{
    console.log('You are not eligible for voting');
}