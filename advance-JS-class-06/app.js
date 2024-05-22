//Higher order func

// num = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(num(3)(3)(3));

// let obj = {
//     name: "fahad",
//     email: "fahad@gmail.com",
//     details: {
//         roll: 123
//     }
// }
// // OPtional chaining "?" dono gltya maaf
// console.log(obj.school?.abc);

// let obj = {
//     name: "fahad",
// }
// // let a = obj.email || "not provided"
// // Ternary operator
// let a = obj.email ? "good" : "bad";
// console.log(a);


// let arr = ['ghous','adeel','fahad'];

// // for(i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }
// // for simple getting values
// for(let name of arr){
//     console.log(name);
// }

//      Module

// import abc from './index.js';
// console.log(abc(2,2));

// import dev,{ abc as abc2,sum } from "./index.js";

// let abc = () => {

// }

// // console.log(abc,sum)
// console.log(sum(2,2))
// console.log(abc2(2,3))
// console.log(dev(10,2))

//for getting entire data

// import * as all from './index.js'
// console.log(all)
// console.log(all.abc)