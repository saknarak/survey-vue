'use strict'

const config = require('../config')

let db = config[config.db]
if (!db || !db.driver) {
  throw new Error('NO DATABASE SELECTED')
}

module.exports = require('knex')({
  client: db.driver,
  connection: db.param,
  debug: !process.env.DOCKER,
  pool: {
    min: 0,
    max: 10,
  },
})
