//String
const text1 = 'Ala ma kota a kot ma Ale';
console.log(text1);
const text2 = 'Piękna pogoda';
console.log(text1 + '. ' + text2);
console.log(`${text1}` + '. ' + `${text2}`); //Tworzenie stringów za pomocą grawisów to tzw Template string
const text3 = `Test składający się
z kilku linii,
wierszy`;
console.log(text3);
const age = 15;
const text4 = `Kot ma ${age} lat.`;
const text5 = 'kot Ali ma już ' + age + ' lat.';
console.log(text4);
console.log(text5);
console.log(text5.length);
const length = text5.length;
console.log(length);
