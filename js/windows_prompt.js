/**
 * WINDOWS PROMPT
 */
//
// CONSOLE.LOG
console.log(
  'Wypisuje teksty, zmienne, wynik,  w konsoli. Przydatne przy sprawdzaniu, debugowaniu kodu.'
);
// ALERT WINDOW
alert('Wszystko ok!');
//
// CONFIRM WINDOW - do poteirdenia przez użytkownika
//confirm('Czy wszystko ok?');
if (confirm('Czy jestes pewien, że chcesz kontynuować?')) {
  alert('To kontynuuj :)');
} else {
  alert('Przykro nam że rezygnujesz..');
}
//
// PROMPT WINDOW
const name = prompt('Podaj imię:');
if (name) {
  alert('Witaj ' + name);
} else {
  alert('Anulowałeś akcje a okienko zwróciło ' + name);
}
//
//
