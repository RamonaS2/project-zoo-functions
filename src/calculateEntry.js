const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const menosDezoito = entrants.filter((criança) => criança.age < 18);
  const crianças = menosDezoito.length;
  const maisDezoito = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50);
  const adultos = maisDezoito.length;
  const maisCinquenta = entrants.filter((idoso) => idoso.age >= 50);
  const idosos = maisCinquenta.length;
  return { child: crianças, adult: adultos, senior: idosos };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const pessoas = countEntrants(entrants);
  const entrantsAdult = pessoas.adult * prices.adult;
  const entrantsChild = pessoas.child * prices.child;
  const entrantsSenior = pessoas.senior * prices.senior;
  return entrantsAdult + entrantsChild + entrantsSenior;
}

module.exports = { calculateEntry, countEntrants };
