// let interval;
// let timer = 0;
// function incTimer(){
//     timer++
//     console.log(timer)
// }
// function startTImer(){
//    interval =  setInterval(incTimer,1000);
// }
// function stopTImer(){
//     clearInterval(interval)
// }

//In a single function

// let interval;
// let timer = 0;
// let play = false;

// let incTimer = () => {
//     timer++;
//     console.log(timer)
// }
// let togglerTimer = () => {
//     if(play){
//         play = false;
//         clearInterval(interval);
//         event.target.innerText = "Start";
//     }
//     else{
//         play = true;
//         interval = setInterval(incTimer,1000);
//         event.target.innerText = "Stop";
//     }
// }
//  khud call hony wala anonymus func
// (function() => {
    
// }, );                //callback func ES 5 ka feature h

// 3sec bd return krega fahad Asynchronus code h mtlb ye line by line nh chlegi
// setTimeout(() => {
//     let name = "Fahad"
//     console.log(name)
// }, 3000);

// also an asynchronus code
// HTTP Method 
// GET for getting
// POST data saving purpose
// Delete for data deleting
// Put  for replacing data
// Patch    for updating 1-2 data

//JS default method
// fetch('https://fakestoreapi.com/products')
// // for data read purpose
// .then(function(res){
//     return res.json();
// })
// // pehly wly then ki return value second value milegi jissy data readable bnega
// .then(function(res){
//     console.log('then',res);
// })
// .catch(function(err){
//     console.log('catch',err);
// })

// CallBack func concept
// let getData = (CallBack) => {
//     fetch('https://fakestoreapi.com/products')
// // for data read purpose
// .then(function(res){
//     return res.json();
// })
// // pehly wly then ki return value second value milegi jissy data readable bnega
// .then(function(res){
//     console.log('then',res);
// })
// .catch(function(err){
//     console.log('catch',err);
// })
// }
// getData(function(){})

// Promise asynchronus

// ppromise ek constructor he
// function getData(){
//     return new Promise(function(resolve,reject){
//         fetch('https://fakestoreapi.com/products')
//         .then(function(res){
//             return res.json()
//         })
//         .then(function(res){
//             resolve(res)
//         })
//         .then(function(err){
//             reject(err)
//         })
//     })
// }
// getData()
// .then(function(res){
//     console.log("data",res)
// })
// .catch(function(err){
//     console.log("data",err)
// })
// let getData = new Promise ((resolve, reject) => {
//     fetch("https://fakestoreapi.com/products")
//     .then(res => res.json())
//     .then(res => resolve(res))
//     .catch(res => reject(err))
// }) 
// getData
//     .then(res => console.log('resolve: ',res))
//     .catch(err => console.log('reject: ',err))

// for location
// navigator.geolocation.getCurrentPosition(function(location){
//     console.log('location',location);
// })
