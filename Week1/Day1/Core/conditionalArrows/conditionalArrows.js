//Prob 1

const checkAge = (age) => 
    age >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(checkAge(18));

//Prob 2

const checkWeather = (weather) =>
    weather == "raining" ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(checkWeather("Put Weather Here"));

//Prob 3
const checkEven = (num) =>
    num % 2 == 0 ? "That's an even number!" : "That's an odd number!"
console.log(checkEven(6));

//Prob 4
const greeter = (num1,num2) =>
    num1 > num2 ? num1 + " is more than " + num2 : num1 + " is less than " + num2
console.log(greeter(3,5));

