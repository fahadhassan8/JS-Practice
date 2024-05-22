// let arr = [2,4,6,6,9,5];

// Alternate of for loop it is array method forEach kuch return nhi krta he
// arr.forEach(function(value,index){
//     console.log(value,index)
// })

// return nhi krega
// let newArr = arr.forEach(function(value,index){
//     console.log(value,index)
//     return "ghous"
// })
// console.log(newArr)

// Alternate of for loop it is array method forEach but yeh ek new array create krk return krta he

// arr.map(function(value,index){
//     console.log(value,index)
// })

// let newArr = arr.map(function(value,index){
//     console.log(value,index)
//     return "ghous"
// })
// console.log(newArr)

// let newArr = arr.map(function(value,index){
//     console.log(value,index);
//     return value * 10;
// })
// console.log(newArr);

// For getting all value sum
// let arr = [2,4,6,6,9,5];
// let newArr = arr.reduce(function(a,b){ // a default value is 0 first time return krega undefined a me
//     // console.log(a)
//     // console.log(b)
//     return a + b
// },0)
// // console.log(arr)
// console.log(newArr)

// return new array true or false me chlta h true me same array dedega false m empty array 0 length;
//just use in array of object
// let arr = [
//     {num:2},{num:4},
//     {num:6},{num:6},
//     {num:9},{num:5}
// ]

// let newArr = arr.filter(function(value, index){
//     return value.num < 5
// })
// console.log(newArr)

// let arr = [2,4,6,6,9,5];
// let newArr = arr.filter(function(v,i){
//     return v === 4
// })
// console.log(newArr)
// let index = arr.indexOf(4)
// console.log(index)

// for array of object

// let arr = [
//     {num:2},{num:4},
//     {num:6},{num:6},
//     {num:9},{num:5}
// ]
// let newArr = arr.find(function(v,i){
//     return v.num > 4
// })
// console.log(newArr)

// let newArr = arr.findIndex(function(v,i){
//     return v.num === 4
// })
// console.log(newArr)

// for merging
// let arr = [{name: "ghous"}];
// let arr2 = [{name: "ahmed"}];
// // let merge = arr.concat(arr2);
// let spreadOperator = [...arr,...arr2]
// console.log(spreadOperator);