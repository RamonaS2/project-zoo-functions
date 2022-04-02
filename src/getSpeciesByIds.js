/* eslint-disable global-require */
const data = require('../data/zoo_data');
// se a especie index contiver o id passsado como parametro eu vou retornar uma array com esse;
// toContain()

// console.log(Object.entries(species[0]));
// const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = require('../data/zoo_data');
  const animaisFiltrados = species.filter((animal) => ids.find((id) => id === animal.id));

  return animaisFiltrados;
}

module.exports = getSpeciesByIds;
