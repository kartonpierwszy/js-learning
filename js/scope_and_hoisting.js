/** CW 1 Scope
function logName() {
  console.log(name);
  var name = 'Witold';
  console.log(user);
}
console.log(user);
var user = 'Daria';
logName();
*/
//
/** CW 2 Scope */
var a = '0';

function one() {
  var a = '1'; //zmienna lokalna
  console.log('zmienna w funkcji 1: ' + a);

  function two() {
    var a = '2';
    console.log('zmienna w funkcji 2: ' + a);

    function three() {
      var a = '3';
      console.log('zmienna w funckji 3: ' + a);
    }
    three();
  }
  two();
}
one();
console.log('zmienna w zasięgu globalnym: ' + a);
