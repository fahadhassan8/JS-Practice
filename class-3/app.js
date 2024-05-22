// chapter 10 start 
// if statement

// if only take bullean
// if(true or false)
// if(true){
//     alert("hello");
// }
// var gender = prompt("Enter your gender", "Male");

// if(gender === "Male"){
//     alert("Hello, Sir");
// }
// if(gender === "Female"){
//     alert("Hello, Sister");
// }
// Comparison Operators
// var gender = prompt("Enter your gender", "Male");
// var message = "Not match";

// if(gender === "Male"){
//     message = "Hello, Sir";
// }
// if(gender === "Female"){
//     message = "Hello, Sister";
// }
// alert(message);

// not equal to operator !==

// var tcktNum = prompt("your ticket number");
// if(tcktNum !== 123456){
//     alert("Better luck next time");
// }

// var age = 21;

// if(age > 20){
//     console.log("Eligible");
// }

// var age = 20;

// if(age >= 20){
//     console.log("Eligible");
// }

// var age = 13;

// if(age < 20){
//     console.log("Eligible");
// }

// var age = 14;

// if(age <= 20){
//     console.log("Eligible");
// }
// else{
//     console.log("Not eligible");
// }
// let jjj = ["Dahi","Doodh","Bread"]
// var lanaKyaHai = prompt("Kya mil rha hai?");

// if(lanaKyaHai === jjj[0]){
//     console.log("tw le ana");
// }
// else if(lanaKyaHai === jjj[1]){
//     console.log("chlo le ana")
// }
// else if(lanaKyaHai === jjj[2]){
//     console.log("aby yr ly ana")
// }
// else{
//     console.log("kuch bhi le ana khali hath mt ana")
// }

// var partyKaren = prompt("Aj Party Karen?");

// if(partyKaren === "Han"){
//     console.log("Ok Done kro");
// }
// else if(partyKaren === "Nhi"){
//     console.log("Sala Garib");
// }
// else if(partyKaren === "next month"){
//     console.log("Acha");
// }
// else{
//     console.log("Chal saly topi");
// }

//testing set of conditions

// var lanaKyaHai = prompt("Kya mil rha hai?");
// var kg = 1;

// if(lanaKyaHai === "Dahi" && kg === 1){
//     console.log("tw le ana");
// }
// else if(lanaKyaHai === "Doodh"){
//     console.log("chlo le ana")
// }
// else if(lanaKyaHai === "Bread"){
//     console.log("aby yr ly ana")
// }
// else{
//     console.log("kuch bhi le ana khali hath mt ana")
// }

// var weight = +prompt("enter your weight");
// time = prompt("how much time will you take to run 40 yards?");

// if (weight > 300 &&
//     time < 6) {
//        alert("Come to our tryout!");
//      }
//      else {
//        alert("Come to our cookout!");
//     }

// var weight = +prompt("enter your weight");
// time = prompt("how much time will you take to run 40 yards?");
// age = prompt("Enter your age");
// gender = prompt("Enter your gender");
// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//        alert("Come to our tryout!");
//      }
//      else {
//        alert("Come to our cookout!");
//     }

// var marks = prompt("enter your Marks");
// var GPA = prompt("Enter your GPA");
// var sport = prompt("Enter your fvr* sport")

// if (marks > 700 || GPA > 2.5 || sport === "football") {
//        alert("Welcome to Bubba State!");
//     }
//      else {
//        alert("Have you looked into appliance repair?");
//     }

// age1 = prompt("enter age1")
// age2 = prompt("enter age2")
// res = prompt("enter your residence")
// if (age1 > 65 || age2 < 21 && res === "U.S.") {
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }

// var language = prompt("Enter your Language");

// if(language === "javascript"){
//     var city = prompt("Enter your City");
//     if(city === "karachi"){
//         var exp = prompt("Enter your Experience") ;
//         if(exp === "2 years"){
//             console.log("Congratulation, Hired");
//         }else{
//             console.log("Minimum 02 years of experience required");
//         }
//     }else{
//         console.log("Only For Karachi");
//     }
// }else{
//     console.log("JavaScript Required");
// }

// var education = prompt("Enter your Education");

// if(education === "bachelors"){
//     var english = prompt("Do you Speak English");
//     if(english === "yes"){
//         var exp = prompt("Enter your experience");
//         if(exp > "1 years"){
//             alert("Congratulation you are, Hired!");
//         }
//         else{
//             alert("Minimum 2 years of Experience Required");
//         }
//     }
//     else{
//         alert("English language is compulsory");
//     }
// }
// else{
//     alert("Minimum Bachelors required.")
// }
// var language = prompt("Enter your Language");

// if (language === "Javascript") {
//     var exp = prompt("Enter your experience");
//     if (exp === "2 years") {
//         var city = prompt("Enter your city");
//         if (city === "karachi") {
//             console.log("Hired")
//         }else{
//             console.log("Only for karachi")
//         }
//     }else{
//         console.log("Minimum 2 years of experience requried");
//     }
// }else{
//     console.log("JavaScript required");
// }

// var registerEmail = prompt("Enter your Email");
// var currentEmail = registerEmail;
// var registerPswrd = +prompt("Enter your Pswrd","123");
// var currentPswrd = registerPswrd;

// if(registerEmail === currentEmail && registerPswrd === currentPswrd){
//     alert("Login Successfully");
// }else{
//     alert("Please Enter correct details");
// }