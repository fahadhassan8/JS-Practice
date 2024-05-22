// toFixed() decimal value set krta h or return string krta hai
// .charCodeAt() "S-key code btata hai" number me

//pswrd generator
// var randomValues = "sdfghjukl3456789dfghjkDRTFGYHJKJBGF#$%^&*(";
// var password = "";
// for(i = 0; i<10; i++){
//     var randomNumber = Math.floor(Math.random() * randomValues.length);
//     password +=randomValues[randomNumber]
// }
// console.log(password)

// CHAPTER 31  GETTING THE CURRENT DATE AND TIME

// var date = Date.now();  // Keyword
// console.log(date);

// var date = new Date(); // Type Object
// console.log(date);

// var date = new Date(); // Type Object
// console.log(typeof date.toString());
// console.log(date)
// var date = new Date();
// console.log(date.getDate()); // Range 0-31 

// var day = new Date();
// var dayNames = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
// console.log(dayNames[day.getDay()]); // start date from sunday and sunday is '0'

// var month = new Date();
// var monthNames = ["January","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
// console.log(monthNames[month.getMonth()]); // start month from January and sunday is '0'

// var getFullYear = new Date();
// console.log(getFullYear.getFullYear());

// var hours = new Date();
// console.log(hours.getHours());

// var minutes = new Date();
// console.log(minutes.getMinutes());

// var seconds = new Date();
// console.log(seconds.getSeconds());

// var milliSeconds = new Date();
// console.log(milliSeconds.getMilliseconds());


// var time = new Date();
// console.log(time.getTime());  // Milliseconds since midnight, January 1, 1970


// CHAPTER 33 SPECIFYING A DATE AND TIME

// let dayNames = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
// let date = new Date('17 Jun 1998');
// console.log(dayNames[date.getDay()]);
// console.log(date)