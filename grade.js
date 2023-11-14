var readlineSync = require('readline-sync');

let grade = parseInt(readlineSync.question('Enter your grade: '));


if(grade>=60){
    console.log('You are passed');
}
else{
    console.log('You are failed');
}