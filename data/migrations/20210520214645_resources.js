exports.up = async function (knex) {
  await knex.schema.createTable("resources", (tbl) => {
    tbl.increments("resource_id");
    tbl.string("resource_name", 128).notNullable().unique();
    tbl.string("resource_description", 256);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("resources");
};
