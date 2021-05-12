exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        { id: 1, user_id: 1, name: 'Bangers' },
        { id: 2, user_id: 1, name: 'Sadbuzz' },
        { id: 3, user_id: 1, name: 'Kinda Nice' }
      ])
    })
}
