/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("superheroes", (table) => {
      table.increments("id").primary(); // Auto-incrementing primary key
      table.string("name").notNullable(); // Superhero name
      table.string("power"); // Superhero powers
      table.string("city"); // City of operation
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("superheroes");
};
