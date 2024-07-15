'use strict'

// let arr = ['fahad','adeel','sohaib','ghous'];

// // arr.forEach(function(v,i){
// //     console.log(i,v);
// // })
// // arr.forEach((v,i)=>{
// //     console.log(i,v)
// // })
// // return nhi krta kuch
// let returnValue = arr.forEach((v,i)=>{
//     // console.log(i,v)
//     return `hello ${v}`
// })
// console.log(returnValue)

// arr.map((v,i)=>{
//     console.log(i,v)
// })
// new array me value return krta he
// let arr = ['fahad','adeel','sohaib','ghous'];
// let resultValue = arr.map((v,i)=>{
    // console.log(v,i)
//     return `hello ${v}`
// })
// console.log(resultValue)

// for filtering data
// let arr = [{name:'fahad'},{name:'ghous'}];

// let result = arr.filter((v,i)=>{
//     // console.log(i,v)
//     // sirf true or false return krta h
//     // return true  // sary element return krdega
//     // return false  // blank array return krega
//     return v.name === 'hassan'
// })
// console.log(result)

// Single value find krega
// let arr = [{name:'fahad'},{name:'ghous'},{name:'fahad'}];

// let result = arr.find((v,i)=>{
//     // console.log(v)
//     return v.name === 'fahad'
//     return v.name === 'faha'
// })
// console.log(result)

//Same kam krega but value nhi index btaega

// let arr = [{name:'fahad'},{name:'ghous'},{name:'fahad'}];

// let result = arr.findIndex((v,i)=>{
    
//     return v.name === 'ghous'
// })
// console.log(result)

// let arr = [{name:'fahad'},{name:'ghous'},{name:'fahad'}];
// //For merging
// let result = arr.concat((v,i)=>{
//     return [{name:'ali'}]
// })
// console.log(result)

// let arr = [
//     {name:'mobile', price: 200},
//     {name:'tab', price: 300},
//     {name:'laptop', price: 500}];
//     // accumulator jo value return krty hen wo is parameter me jakr save hojti he
//     // 0 me accumulator ki value he
// let result = arr.reduce((accumulator,curentValue,currentIndex,completeArray)=>{
//     return accumulator + curentValue.price
// },0)
// console.log(result)

// let arr = [
//     {name:'tab', price: 300},
//     {name:'mobile', price: 200},
//     {name:'laptop', price: 500}
// ];
// let arr = [2,4,7,3]
// // give two value a,b a me first current value dega or b me agy wli value dega
// let result = arr.sort((a,b)=>{
//     b.price - a.price
// })
// console.log(result)


// function abc(a,b){
//     return a * b
// }
// console.log(abc(5,5))

//Arrow/Fed arrow function
// let abc = (a,b) => {
//     return a * b
// }
// console.log(abc(5,5))

// Single line statement

// let abc = (a,b) => a*b
// console.log(abc(5,5))

// Single line parameter statement

// let abc = a => a.toString()
// console.log(abc(5));

// class format

// class Student {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
// }
// const student = new Student('fahad','gmail.com');
// console.log(student)

// class Student {
//     constructor(name,email){
//         this.name= name;
//         this.email= email;
//     }
// }
// const student = new Student('fahad','gmail.com');
// console.log(student)