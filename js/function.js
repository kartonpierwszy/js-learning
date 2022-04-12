//FUNCTIONS
//
/*
function logger() {
  console.log('My name is Ralph');
}
*/
// callin / running / invoking function
/*
logger();
logger();
logger();
*/
//
/*
console.log('Function declaration');
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
*/
//
/*
console.log('Function expression');
const fruitProcessor2 = function (apples, oranges) {
  console.log(apples, oranges);
  const juice2 = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice2;
};
const appleJuice2 = fruitProcessor2(3, 6);
console.log(appleJuice2);
console.log(fruitProcessor2(3, 6));
*/
//
// POWER of the function!
// reuse the function with different input values
// and then get a differrent output!
/*
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = '23';
*/
//
// FUNCTION DECLARATIONS
const age1 = calcAge1(1991); //Przy function declaration funkcję można wywołać przed jej deklaracją

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.l og(age1);

// FUNCTION EXPRESSION
const age2 = calcAge2(1991); // Przy function expression wywołanie funckji przed jej deklaracją da błąd (hasło HOISTING!)

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
console.log(age1, age2);
