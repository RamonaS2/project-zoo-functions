const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const animaisFiltrados = species.filter((animal) =>
    ids.find((id) => id === animal.id));

  return animaisFiltrados;
}

module.exports = getSpeciesByIds;
