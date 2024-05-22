// Q 1

// let arr = [[],[]];

// Q 2

// let arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,0,4,3]
// ]
// for(i = 0; i<arr.length; i++){
//     document.write(arr[i] + "</br>");
// }

// Q 3

// for(i = 1; i <= 10; i++){
//     console.log(i)
// }

// Q 4

// let table = +prompt('Enter your table num',2);
// let tableLength = +prompt('Enter your table length',10);

// for(let i = 1; i <= tableLength; i++){
//     document.write(`${table} X ${i} = ${table * i} </br>`)
// }

// Q 5

let arr =[0,1,2,3,4,5,6,7,8,9,10];

let odd = [];
let even = [];

for(i = 0; i < arr.length; i++){
    if(arr[i] %2 === 0 ){
        arr.push(even);
    }
    else{
        arr.push(odd)
    }
}console.log(odd)
console.log(even)