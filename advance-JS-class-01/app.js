// Destructuring

// let student = {
//     name : " fahad hassan",
//     roll: 128375,
//     email:'asdfghjk',
//     school:{
//         title:'SMIT'
//     }
// }
// let {name,roll,email,school:{title}} = student;
// console.log(name)
// console.log(roll)
// console.log(email)
// console.log(title)

// let arr = ['ghous','ahmed','fahad'];

// let [a,b,c] = arr;
// console.log(a,b,c)

                    // Default Operator

// function foo(a, b = 2){
//     return a + b;
// }
// console.log(foo(5));
                    // Rest Operator

// function abc(a,b,c,d,e){
//     console.log(a,b,c,d,e)
// }
// abc('fahad','hassan','adeel','saad','ghous');

// function abc(...rest){
//     console.log(rest)
// }
// console.log("hassan",1,2,3,4,5,'ghous','saad','fahad','adeel');

                    // Spread Operator

// let obj = {
//     name: 'ahmed',
//     roll:123
// }
// let obj1 = {
//     school: 'SMIT',
//     class: "WAM"
// }
// let merge = {
//     ...obj,
//     ...obj1,
//     school: 'saylani'
// }
// console.log(merge)
// for(let key in obj1){
//     obj[key] = obj1[key]
//     // console.log(obj1[key])
// }

                //Enhanced Object Literals

let firstName = 'Ghous';
let lastName = 'Ahmed';

let object = {
    firstName,
    lastName
}
console.log(object);
//pehli glti maaf undefined aega
console.log(object.school);
//dusri glti maaf  nh hogi error aega
console.log(object.school.title);
//optional chaining dusri galti bhi muaf krdo
console.log(object.school?.title);