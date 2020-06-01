'use strict'

const harperive = require('harperive');

const DB_CONFIG = require('../config');

const Client = harperive.Client;
const client = new Client(DB_CONFIG);


// List all roles

client.listRoles(
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)


// add new role

client.addRole(
  {
    roleName: 'support',
    super_admin: false,
    permission: {
      organisation: {
        tables: {
          users: {
            read: true,
            insert: true,
            update: true,
            delete: false,
            attribute_restrictions: []
          }
        }
      }
    }
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)

// update permissions for a role

client.alterRole(
  {
    roleId: '13fbcbf3-394f-4350-94df-3eed8ff4d2fc',
    super_admin: true,
    permission: {
      organisation: {
        tables: {
          users: {
            read: true,
            insert: false,
            update: true,
            delete: false,
            attribute_restrictions: [
              {
                attribute_name: 'username',
                read: true,
                insert: false,
                update: false,
                delete: false,
              },
            ]
          }
        }
      }
    }
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)


// delete a role

client.dropRole(
  {
    roleId: 'b746dd2e-a09f-485c-8a79-26ef6d29dabf'
  },
  (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  }
)

