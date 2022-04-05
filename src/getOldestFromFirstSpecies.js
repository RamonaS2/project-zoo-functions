const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((fun) => fun.id === id);
  const animais = species.find((animal) => animal.id === funcionario.responsibleFor[0]);
  const animalMais = animais.residents.sort((x, y) => y.age - x.age)[0];

  return Object.values(animalMais);
}

module.exports = getOldestFromFirstSpecies;
