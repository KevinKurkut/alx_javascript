const request = require('request');

const url = "https://swapi-api.alx-tools.com/api/films/";

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
  const wedgeAntillesFilms = data.results.filter(film => film.characters.includes("18"));
  console.log(wedgeAntillesFilms.length);
});
