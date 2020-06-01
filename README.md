# Database Operations in HarperDB using Harperive

This repo contains the syntax for various **database operations** with which you can integrate **HarperDB** for database storage in your **nodeJS application** using **Harperive** with zero overheads (_refer Harperive [documentation](https://github.com/chandan-24/Harperive#readme) for more information_).

**[HarperDB](https://harperdb.io/)**

**[Harperive](https://github.com/chandan-24/Harperive#readme) - A nodeJs client for harperDB**

## How to run

* `npm install` - will install the dependencies.

* Your harperDB instance should be up and running either in loacal or cloud.

* Navigate to operations Directory, execute `node [filepath]` to run each file to execute each type of operations(function calls).

* You should execute single operation at a time will executing file, comment other operations(function calls).

## Connection

```javascript
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  schema: process.env.SCHEMA, // optional params
  
  /* Alternatively schema can be passed in the options while quering for any operations
  *  on specific schema. Refer documanation for more clarification.
  */
}

const Client = harperive.Client;
const client = new Client(DB_CONFIG);

client.anyOperation(options, (err, res) => {
  if(err) console.log(err);
  console.log(res);
});
```

## Operations

### _Check the files in operations Directory for implementation, navigate through below headings_

### [Schema](operations/schema.js)

* Create, Describe, Drop, Describe All.

### [Table](operations/table.js)

* Create, Describe, Drop, Drop Attribute.

### [Query](operations/query.js)

* sql Query
* noSql Query
  * Insert, Update, Delete, Search by hash, Search by value.
* [CSV](operations/csvDataLoad.js)
  * Load from url, Load from file.

### [User](operations/user.js)

* Add, Alter, Drop, User info, List all users.

### [Role](operations/role.js)

* Add, Alter, Drop, List all roles.

### [Utilities](operations/utilities.js)

* Delete all records of a table before a given date.

* Export records to AWS S3(currently code not written).

* Fetch db logs between dates.

* Get system Information.

* Get job details for a given jod id.

* Get all jobs between dates.
