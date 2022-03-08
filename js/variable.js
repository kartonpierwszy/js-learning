//LET, CONST, VAR
//let - is block scoped
//var - is function scoped
/////////////////////////
//
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
// let jonas&matilda = 'JM'; //w zmiennej nie może występować znak &
// słowa zastrzeżone: function, name,
// nazwy zmiennych nie zaczynamy od dużej litery (działa ale...), jest to rzeznaczone dla nazw objectów?
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

///LET, CONST, VAR
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
lastName = 'Mikulski'; //działa, ale nie deklaruj w ten sposób, chyba że robisz to świadomie. Taki sposób tworzy propertie w globalnym obiekcie, a nie zmienną w scope,
console.log(lastName);
