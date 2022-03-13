//////////////////////////////////////////////////////////////////
//LET, CONST, VAR
//let, const - is block scoped
//var - is function scoped
/////////////////////////
/**
 * console.log(`Hello guys`);
 * let js = 'amazing';
 * // let js = 'boring';
 * if (js === 'amazing') alert('JS is FUN');
 * console.log('JS is FUN');
 * console.log(10 + 11 + 22);
 */
//
/**
 //////////////////////////////////////////////////////////////////
 * VARIABLE NAME CONVENTION
 */
/**
 *  * nazwy zmiennych nie mogą zawieerać spacji, kropki, przecinka, myślnika. Może zawierać podkreślenie.
 * nazwy zmiennych warto pisać po angielsku
 * używaj camelCase lub zapis z podłogą
 * let 3years = 3; //nazwa zmiennej nie może zaczynać się cyfrą
 * let jonas&matilda = 'JM'; //w zmiennej nie może występować znak &
 * słowa zastrzeżone: function, name,
 * nazwy zmiennych nie zaczynamy od dużej litery (działa ale...), jest to przeznaczone dla nazw object'ów?
 * let y3years = 3; - nazwy nie zaczynamy od cyfry
 * console.log(y3years);
 * let PI = 3.1415; //nazwa z dużych liter jest zarezerwowana dla zmiennych, które się nie zmieniają... ?!?
 */

//////////////////////////////////////////////////////////////////
/** BOOLEAN VALUE
 * true;
 * let javascriptIsFun = true;
 * console.log(javascriptIsFun);
 *
 * console.log(typeof true);
 * console.log(typeof javascriptIsFun);
 * // console.log(typeof 23);
 * // console.log(typeof 'Haski');
 *
 * javascriptIsFun = 'YES';
 * console.log(typeof javascriptIsFun);
 *
 */

//////////////////////////////////////////////////////////////////
/** UNDEFINED
 * let year;
 * console.log(year);
 * console.log(typeof year);
 *
 * year = 1991;
 * console.log(typeof year);
 *
 */

//////////////////////////////////////////////////////////////////
/** TYPE OF OPERATOR
 * console.log(typeof null);
 */
//////////////////////////////////////////////////////////////////
/** LET, CONST, VAR
 */
/**
 * let age = 30;
 * age = 31;
 * // console.log(age);
 * const birthYear = 1991;
 * // birthYear = 1990;
 * // const year;
 *
 * var job = 'programmer';
 * job = 'teacher';
 *
 * lastName = 'Mikulski'; //działa, ale nie deklaruj w ten sposób, chyba że robisz to świadomie. Taki sposób tworzy propertie w globalnym obiekcie, a nie zmienną w scope,
 * console.log(lastName);
 *
 */
//
/**
 // let a = 20; //zmienna globalna
 // {
   //   let a = 30; //zmienna lokalna, od klamry do klamry
   //   console.log(a);
   // }
   // console.log(a);
   */
/**
   { 
     let a = 'Ala';
     console.log(a); // wyświetli wartość zmiennej a, czyli 'Ala'
    }
{
  console.log(a); // error. nie ma takiej zmiennej
}
{
  let a = 'Ola';
  console.log(a); // wyświetli wartość zmiennej a, czyli 'Ola'
}
console.log(a); // brak zmiennej a, "error: a is not defined"
 */
//
/** 
 let txt = 'Ryszard Trąbka'; // zmienna
 txt = 'inny tekst'; // zmieniamy wartość zmiennej
 
const nr = 22; //zmienna
nr = 103; // błąd - const to stała, nie można zmienić jej wartości
*/

//////////////////////////////////////////////////////////////////
// PRACTICE
//
/** Button
 //pobieram element z html'a i przypisuję ją do zmiennej btn
 const btn = document.querySelector('.button');
 // wykonuje działania/operacje na zmiennej btn
 btn.classList.add('btn-primary');
 btn.setAttribute('title', 'Kliknij mnie!');
btn.innerText = 'Kliknij mnie';
 */
//
/** Array  */
//
/**
const tab = [1, 2, 3]; // obiekt tablica przypisany do zmiennej const, czyli stałej, przez co nie można zmienić jej wartości.
console.log(tab);
tab[3] = 4;
console.log(tab);
tab.push(5, 6);
tab.push(5, 6);
console.log(tab);
tab = [1, 2, 3, 4, 5, 6]; // tutaj wyrzuci błąd, bo chcemy nadpisać zmienną tab
console.log(tab);
*/
//
