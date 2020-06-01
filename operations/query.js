'use strict'

const harperive = require('harperive');

const DB_CONFIG = require('../config');

const Client = harperive.Client;
const client = new Client(DB_CONFIG);


// sql insert

const query = "insert into organisation.users (user_id, username, first_name, middle_name, last_name) values(20201, 'richy_rich', 'Richard', 'H.', 'Cole')"
client.query(
  query,
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);


// no sql insert

client.insert(
  {
    table: 'users',
    records: [
      {
        user_id: 213,
        username: 'richy2',
      },
      {
        user_id: 342,
        username: 'samt',
        first_name: 'Sam',
        last_name: 'Fag'
      },
      {
        user_id: 43,
        username: 'simon_j',
        first_name: 'James',
        middle_name: 'J.',
        last_name: 'Simon'
      }
    ]
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)


// no sql update

client.update(
  {
    table: 'users',
    records: [
      {
        first_name: 'Rajesh',
        last_name: 'Ranjan',
        user_id: 213,
        username: 'rajesh'
      }
    ]
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
);

// no sql delete

client.delete(
  {
    table: 'users',
    hashValues: [342]
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)


// no sql search by hash values

client.searchByHash(
  {
    table: 'users',
    hashValues: ['43', '213'],
    attributes: ['*'],
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)


// no sql search by value of a provided attributes

client.searchByValue(
  {
    table: 'users',
    searchAttribute: "username",
    searchValue: 'simon_j',
    attributes: ['*'],
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)