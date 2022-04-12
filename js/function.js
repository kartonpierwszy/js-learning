//FUNCTIONS
//

function logger() {
  console.log('My name is Ralph');
}
// callin / running / invoking function
logger();
logger();
logger();
//
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
//
// POWER of the function!
// reuse the function with different input values
// and then get a differrent output!
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = '23';
