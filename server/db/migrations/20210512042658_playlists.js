exports.up = function (knex) {
  return knex.schema.createTable(('playlists'), (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('playlists')
}
