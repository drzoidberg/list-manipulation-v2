const personsSync = require('../../dataset/persons.Sync');
const personsASync = require('../../dataset/persons.Async');


const filterResults = {
    'person\'s names named Rick': personsSync
                                        .filter(person => person.name.includes('Rick'))
                                        .map(person => person.name)
}
// const filterResults = persons.filter(person => person.status === 'Alive')

module.exports = filterResults;