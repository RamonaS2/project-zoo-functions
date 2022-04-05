const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

// vou acessar o nome do animal ja q este vai ser passado como parametro

// species.forEach((elemento, i, array) => {
//   const residentes = elemento.residents;
//   residentes.find((ele) => {
//     console.log(ele.age);
//   });
// });

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((elemento) => elemento.name === animal);
  // seu código aqui
  // se animal possui a age especificada
  const returnEvery = especie.residents.every((idade) => idade.age >= age);
  return returnEvery;
}

module.exports = getAnimalsOlderThan;
