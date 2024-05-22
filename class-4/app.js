// var students = ["Fahad","Hasan","Adeel"];

// console.log(students[2]);

// var students = ["Fahad","Hasan","Adeel"];

// Array update
// students[3] = "Ali";

// console.log(students);

// for finding length
// console.log(students.length);

// for finding last array value

// students[students.length - 1] = "xyz";
// console.log(students);

// var students = ["Fahad", "Hasan"];

// students[5] = "Abc";

// console.log(students);

//REMOVE From Last and return deleted value

// var students = ["Fahad","Hasan","Adeel"];

// students.pop()
// console.log(students);
// var returnValue = students.pop();
// console.log(returnValue)

// console.log(students);

// ADD in last can add multiple values and return length

// var students = ["Fahad","Hasan","Adeel"];
// var returnValue = students.push("khan","sb","he");
// console.log(students)
// console.log(returnValue)

// REMOVE from start and return deleted value

// var students = ["Fahad","Hasan","Adeel"];
// console.log(students);
// var returnValue = students.shift()
// console.log(students);
// console.log(returnValue);

// ADD value in start and return length

// var students = ["Fahad","Hasan","Adeel"];
// console.log(students);
// var returnValue = students.unshift("Ghous");
// console.log(students);
// console.log(returnValue);

// DELETE/ADD/UPDATE Value any where from array CENTER/START/LAST

// var students = ["Fahad","Hasan","Adeel"];

// for delete
// students.splice(1,1); 
// students.splice(2, 0, "Abc", "Xyz");
// console.log(students.splice(1,1));
// Shows empty array in addition
// var returnValue = students.splice(2, 0, "Abc", "Xyz");

// var nam = ["fahad","adeel","sadiq","ghous","khan"];
// console.log(nam);
// returnValue = nam.splice(2,2,"abc");
// console.log(nam);
// console.log(returnValue);

// Shows deleted value
// var returnValue = students.splice(1,1);

// console.log(returnValue);
// console.log(students);

//Copy any value from existing array to another new array
//always shows answer in written value

// var students =["Fahad", "Hassan", "Adeel"];

// students.slice(1,2);
// var copyArr = students.slice(1,2);

// if you want a value from mid to til end give just one selected index value
// and dont give second num eg students.slice(1);

// console.log(copyArr);
// console.log(students);

//SLICE Method also works in string as works in array examples;

// var str = "Fahad Hassan";

// var copy = str.slice(6,12);

// console.log(copy);

// var arr = ["ghous", "sadiq", "sualeh"];

// arr[1] = [arr[0], arr[0] = arr[1][0]];
// console.log(arr);