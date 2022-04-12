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
/*
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
*/
//
// FUNCTION CALLING OTHER FUNCTION
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange Pieces`;
  return juice;
}

const finalJuice = fruitProcessor(4, 3);
console.log(finalJuice);
*/
//
// PRACTISE
const calcAge = function (year) {
  return 2037 - year;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
