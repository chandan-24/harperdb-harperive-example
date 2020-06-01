'use strict'

const harperive = require('harperive');

const DB_CONFIG = require('../config');

const Client = harperive.Client;
const client = new Client(DB_CONFIG);


// authorize user

client.authorize(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);


// create new schema

client.createSchema(
  {schema: "organisation"},
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);


// describe schema

client.describeSchema(
  {schema: "temp"},
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);

// drop schema

client.dropSchema(
  {schema: "temp"},
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)

// describe every schema and tables

client.describeAll(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);
