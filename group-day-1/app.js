// if statement pdf 12-13

// Q 01

let num = 10;
let str = "ABC";

// if(str === str.toLowerCase()){
//     console.log("its lowercase string");
// }
// else if(num === num.toLowerCase){
//     console.log("its a number")
// }
// else{
//     console.log("its uppercase")
// }
// Q 2
// let integer1 = +prompt("Enter your first number",1);
// let integer2 = +prompt("Enter your second number",2);

// if(integer1 > integer2){
//     console.log(integer1 + ` Is Greater than ` + integer2);
// }
// else if(integer2 > integer1){
//     console.log(integer2 + ` Is Greater than ` + integer1);
// }
// else{
//     console.log(integer1 + ` Is Equal ` + integer2);
// }

// Q 3

// let integer1 = +prompt("Enter your number",1);

// if(integer1 > 0){
//     console.log(integer1 + ` Is positive number `);
// }
// else if(integer1 < 0){
//     console.log(integer1 + ` Is negative number `);
// }
// else if (integer1 === 0){
//     console.log(integer1 + ` Is equal to zero`);
// }
// else{
//     console.log('Not a number');
// }

// Q 4

// let vowels = ['a','e','i','o','u'];
// let userInput = prompt('Enter your character');
// if(userInput === vowels[0] || userInput === vowels[1] || userInput === vowels[2] ||userInput === vowels[3] || userInput === vowels[4]){
//     alert('its vowel');
// }else{
//     alert('its consonant');
// }

// Q 5

// let password = 123456;
// let userpSw = +prompt('Enter your password');
// if(password == userpSw){
//     alert("correct psw");
// }else if (userpSw == ''){
//     alert('please enter your password');
// }else{
//     alert('Enter correct password');
// }

// Q 6
 
let hour = parseInt(prompt("Enter hour",'0000'));
if(hour >= '0000' && hour < 12){
    alert('Good Morning')
}
else if(hour >= 12 && hour < 17){
    alert('Good Afternoon')
}
else if(hour >= 17 && hour < 22){
    alert('Good Evening')
}
else if (hour >= 22 && hour < 24){
    alert('Good Night');
}
else{
    alert('Enter valid time')
}