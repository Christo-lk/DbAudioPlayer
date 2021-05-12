exports.up = function (knex) {
  return knex.schema.createTable(('playlists'), (table) => {
    table.increments('id')
    table.integer('user_id')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('playlists')
}
