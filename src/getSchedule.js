const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

console.log(species, hours);

const conograma = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers',
      'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function fechado() {
  return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
}

const bichos = (animal) => {
  const exibidos = species.find((element) => element.name === animal).availability;
  return exibidos;
};

const dia = (day) => {
  const diaSem = ({
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    },
  });
  return diaSem;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: fechado() };
  }
  const dias = Object.keys(hours);
  if (dias.includes(scheduleTarget)) {
    return dia(scheduleTarget);
  }

  const animalName = species.map((element) => element.name);
  if (animalName.includes(scheduleTarget)) {
    return bichos(scheduleTarget);
  }

  return conograma;
}

module.exports = getSchedule;
