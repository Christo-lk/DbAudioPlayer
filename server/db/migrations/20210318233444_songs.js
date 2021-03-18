exports.up = function (knex) {
  return knex.schema.createTable(('songs'), (table) => {
    table.increments('id')
    table.string('title')
    table.string('artist')
    table.string('audioSrc')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('songs')
}
