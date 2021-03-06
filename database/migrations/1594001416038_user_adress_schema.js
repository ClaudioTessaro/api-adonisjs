"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserAdressSchema extends Schema {
  up() {
    this.create("user_adresses", (table) => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table.string("street").notNullable();
      table.string("district");
      table.integer("number");
      table.string("city");
      table.timestamps();
    });
  }

  down() {
    this.drop("user_adresses");
  }
}

module.exports = UserAdressSchema;
