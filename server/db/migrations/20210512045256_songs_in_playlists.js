exports.up = function (knex) {
  return knex.schema.createTable(('songs_in_playlists'), (table) => {
    table.increments('id')
    table.integer('playlist_id').references('playlists.id')
    table.integer('song_id').references('songs.id')
    table.integer('user_id').references('users.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('songs_in_playlists')
}
