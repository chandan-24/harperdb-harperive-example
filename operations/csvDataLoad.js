'use strict'

const harperive = require('harperive');
const neatCsv = require('neat-csv');
const fs = require('fs')

const DB_CONFIG = require('../config');

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

// CSV file load is actually csv data load.
// First we load csv data from file into a variable and then pass in the query.

fs.readFile('./data/techCrunch.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const csvData = await neatCsv(data);

  client.csvDataLoad(
    {
      schema: 'cars',
      table: 'tech_crunch_funding',
      data: csvData,
    },
    (err, res) => {
      if(err) console.log(err);
      else console.log(res);
    }
  )
})


// load data from url

const url = 'https://s3.amazonaws.com/complimentarydata/breeds.csv';

client.csvUrlLoad(
  {
    schema: 'dev',
    table: 'breeds',
    url: url,
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res.data);
  }
)