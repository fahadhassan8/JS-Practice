// let firstName = 'ghous';

// let obj = {
//     firstName,
//     lastName:"ahmed",
//     ['class'+'details']: "WAM"
// }
// console.log(obj)

// ternary operator

// let user = true;

// let userValue = user ? 'Ghous ahmed' : 'Not prvided';

// console.log(userValue);

// let user = 'Ghous ahmed';

// let userValue = user ? 431 : 'Not prvided';

// console.log(userValue);

// let num = 100_00_00_00_000
// console.log(num)

// ternary operstor short way
// let nam = "Fahad";
// let userName = nam || "nahi h";
// console.log(userName)

// ye higher order func nh h
// function num(a){
    //     return function(b){
        //         return function(c){
            //             return a * b * c
            //         }
//     }
// }
// console.log(num(2)(2)(2))


// ek func jo return krrha he dusra func usy higher order func kehty hen

// Recursion

// var count = 0;
// function abc(){
//     count++
//     console.log(count)
//     if(count < 10){
//         abc()
//     }
// }
// abc()

// generator function(){}

// function* foo(){
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }
// const gen = foo();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// Promise most imp

// isk andr JS ki koi b coding kr skty hen array object loop if else etc
// let getValue = new Promise((resolve,reject)=>{
//     // resolve() 
//     // reject()
//     // na reject na resolve to state pending pr h
//     setTimeout(()=>{
//         reject("data agya")
//         // resolve("data agya")
//     },5000)
// })
// getValue
//     .then((res)=>console.log("res:",res))
//     .catch(err => console.log("err:",err))

// let getValue = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Data Agya");
//         // reject("Data Gaya");
//     },3000)
// })
// getValue
//     .then((res) => console.log("resolve: ", res))
//     .catch((err) => console.log("Reject: ", err))

                        // API Application Programming Interface
// fake API's Json place holder
// fake store api
// fetch('https://fakestoreapi.com/products') // khd b ek promise h jo backend sy milrha h
// .then(res => res.json())
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// let getData = new Promise ((resolve, reject) => {
//     fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(res => resolve(res))
//     .catch(res => reject(err))
// }) 
// getData
//     .then(res => console.log('resolve: ',res))
//     .catch(err => console.log('reject: ',err))






