'use strict'

const harperive = require('harperive');

const DB_CONFIG = require('../config');

const Client = harperive.Client;
const client = new Client(DB_CONFIG);


// add new user for a given role

client.addUser(
  {
    username: 'junior_support',
    password: 'org@123',
    role: '13fbcbf3-394f-4350-94df-3eed8ff4d2fc',
    active: true
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)


// update role, password or status of a user

client.alterUser(
  {
    username: 'junior_support',
    password: 'junior@org',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)


// delete a user

client.dropUser(
  {
    username: 'junior_support',
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);


// list all user

client.listUsers(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);


// get the details of current user

client.userInfo(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);