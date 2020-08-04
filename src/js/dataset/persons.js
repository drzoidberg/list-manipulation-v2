const axios = require('axios').default;

let persons = [];

async function getPersons() {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        // console.log(response.data.results);
    } catch (error) {
        console.error(error);
    }
}

persons = getPersons();

module.exports = {
    persons
}