#!/usr/bin/node
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
  // script that prints the number of movies where the character “Wedge Antilles” is present
  const films= JSON.parse(body).results;
  const id = "18";
  const wedgeFilms = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`));
  console.log(wedgeFilms.length)
});
