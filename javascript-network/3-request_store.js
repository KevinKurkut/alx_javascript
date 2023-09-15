#!/usr/bin/node
const request =require('request');
const fs = require("fs");
const fileName = process.argv[3];
request(process.argv[2], function (error, response, body, fileName) {
    if (error) {
        console.log(error);
    } else if (response.statusCode === 200) {
        
        fs.writeFile(fileName, body);

    } else {
        console.log('code:' +response.statusCode);
    }
});
