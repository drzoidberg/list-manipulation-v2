const animals = require('../../dataset/animals.Sync');
const personsSync = require('../../dataset/persons.Sync');
const personsASync = require('../../dataset/persons.Async');
const randomNumbersGenerator = require('../../dataset/numbers.random.Sync');


const filterResults = {
    'person\'s names named Rick': personsSync
                                        .filter(person => person.name.includes('Rick'))
                                        .map(person => person.name),
    'is there any cows in the animals list': animals
                                        .filter(animal => animal.name === 'cow')
                                        .map(animal => `the animal name is '${animal.name}' and its icon is ${animal.icon}`)
}
// const filterResults = persons.filter(person => person.status === 'Alive')
// const filterResults = 'filterResults'

module.exports = filterResults;