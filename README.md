# Database Operations in harperDB using harperive

## Dependancies

**[HArperDB](harperdb.io)**

**[Harperive](https://github.com/chandan-24/Harperive#readme) - A nodeJs client for harperDB**

## Connection

```javascript
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  schema: process.env.SCHEMA, // optional params
  
  // Alternatively schema can be passed in the options while quering for any operations on specific schema. Refer documanation for more clarification.
}

const Client = harperive.Client;
const client = new Client(DB_CONFIG);
```

## Operations

### _Check the files in operations Directory for implementation_

### [Schema](operations/schema.js)

* Create, Describe, Drop, Describe All.

### [Table](operations/table.js)

* Create, Describe, Drop, Drop Attribute.

### [Query](operations/query.js)

* sql Query
* noSql Query
  * Insert, Update, Delete, Search by hash, Search by value.
* CSV
  * Load from url, Load from file.

### [User](operations/user.js)

* Add, Alter, Drop, User info, List all users.

### [Role](operations/role.js)

* Add, Alter, Drop, List all roles.

### [Utilities](operations/utilities.js)

* Delete all records of a table before a given date.

* Export records to AWS S3.

* Fetch db logs between dates.

* Get system Information.

* Get job details for a given jod id.

* Get all jobs between dates.
