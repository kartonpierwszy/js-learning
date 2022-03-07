/////////////////////////
// CAPTER 1
/////////////////////////

// ----------------------------------------------
// console.log(`Hello guys`);
// let js = 'amazing';
// // let js = 'boring';
// if (js === 'amazing') alert('JS is FUN');
// console.log('JS is FUN');
// console.log(10 + 11 + 22);
//
/*
// Variable name conventions
//
// let 3years = 3; //nazwa zmiennej nie może zaczynać się cyfrą
//let jonas&matilda = 'JM'; //w zmiennej nie może występować znak &
//w nazwqach zmiennych nie używamy znaków: &
//słowa zastrzeżone: function, name,
//nazwy zmiennych nie zaczynamy od dużej litery (działa ale...), jest to rzeznaczone dla nazw objectów?
// let y3years = 3;
// console.log(y3years);
//
// let PI = 3.1415; //nazwa z dużych liter jest zarezerwowana dla zmiennych, które się nie zmieniają
//
// Boolean value
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Haski');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// type of operator
console.log(typeof null);
*/
// ------------------------------------------ ----
//
/*
/////////////////////////
// CAPTER 2. let, const, var
//let - is block scoped
//var - is function scoped
/////////////////////////
//

let age = 30;
age = 31;
// console.log(age);
//
const birthYear = 1991;
// birthYear = 1990;
// const year;
//
var job = 'programmer';
job = 'teacher';
//
lastName = 'Mikulski'; //działa, ale nie deklaruj w ten sposób, chyba że robisz to świadomie. Taki sposób tworzy properti w globalnym obiekcie, anie zmieną w scopie,
console.log(lastName);
*/
//
/////////////////////////
// CAPTER 3. Basic operators
/////////////////////////
//
/*
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2 = 8

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
//
//Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);
//
// Comparison operators
console.log(`Jonas is ${ageJonas}, Sarah is ${ageSarah}`);
console.log(ageJonas > ageSarah); // >, <, >=, <=,
console.log(ageSarah >= 18);

const isFuulAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Operator procedence
// documentation https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(`Jonas is ${ageJonas}, Sarah is ${ageSarah}`);

console.log(now - 1991 > now - 2018);
//
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

//
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
//
/////////////////////////
// CHALLENGE #1
/////////////////////////
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 95;
const heightJohn = 1.76;
//;
const bmiJonas = massJohn / heightJohn ** 2;
const bmiMark = massMark / heightMark ** 2;
console.log(`Jonas BMI is ${bmiJonas}, where Mark BMI is ${bmiMark}`);
//
const markHigherBMIa = bmiMark > bmiJonas;
console.log(markHigherBMIa);
//
const markHigherBMIb = massMark / heightMark ** 2 > massJohn / heightJohn ** 2;
console.log(markHigherBMIb);
*/

//
/////////////////////////
// CAPTER 4. Strings and template literals
/////////////////////////
//
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
//
// v1
const jonasV1 =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonasV1);
// v2
const jonasV2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasV2);
//multiple   line strings
console.log('String with \n multiple \n lines.');
console.log(`String with
multiple
 lines.`);
 */
//
/////////////////////////
// CAPTER 4. Taking decision: if - else statements
/////////////////////////
//
/*
const age = 15;
// const isOldEnough = age >= 18;
// console.log(isOldEnough);
if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}
*/
//
/*
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
//
/////////////////////////
// CHALLENGE #2 - if - else statements
/////////////////////////
//
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 95;
const heightJohn = 1.76;
//;
const bmiJohn = massJohn / heightJohn ** 2;
const bmiMark = massMark / heightMark ** 2;

console.log(bmiJohn, bmiMark);

if (bmiJohn > bmiMark) {
  console.log(
    `John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark}).`
  );
} else if (bmiJohn < bmiMark) {
  console.log(
    `Mark's BMI (${bmiMark}) is higher then John's BMI (${bmiJohn}1).`
  );
} else {
  console.log(`John's and Mark's BMI is equal :)`);
}
