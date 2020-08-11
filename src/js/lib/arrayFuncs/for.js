const animals = require('../../dataset/animals.Sync');
const personsSync = require('../../dataset/persons.Sync');
const personsASync = require('../../dataset/persons.Async');
const randomNumbersGenerator = require('../../dataset/numbers.random.Sync');


const printForResults = [];

for(let i = 0; i < animals.length; i++) {
    printForResults.push(`the name of the animal is ${animals[i].name} and its icon is ${animals[i].icon}`)
}

const forResults = {
    'print all animals and icons': printForResults
}
module.exports = forResults;
