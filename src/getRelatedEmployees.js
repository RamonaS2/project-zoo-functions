const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// se o manager > manager.length então é um gerente

function isManager(id) {
  const gerente = employees.some((elemento) => elemento.managers.includes(id));

  return gerente;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const responsavel = employees.filter((fun) => fun.managers.includes(managerId));
    const pupilos = responsavel.map((ele) => `${ele.firstName} ${ele.lastName}`);
    return pupilos;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
