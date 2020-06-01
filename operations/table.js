'use strict'

const harperive = require('harperive');

const DB_CONFIG = require('../config');

const Client = harperive.Client;
const client = new Client(DB_CONFIG);


// create a table

client.createTable(
  {
    schema: "organisation",
    table: 'users',
    hashAttribute: 'user_id',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);


// describe table

client.describeTable(
  {
    schema: "organisation",
    table: 'users',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);


// drop a table

client.dropTable(
  {
    schema: "organisation",
    table: 'users',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);

// drop attributes of a table

client.dropAttribute(
  {
    schema: "organisation",
    table: 'users',
    attribute: 'usename',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
