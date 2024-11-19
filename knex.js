// knex.js
const knexConfig = require('./Knexfile');  // Import the knex configuration from knexfile.js
const knex = require('knex')(knexConfig);   // Initialize knex with the configuration

module.exports = knex;  // Export the knex instance to use it in other files
