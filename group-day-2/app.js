// let vowels = ['a','e','i','o','u'];
// let userInput = prompt("Enter a Character").toLowerCase();
// if(vowels.indexOf(userInput) != -1){
//     alert('Its a vowel');
// }
// else{
//     alert('Its a consonent');
// }

                //PDF 13 to 15
// Q 2
// let students = [
//     {
//         student1:{
//             name: 'fahad',
//             scl: 'SMIT',
//             roll:123
//         },
//         student2:{
//             name: 'adeel',
//             scl: 'SMIT',
//             roll:321
//         }
//     }
// ]
// Q 3

// let arr = ['Fahad','Adeel','Musaddique'];

// Q 4

// let education = ['SSC', 'HSC', 'BCS',
//     'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// for(i = 0; i <br education.length; i++){
//     document.write(education[i] + '</br>');
// }

                    // MARKSHEETS
// let subject1 = +prompt('English');
// let subject2 = +prompt('Urdu');
// let subject3 = +prompt('Maths');

// if(subject1 > 100 || subject1 <br 0 || subject2 > 100 || subject2 <br 0 || subject3 > 100 || subject3 <br 0){
//     alert('Please input valid marks');
// }

// let totalMarks = 300;
// document.write("Total Marks = 300" + '</br>');
// let obtaninedMarks = subject1 + subject2 + subject3;
// document.write("Obtained Marks = " + obtaninedMarks + '</br>');
// let percentage = (obtaninedMarks/totalMarks) * 100;
// document.write("Percentage: " + percentage + ' % ' + "</br>");

// if(percentage >= 80 && subject1 >= 40 && subject2 >= 40 && subject3 >= 40){
//     document.write(" Grade: A + One " + "</br>")
//     document.write(" Remarks: Passed" + "</br>")
// }else if(percentage >= 70 && subject1 >= 40 && subject2 >= 40 && subject3 >= 40){
//     document.write(" Grade: A " + "</br>")
//     document.write(" Remarks: Passed" + "</br>")
// }else if(percentage >= 60 && subject1 >= 40 && subject2 >= 40 && subject3 >= 40){
//     document.write(" Grade: B " + "</br>")
//     document.write(" Remarks: Passed" + "</br>")
// }else if(percentage >= 50 && subject1 >= 40 && subject2 >= 40 && subject3 >= 40){
//     document.write(" Grade: C " + "</br>")
//     document.write(" Remarks: Passed" + "</br>")
// }else if(percentage >= 40 && subject1 >= 40 && subject2 >= 40 && subject3 >= 40){
//     document.write(" Grade: D " + "</br>")
//     document.write(" Remarks: Passed" + "</br>")
// }else{
//     document.write(" Remarks: Failed" + "</br>")
// }

// Q 9

// let color = ['red','blue','green'];
// document.write("Before Updating Color: "+ color + '</br> ')
// let userColor = prompt('Enter your color');
// color.unshift(userColor);
// document.write("After Update: " + color + '</br>');

// document.write("Before Updating Color: "+ color + '</br> ')
// let user_color = prompt('Enter your color you want to add end');
// color.push(user_color);
// document.write("After Update: " + color + '</br>');

// let color1 = prompt('ADD color ONE');
// let color2 = prompt('ADD color TWO');

// document.write("Before Updating Color: "+ color + '</br> ')
// color.splice(0,0,color1,color2);

// document.write("After Update: " + color + '</br>');

// let index = prompt('Enter your desired index');
// let color3 = prompt('Enter your desired color');

// document.write("Before Updating Color: "+ color + '</br> ')
// color.splice(index,0,color3);
// document.write("After Update: " + color + '</br>');

// document.write("After Update: " + color + '</br>');

// let index = prompt('Enter your desired index');
// let color3 = prompt('How Many color do you want to delete');

// document.write("Before Updating Color: "+ color + '</br> ')
// color.splice(index,color3);
// document.write("After Update: " + color + '</br>');

// Q 10

// let stuScore = [320,650,230,450,200,540];

// document.write('Scores Without Sort: ' + stuScore + "</br>");

// stuScore.sort();

// document.write("Sorted Scores: " + stuScore + '</br>');

// Q 11

// var cities = ['Karachi','Lahore','Islamabad','Faislabad','Peshawar'];

// var newC = cities.slice(1,3);

// console.log(newC);

// Q 12

// var cat = ['This','is','my','cat'];

// var str = cat.join(" ")

// console.log(str);

// Q 15
var phoneManufacturer = [
    "Apple",
    "Samsung",
    "Motorola",
    "Nokia",
    "Sony",
    "Haier"
];

// Initialize the dropdown string
var dropdownHTML = "<select>";

// Add options for each manufacturer
for (var i = 0; i < phoneManufacturer.length; i++) {
    dropdownHTML += "<option>" + phoneManufacturer[i] + "</option>";
}

// Close select element
dropdownHTML += "</select>";

// Write the dropdown menu to the document
document.write("Select a Phone Manufacturer: " + dropdownHTML);
