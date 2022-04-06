const imie = prompt(`Podaj nick github:`);
fetch(`https://api.github.com/users/${imie}`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
