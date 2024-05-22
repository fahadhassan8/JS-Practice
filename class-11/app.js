                // CONSTRUCTOR FUNCTION
// OBJECT KI COPY BNA KR DETA H
//for making object jo ek object k sth krty h iska bh same kam h
// 1st letter calles constructor function h
function Car(){ //for static
    // use this keyword = name jo h wo property nam h
    this.name = "Alto";
    this.model = '2024';
    this.price = 5467890;
}
// way to call make a variable and via new keyword

var car1 = new Car()
console.log(car1)

function Car(name,model,price){ //for dynamic
    // use this keyword = name jo h wo property nam h
    this.name = name;
    this.model = model;
    this.price = price;
    this.getPrice = function (){
        return this.price
    }
}
// way to call make a variable and via new keyword

var car1 = new Car("Alto","2024",543245);
var car2 = new Car("Mehran","2023",765245)
// console.log(car1.getPrice())
console.log(car2)

var car1 = new Car()
console.log(car1)

function Car(name,model,price){ //for dynamic
    // use this keyword = name jo h wo property nam h
    this.name = name;
    Car.prototype.model = model;
    this.price = price;
}
Car.prototype.getPrice = function(){
    return this.price
}
// way to call make a variable and via new keyword

var car1 = new Car("Alto","2024",543245);
var car2 = new Car("Mehran","2023",765245)
console.log(car1.getPrice())
console.log(car2)


// hasOwnProperty object ki real prop check krk btata hai or 
// property ka name hmesha string me dengy
console.log(car1.hasOwnProperty('name')) // true ayga
console.log(car1.hasOwnProperty('getPrice')) // false ayga qk ye iski prototype property me save h

// hasOwnProperty object ki real prop check krk btata hai or 
// property ka name hmesha string me dengy
console.log(car1.hasOwnProperty('name')) // true ayga
console.log(car1.hasOwnProperty('getPrice')) // false ayga qk ye iski prototype property me save h
