/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('superheroes').del()
  await knex("superheroes").insert([
    { name: "Superman", power: "Flight, Super Strength", city: "Metropolis" },
    { name: "Batman", power: "Martial Arts, Gadgets", city: "Gotham" },
    { name: "Wonder Woman", power: "Super Strength, Lasso of Truth", city: "Themyscira" },
    { name: "Spider-Man", power: "Wall Climbing, Web-Shooting", city: "New York" },
    { name: "Iron Man", power: "Powered Armor Suit", city: "Malibu" },
  ]);
};
