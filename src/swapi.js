const swapiUrl = 'https://swapi.dev/api/';
const swapiPersons = 'people';

class Swapi {

    async getPersons() {
        const response = await fetch(`${swapiUrl}${swapiPersons}`);
        return response;
    }

    async getPerson(id) {
        const response = await fetch(`${swapiUrl}${swapiPersons}/${id}`);
        return response;
    }
}

module.exports = Swapi;