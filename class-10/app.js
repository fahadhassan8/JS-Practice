// var student = {
//     firstName: "Fahad",
//     lastName: "Hassan",
//     email: "fahad@gmail.com",
//     rollNum: 128375,
//     enroll: true,
//     topics: ["HTML","CSS","JavaScript"]
// }
// console.log(student.hmm)   //shows undefined object h but property nh h
// console.log(student.firstName)
// console.log(student)

// for addition of new property in Object
// student.cellNum = 923342417223;
// student.class = "WAM";
// student.topics = ["HTML","CSS","JavaScript"];
// console.log(student)

// empty object bna kr bd m value store kr skty hen
// var obj = {};
// then add property and store value in empty object
// obj.name = "Khan";
// console.log(obj)

// Object me sy ksi existing prop ko delete krwany k liye
// var student = {
//     firstName: "Fahad",
//     lastName: "Hassan",
//     email: "fahad@gmail.com",
//     rollNum: 128375,
//     enroll: true,
//     topics: ["HTML","CSS","JavaScript"]
// }
// delete student.email;
// delete student.lastName;
// console.log(student)

// pura object empty krwany k liye
// student = {}
// console.log(student)

// keyword "in" check krk btata he k property object k andr mojud hai ya nhi

// var student = {
//   firstName: "Fahad",
//   lastName: "Hassan",
//   email: "fahad@gmail.com",
//   rollNum: 128375,
//   enroll: true,
//   topics: ["HTML", "CSS", "JavaScript"],
//   classDetail: {
//     time: "3 pm to 5 pm",
//     day: "Sunday",
//   },
  // object m function is trh use krty h or object k andr func ko methd khty h
//   getFullName: function () {
    // return `${student.firstName} ${student.lastName}`;
//   },
// };
// console.log(student.getFullName());
// console.log(student);
// property ka name string me rkhengy then in keyword use krengy then object name
// agr property mili to true wrna false
// console.log("firstName" in student);
// console.log("lastName" in student);
// console.log("last" in student);

// var student = {
//     firstName: "Fahad",
//     lastName: "Hassan",
//     email: "fahad@gmail.com",
//     rollNum: 128375,
//     enroll: true,
//     topics: ["HTML", "CSS", "JavaScript"],
//     classDetail: {
//       time: "3 pm to 5 pm",
//       day: "Sunday",
//     }
// }
// prop is a variable koi bh name de skty h variable ka
// for(var prop in student){
    // console.log(prop) // finding properties name
    // console.log(student[prop]) // finding values name
    // console.log(`${prop}: ${student[prop]}`)
// }

// var userInput = prompt("Enter object name")
// var student = {
//     firstName: "Fahad",
//     lastName: "Hassan",
//     email: "fahad@gmail.com",
//     rollNum: 128375,
//     enroll: true,
//     topics: ["HTML", "CSS", "JavaScript"],
//     classDetail: {
//       time: "3 pm to 5 pm",
//       day: "Sunday",
//     }
// }
// alert(`${student[userInput]}`)

// practice

// var brand = prompt("enter your mobile brand");
// var model = prompt("enter your mobile model");
// var mobilePhone = {
//     iphone:{
//         iphone14:{
//             name: "iphone14",
//             colors:["black","white"],
//             ram: "20gb",
//             camera:"140px"
//         }
//     },
//     samsung:{
//         samsungA50:{
//             name: "samsung-A50",
//             colors:["black","white"],
//             ram:"50gb",
//             camera:"105 px"
//         }
//     },
//     nokia:{
//         nokia3310:{
//             name: "nokia-3310",
//             colors:["black","white"],
//             ram: "1gb",
//             camera: "none"
//         }
//     },
// }
// console.log(mobilePhone[brand]);
// console.log(mobilePhone[model]);