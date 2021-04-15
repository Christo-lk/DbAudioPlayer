exports.up = function (knex) {
  return knex.schema.createTable(('songs'), (table) => {
    table.increments('id')
    table.string('title')
    table.string('artist')
    table.string('audioSrc')
    table.string('image')
    table.boolean('isLiked')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('songs')
}
