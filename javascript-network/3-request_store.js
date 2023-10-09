const request = require('request')
const fs = require('fs')
request(process.argv[2], function(error, response, body) {
    if (err == null){
        fs.writeFileSync(process.argv[3].body)
    }
});
