const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const todosAnimais = () => {
  const todos = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
  return todos;
};

function countAnimals(animal) {
  if (!animal) {
    return todosAnimais();
  }
  if (animal.sex === undefined) {
    const animais = species.find((ele) => ele.name === animal.specie);
    const total = animais.residents;
    return total.length;
  }
  if (animal.sex !== undefined) {
    const animais = species.find((ele) => ele.name === animal.specie);
    const total = animais.residents;
    const sexAnimais = total.filter((elemento) => elemento.sex === animal.sex);
    return sexAnimais.length;
  }
}

module.exports = countAnimals;
