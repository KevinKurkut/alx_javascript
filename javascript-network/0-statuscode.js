#!/usr/bin/node
const request = require('request');
// make a call to API
const url = process.argv[1];
const id = process.argv[2];
request.get('url+id', {encoding: "utf-8"})
 .then(response => {
    console.log(`code: ${response.status}`);
  })
