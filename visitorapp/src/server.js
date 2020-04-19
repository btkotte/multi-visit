const express = require('express');
const redis = require('redis');
const app = express();

const crypto = require("crypto");
const serverId = crypto.randomBytes(5).toString('hex');

//Provide DNS name/IP address and port
const env = require("./env.js");
const client = redis.createClient({
  host: env.dbHost,
  port: env.dbPort
});

app.get('/', (req, res) => {

  //Read key from the database
  client.get('visitors', (err, visitors) => {

    //Convert the value into integer
    var currVisits = parseInt(visitors);

    //If visitors is not present in database then initilize 1
    if(isNaN(currVisits)) {
      currVisits = 1;
    }

    //Send the response back to the user
    res.send('You are visitor: ' + currVisits + ". Request came to server: " + serverId);

    //Increment and save the new value to the database
    client.set('visitors', currVisits + 1);
  });

});

app.listen(9999, () => {
  console.log('visitorsapp started on port 9999');
});
