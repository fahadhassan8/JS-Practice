// var students = ["ahmed","fahad"];

// console.log("students===>",students);

// stack me push or pop ata he

// Slice

// var cities = ["Karachi", "Islamabad", "Lahore", "Multan","Hyderabad"];

// slice pehla start, dusra element jha tk copy krna h ussy ek index zyada dengy
// var returnValue = cities.slice(2,4);

// copiedValue
// console.log("New Array:", returnValue);

// Old array same element rhyga
// console.log("Old Array:", cities);

// Splice

// var cities = ["Karachi", "Islamabad", "Lahore", "Multan", "Hyderabad"];

// slice pehla start, dusra jha tk delete krna h wo index btana h, teesra add
// var returnValue = cities.splice(1,2, "Muree","Peshawar");

// return deleted value krega array me
// console.log("New Data:", returnValue);
// console.log("Old Data:", cities);

//                  LOOP
// for(Statement, condition, increment){
//     block
// }
// var text = "Hello World";

// for(var i = 1; i <= 5; i++){
//     console.log("iteration:",i,text);
// }

// var cities = ["Karachi", "Islamabad", "Lahore", "Multan","Hyderabad"];

// console.log(cities.length);

// for(var i = 0; i < cities.length; i++){
//     console.log("iteration:", i, cities[i])
// }
// for(var i = 0; i < cities.length; i++){
//     console.log("iteration:", i, cities[i])
// }

// for(var i = 0; i <= cities.length -1; i++){
//     console.log("iteration:", i, cities[i])
// }

    // TABLE
// var table = 2;

// for(var i = 1; i <= 10; i++){
//     console.log(table + " " + "x" + " " + i + " " + "=" + " " + table * i);
// }
// var table = 3;

// for(var i = 1; i <= 10; i++){
//     console.log(table + " " + "x" + " " + i + " " + "=" + " " + table * i);
// }

// var table = 4;

// for(var i = 1; i <= 10; i++){
//     console.log(table + " " + "x" + " " + i + " " + "=" + " " + table * i);
// }

// var table = 5;

// for(var i = 1; i <= 10; i++){
//     console.log(table + " " + "x" + " " + i + " " + "=" + " " + table * i);
// }

// for(var i = 10; i > 0; i--){
//     console.log(i);
// }
// for(var i = 1; i <= 10 ; i++){
//     document.write("2 x " + i + " = " + i*2 + "</br>");
// // }
// for(var i = 1; i <= 10; i++){
//     document.write("3 x " + i + " = " + i*3 + "</br>");
// }
// for(var i = 10; i > 0; i--){
//     document.write("2 x " + i + " = " + i*2 + "</br>");
// }
// var userInput = +prompt("Enter your table");
// for(i = 1; i <= 10; i++){
//     document.write(userInput + " x " + i + " = " + userInput*i + "</br>")
// }

// var userInput = +prompt("Enter you table");
// var numberOfTimes = +prompt("Enter Number of Times");

// for(i = 1; i <= numberOfTimes; i++){
//     document.write(userInput + " x " + i + " = " + userInput * i + "</br>");    
// }
// var userInput = +prompt("Enter you table");
// var numberOfTimes = +prompt("Enter Number of Times");

// for(i = 1; i <= numberOfTimes; i++){
//     document.write(userInput + " x " + i + " = " + userInput * i + "</br>");    
// }

// var arr = ["sadiq","ghous","fahad","adeel"];

// for(i = 0; i < arr.length; i++){
//     document.write(arr[i] + "</br>")
// }

// var arr = ["sadiq","ghous","fahad","adeel"];
// var findName = "fahad";

// for(i = 0; i < arr.length; i++){
//     if(arr[i] === findName){
//         console.log("found", i);
//     }else{
//         console.log("not found");
//     }
// }

// FLAG METHOD FOR FINDING SINGLE ARRAY ELEMENT 

// var arr = ["sadiq","ghous","fahad","adeel"];
// var findName = "abc";
// var flag = false;

// for(i = 0; i < arr.length; i++){
//     if(arr[i] === findName){
//        flag = true; 
//     }
// }
// if(flag === true){
//     console.log("found");
// }else{
//     console.log("not found");
// }

// var arr = ["sadiq","ghous","fahad","adeel"];
// findName = "sadiq";
// flag = false;

// for(i = 0; i < arr.length; i++){
//     if(arr[i] === findName){
//         flag = true;
//          break; 
//    }
// }
// if (flag) {
//     console.log("found")
// } else {
//     console.log("not found")
// }

// break loop ka keyword h just for stop loop count where find desire element break will stop your counting

// for(i = 0; i < 10; i++){
//     console.log(i);
//     if(i === 5){
//         break;
//     }
// }

// NESTED LOOP

// for(i = 0; i < 5; i++){
//     console.log("loop number " + i);
//     for(j = 0; j < 5; j++){
//         console.log(i,j);
//     }
// }

// for (i = 0; i < 5; i++){
//     console.log("loop Number:",i)
//     for(j = 0; j < 5; j++){
//         console.log(i,j)
//     }
// }