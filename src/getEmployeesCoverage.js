const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

const fucionarios = (funcionario) => {
  const fun = employees.find((element) => element.id === funcionario.id
    || element.firstName === funcionario.name
    || element.lastName === funcionario.name);
  return fun;
};

const funcionarios = (fun) => ({
  id: fucionarios(fun).id,
  fullName: `${fucionarios(fun).firstName} ${fucionarios(fun).lastName}`,
  species: fucionarios(fun).responsibleFor.map((element) =>
    species.find((item) => element === item.id).name),
  locations: fucionarios(fun).responsibleFor.map((element) =>
    species.find((item) => element === item.id).location),
});

const dados = () => employees.map((elemento) => ({
  id: elemento.id,
  fullName: `${elemento.firstName} ${elemento.lastName}`,
  species: elemento.responsibleFor.map((elem) =>
    species.find((item) => item.id === elem).name),
  locations: elemento.responsibleFor.map((elem) =>
    species.find((item) => item.id === elem).location),
}));

function getEmployeesCoverage(funcionario) {
  if (funcionario === undefined) {
    return dados();
  }
  const func = fucionarios(funcionario);
  if (func === undefined) {
    throw new Error('Informações inválidas');
  }

  return funcionarios(funcionario);
}

module.exports = getEmployeesCoverage;
