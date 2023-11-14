var readlineSync = require('readline-sync');

let value = parseInt(readlineSync.question('Enter a value: '));


if(value>0){
    console.log('it is a positive value');
}
else if(value<0){
    console.log('it is a negative value');
}
else{
    console.log('it is zero');
}