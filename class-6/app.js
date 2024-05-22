
// CHANGING CASE CHAPTER 21

// var str = "Fahad Hassan";
// console.log(str)
// return new output value
// console.log(str.toLocaleLowerCase());

// STRINGS MEASURING LENGTH AND EXTRACTING PARTS CHAPTER 22

// var myName = "fahad";
// console.log(myName.length);

// "fahad".length is trh b krskty console me

// var str = "fahad hassan";

// console.log(str.slice(0,5))

// STRING FINDING SEGMENTS CHAPTER 23
//indexOf ka method array or string dono pr chlega

// var str = "fahad hassan";
//return me length dega or agr wo value search kre jo string me na ho to return me -1 dega
// console.log(str.indexOf("h"))

// var str = "Fahad Hassan";
// if(str.indexOf("Fahad") !== -1){
//     console.log("Mil gaya");
// }

// var str = "Fahad Hassan";
// console.log(str.lastIndexOf("a"));

// 1ST METHOD
// var cities = ["karachi","islamabad","lahore","peshawar"];
// var userInput = prompt("Enter city");
// console.log(cities.indexOf(userInput.toLocaleLowerCase()));

// if(cities.indexOf(userInput.toLocaleLowerCase()) !== -1){
//     console.log("found");
// }else{
//     console.log("not found");
// }

// 2ND METHOD

// var cities = ["karachi","islamabad","lahore","peshawar"];
// var userInput = prompt("Enter city");
// var flag = false;

// for(i = 0; i < cities.length; i++){
//     if(userInput === cities[i]){
//         flag = true;
//         console.log("found");
//     }
// }
// if(!flag){
//     console.log("not found");
// }

// STRINGS FINDING A CHARACTER AT A LOCATION CHAPTER 24

// var str = "Fahad";

// console.log(str[0]);

// console.log(str.charAt(0));

// STRING REPLACING CHARACTERS CHAPTER 25

// var str = "This is test product";
// var word = "test";
// var replace = "best";

// for (var i = 0; i < str.length; i++){
//     if(str.slice(i, i + word.length) === word){
//         console.log(i);
//         str = str.slice(0,i) + replace + str.slice(i + replace.length);
        // console.log(str.slice(0,i) + replace)
    // }
// }
// console.log(str)

//PRACTICE
// var str = "My name is Fahad Hussain Khan";
// find = "Hussain";
// replace = "Hassan";

// for(i = 0; i < str.length; i++){
//     if(str.slice(i, i + find.length) === find){
//         console.log(i);
//         str = str.slice(0,i) + replace + str.slice(i + find.length);
//     }
// }console.log(str);

// USING METHOD FOR SAME WORK

// var str = "this is test product test";
// find = "test";
// replace = "best";

// console.log(str.replace(find, replace));
// console.log(str.replaceAll(find, replace));

// ROUNDING NUMBERS CHAPTER 26

// console.log(Math.round(2.3));
// console.log(Math.round(3.6));
// console.log(Math.round(2.2));
// console.log(Math.round(4.5));

// console.log(Math.ceil(2.2));
// console.log(Math.ceil(2.01));
// console.log(Math.ceil(1.5));

// console.log(Math.floor(1.8));
// console.log(Math.floor(3.5));
// console.log(Math.floor(4.9));
// console.log(Math.floor(3.3));

// GENERATING RANDOM NUMBERS CHAPTER 27

// range 0 to 1 and decimal means after . value 16

// console.log(Math.random());
// console.log(Math.random() * 6789987);
// console.log(Math.round(Math.random() * 9876543245678));

// console.log(Math.ceil(Math.random() * 6));
// console.log(Math.ceil(Math.random() * 2));

// CONVERTING STRINGS TO INTEGERS AND DECIMALS CHAPTER 28

// Number("45678");
// Number("76.6543");

// +"543245"

// parseFloat("45678");
// parseFloat("76.5334");

// parseInt("098765");
// parseInt("65.6543");

// CONVERTING NUMBER TO STRING STRING TO NUMBER CHAPTER 29

// var num = "2345654";
// console.log(num.toString());

// CONTROLING THE LENGTH OF DECIMALS CHAPTER 30

// var num = 67.5432345;
// console.log(num.toFixed());
// console.log(num.toFixed(2));
// console.log(num.toFixed(8));

        // >>=======================================>>

// var large = [89, 34,76,3,12,65];

// var max = [0];

// for(i = 0; i<large.length; i++){
//     if(large[i] > max){
//         max = large[i]
//     }
// }
// console.log(max);

// var small = [24,53,78,91,12];
// var min = [0];

// for(i = 0; i < small.length; i++){
//     if(small[i] < min){
//         min = small[i];
//     }
// }
// console.log(min);

// for(i = 0; i<5; i++){
//     console.log("loop number ",i);
//     for(var j = 0; j<5; j++){
//         console.log(i,j)
//     }
// }

// MultiDimensional Array

// var arr = [
//     ["ghous","ahmed"],
//     ["fahad","hassan"]
// ];

// for(i = 0; i < arr.length; i++){
//     // console.log(i);
//     for(j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }
// var arr = [["ghous"]];
// subArr = arr[0];
// console.log(subArr[0])

// var arr = [["fahad"]];
// subArr = arr[0];
// console.log(subArr[0]);

// CHAPTER 21 CHANGING Case

// String Method

// var fullName = "Fahad Hassan";
// console.log(fullName.toUpperCase());
// var fullName = "Fahad Hassan";
// console.log(fullName.toLowerCase());

// var myName = "Fahad Hassan";
// console.log(myName.length);

// var fullName = "ghous";
// var firstChar = fullName.slice(0,1).toLocaleUpperCase();
// var result = firstChar + fullName.slice(1);
// console.log(result);

// var myName = "fahad";
// var firstChar = myName.slice(0,1).toLocaleUpperCase();
// var result = firstChar + myName.slice(1);
// console.log(result);

// var myName = ["jghjk","kghjk","lghj","mhjkl"];

// for(i = 0; i <myName.length; i++){
//     console.log(i,myName[i]);
// }

// STRING FINDING SEGMENTS
//  find something in string USING LOOP & INDEXOF

// var text = "my name is fahad hassan";
// var user = prompt("Enter your word");
// flag = false;

// for(i = 0; i < text.length; i++){
//     if(text.slice(i, i + user.length).toLocaleLowerCase() === user.toLocaleLowerCase()){
//         flag = true;
//     }
// }
// if (flag){
//     console.log("Found");
// }
// else{
//     console.log("Not Found");
// }


// var text = "my name is fahad hassan";
// console.log(text.indexOf("f"));

// var text = "my name is fahad hassan";
// if(text.indexOf("") !== -1){
//     console.log("found");
// }
// else{
//     console.log("not found");
// }
