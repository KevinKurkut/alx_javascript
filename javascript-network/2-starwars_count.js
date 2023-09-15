#!/usr/bin/node
const request =require('request');
request(process.argv[2], function (error, response, body) {
    if (error) {
        console.log(error);
    } else if (response.statusCode === 200) {
        const js_object = JSON.parse(body).results;
        const characterId = '18';
        const wedgeAntilles = js_object.filter(counter=>{
            return counter.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
        })
    } else {
        console.log('code:' +response.statusCode);
    }
});
