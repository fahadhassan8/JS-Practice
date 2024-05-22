// var userName = prompt("Enter you name : ")
// if(userName===""){
//         Swal.fire({
//        icon: "error",
//        title: "User Name is empty",
//      });
// }
// else{
//     var email = prompt("Enter your email")
//     if(email===""){
//         Swal.fire({
//             icon: "error",
//             title: "EMail is empty" ,
//           });
//     }
//     else{
//         var password = prompt("Enter you password");
//         var confirmPassword = prompt("Enter your confirm password")
//         if(password===confirmPassword){
//             Swal.fire({
//                 icon: "success",
//                 title: "Registered Succesfully",
//               });
//         }
//         else{
//             Swal.fire({
//                 icon: "error",
//                 title: "Invalid password",
//               });
//         }

//     }
// }



// // // // var name = prompt("Enter a name");
// // // // var email = prompt("Enter a email")
// // // // var password = prompt("Enter a email")
// // // // var confirmPassword = prompt("Enter a email")

// // // // if(name!=='' ||  email !=="" || password !=="",confirmPassword!==""){
// // // //     if(password === confirmPassword){
// // // //         alert("Successfully registered")
// // // //     }
// // // //     else{
// // // //         alert("invalid password")
// // // //     }
// // // // }
// // // // else{
// // // //     alert("all inputs are empty")
// // // // }


// // // var name = prompt("Enter a name");
// // // var email = prompt("Enter a email")
// // // var password = prompt("Enter a email")
// // // var confirmPassword = prompt("Enter a email")

// // // if( !name || !email || ! )


// var data='';
// for(i=inputUser.length-1; i>=0; i--){
//     data+=inputUser[i]
// }   
// var data  = inputUser.split('').reverse().join('')
// if(data===inputUser){
//     console.log(inputUser + "is palindrom")
// }
// else{
//     console.log(inputUser + "not palindrome")
// }


// var fullName = prompt("Enter you full name")
// var Data = fullName.split(' ');

// console.log(`First name : ${Data[0]} Last Name: ${Data[1]}`)





// // var name = "sadiq";
// // var dob = "4545";
// // var email = "dkjgdfljgldkf"
// // console.log(`Name : ${name} DOB : ${dob} email : ${email}`)



var fullName = "sadiq shah"
var splitData = fullName.split(" ");

var index1 = splitData[0].slice(0,1).toUpperCase() + splitData[0].slice(1) ;
var index2 = splitData[1].slice(0,1).toUpperCase() + splitData[1].slice(1) ;


console.log("welcome\n",index1,index2)





























































// var num = [1,26,89,45,9,3,78,45]
// var compareNum = num[0]
// for(i=0; i<=num.length; i++){
//     console.log(compareNum)
//     if(compareNum  <  num[i]){
//         compareNum = num[i];
//     }
// }
// console.log(compareNum)