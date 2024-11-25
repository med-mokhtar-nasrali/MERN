//Prob 1
//random car will take the value of the first index in the array because there is no comma
//otherRandomCar will take the second value because of the comma
// to acces Honda we need to  const [getHonda]=cars
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
//Tesla 
//Mercedes
console.log(randomCar)
console.log(otherRandomCar)

//Prob 2
//we destruct the objet and got out the employeeName so we have the value 'Elon'
//We have a consolelog for the key so its an error we need to to call the object name to get a result
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
//Elon
//Error is not defined
console.log(otherName);
console.log(employeeName);

//Prob 3
//we created a variable password and we consolelog it 
//we have undefined because the hashed password isn't known for the object
//we need to add a key in the object to make the hashedpassword known
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// 12345
//undefined
console.log(password);
console.log(hashedPassword);


//Prob 4
//we got true and false because we are comparing two variables
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//2
const [,,,second] = numbers;//5
const [,,,,fourth] = numbers;//6
const [,,,,,,,,third] = numbers;//2
//Predict the output
//False
//True
console.log(first === second);
console.log(fourth)
console.log(first === third);

//Prob 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
const [,,,,, lastvalue] = secondKey;
//Predict the output
// value
//[1, 5, 1, 8, 3, 3]
//1
//5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log(lastvalue);


//6
//3 scopes 
//var beatles = Global Scope
//printNames = outer scope
//actuallyPrintingNames inner scope
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
        var name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);
//Paul was found at index 0
//George was found at index 1
//Jhon was found at index 2
// Ringo was found at index 3
//name and index after loop is Ringo : 4


//Prob 7

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }     

//we didn't invoke the function

//Prob 8

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    }
    actuallyPrintingNames();
}
printNames(beatles);

//we used const because its a global variable and it will not be changing so much
//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
// i think if we used let instead of const for the name it will be better


//Prob 9

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

//we did a copy of the object
//True
//False they have different memory references
