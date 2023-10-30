const request = require('request')
 
// Request URL
url = process.argv[2];
 
request(url, (error, response, body) => {
    // Printing the error if occurred
    if (error) console.log(error)

    const films = JSON.parse(body).results;
    let n =0;
    for(const x of films){
      const filmChar = x.characters;
      for(const z of filmChar){
        if(z.includes('18')){
          n++;
        }
      }
    }

    console.log(n);
});
