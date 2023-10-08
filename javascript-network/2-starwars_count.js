
const request = require('request');

const url = process.argv[2];

request.get(url, function(error, response, body) {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  if (response.statusCode !== 200) {
    console.error(`Status: ${response.statusCode}`);
    return;
  }

  const data = JSON.parse(body);
  const films = data.results;
  const characterId = "18";
  const wedgeAntillesFilms = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
  console.log(wedgeAntillesFilms.length);
});
