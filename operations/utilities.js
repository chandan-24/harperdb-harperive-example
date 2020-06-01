'use strict'

const harperive = require('harperive');

const DB_CONFIG = require('../config');

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

// delete records before a given date

client.deleteFilesBefore(
  {
    schema: 'cars',
    table: 'tech_crunch_funding',
    date: '2020-05-31',
  },
  (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})


// fetch system information

client.systemInformation((err, res) => {
  if(err) console.log(err);
  else console.log(res);
})


// Get job details for the provided job id

client.getJobDetails({jobId: 'f13d813f-64d9-44d8-9a39-7135136c7b92'}, (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})


// get all jobs between given date

client.getJobsByDate(
  {
    from:"2020-05-31",
	  until:"2020-06-02",
  },
  (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})


// fetch db logs

client.readLogs(
  {
    limit:1000,
    start:0,
    from:"2020-06-01 17:00:00",
    until:"2020-06-01 21:00:00",
    order:"desc"
  },
  (err, res) => {
  if(err) console.log(err);
  else console.log(res);
})