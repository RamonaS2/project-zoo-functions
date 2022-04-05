/* eslint-disable max-len */
const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// employees.forEach((elemento, i, array) => {
//   console.log(elemento.lastName);
// });

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const semResultado = {};
    return semResultado;
  }
  const funcionarios = employees.find((fucionarios) => fucionarios.firstName === employeeName || fucionarios.lastName === employeeName);

  return funcionarios;
}

module.exports = getEmployeeByName;
